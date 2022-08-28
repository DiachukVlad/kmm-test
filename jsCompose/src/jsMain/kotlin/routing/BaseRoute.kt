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
    open fun shouldEnter(url: String): Boolean{
        val regex = "${resultRegex.ifEmpty { "/" }}(\\?.+)*".toRegex()
        val groups = regex.matchEntire(url)?.groups ?: return false
        params = names.associateWith { groups[it]?.value }

        return true
    }

    fun <T> param(
        converter: String.() -> T?,
        applyRegexGroup: (String) -> String
    ): BaseRoute.ParamDelegate<T> {
        val name = "name" + names.size.toString()
        names.add(name)
        resultRegex += applyRegexGroup(name)

        return ParamDelegate(name, converter)
    }

    inner class ParamDelegate<T>(private val name: String, private val converter: String.() -> T?) {
        operator fun getValue(thisRef: Any?, property: KProperty<*>) = params[name]?.converter()
    }
}

fun BaseRoute.path(path: String) {
    if (path == "/" || path.isEmpty()) return

    resultRegex += path.normalizeUrl()
}

fun BaseRoute.int() = param(String::toIntOrNull) { name -> "/(?<$name>\\d+)" }
fun BaseRoute.boolean() = param(String::toBooleanStrictOrNull) { name -> "/(?<$name>(true|false))" }

fun BaseRoute.optionalInt() = param(String::toIntOrNull) { name -> "(/(?<$name>\\d+))*"}
fun BaseRoute.optionalBoolean() = param(String::toBooleanStrictOrNull) { name -> "(/(?<$name>(true|false)))*"}