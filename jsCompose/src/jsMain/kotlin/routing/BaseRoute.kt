package routing

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import kotlin.reflect.KProperty

abstract class BaseRoute {
    var resultRegex = ""
    private val names = mutableListOf<String>()
    private var params by mutableStateOf<Map<String, String?>>(mapOf())

    @Composable
    abstract fun onEnter()

    /**
     * true means that other routes will not be checked
     */
    @Composable
    open fun shouldEnter(url: String): Boolean {
        val regex = "${resultRegex.ifEmpty { "/" }}(\\?.+)*".toRegex()
        val groups = regex.matchEntire(url)?.groups ?: return false
        params = names.associateWith { groups[it]?.value }

        return true
    }

    fun <T> param(
        converter: String.() -> T,
        optional: Boolean,
        regex: String
    ): BaseRoute.ParamDelegate<T> {
        val name = "name" + names.size.toString()
        names.add(name)
        val namedGroup = "/(?<$name>$regex)"
        resultRegex += if (optional) "($namedGroup)*" else namedGroup

        return ParamDelegate(name, converter)
    }

    inner class ParamDelegate<T>(private val name: String, private val converter: String.() -> T) {
        @Suppress("UNCHECKED_CAST")
        operator fun getValue(thisRef: Any?, property: KProperty<*>): T = params[name]?.converter() as T
    }
}

fun BaseRoute.path(path: String) {
    if (path == "/" || path.isEmpty()) return

    resultRegex += path.normalizeUrl()
}

inline fun <reified T> BaseRoute.pathParam(): BaseRoute.ParamDelegate<T> {
    val optional: Boolean = null is T

    return if (optional) {
        when (T::class) {
            Int::class -> param(String::toIntOrNull, optional, "\\d+")
            Boolean::class -> param(String::toBooleanStrictOrNull, optional, "(true|false)")
            String::class -> param({ decodeURIComponent(this) }, optional, "[^/]+")
            Double::class -> param(String::toDoubleOrNull, optional, "\\d+(\\.\\d+)*")
            Float::class -> param(String::toFloatOrNull, optional, "\\d+(\\.\\d+)*")
            else -> null
        } as BaseRoute.ParamDelegate<T>
    } else {
        when (T::class) {
            Int::class -> param(String::toInt, optional, "\\d+")
            Boolean::class -> param(String::toBooleanStrict, optional, "(true|false)")
            String::class -> param({ decodeURIComponent(this) }, optional, "[^/]+")
            Double::class -> param(String::toDouble, optional, "\\d+(\\.\\d+)*")
            Float::class -> param(String::toFloat, optional, "\\d+(\\.\\d+)*")
            else -> null
        } as BaseRoute.ParamDelegate<T>
    }
}
