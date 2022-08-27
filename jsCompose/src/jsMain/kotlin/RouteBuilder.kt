import androidx.compose.runtime.*
import kotlin.reflect.KProperty

class RouteBuilder {
    var resultRegex = ""
    val names = mutableListOf<String>()
    var content: @Composable (() -> Unit)? = null

    var params by mutableStateOf<Map<String, String?>>(mapOf())

    fun check(url: String): Boolean {
        val regex = "${resultRegex.ifEmpty { "/" }}(\\?.+)*".toRegex()
        val groups = regex.matchEntire(url)?.groups ?: return false

        params = names.associateWith { groups[it]?.value }
        println(params)
        return true
    }

    inner class ParamDelegate<T>(private val name: String, private val converter: String.() -> T?) {
        operator fun getValue(thisRef: Any?, property: KProperty<*>) = params[name]?.converter()
    }
}

fun RouteBuilder.path(path: String) {
    if (path == "/" || path == "#/" || path == "/#/") return

    resultRegex += (if (!path.startsWith("/")) "/" else "") + path.removeSuffix("/")
}

fun <T> RouteBuilder.param(
    converter: String.() -> T?,
    applyRegexGroup: (String) -> String
): RouteBuilder.ParamDelegate<T> {
    val name = "name" + names.size.toString()
    names.add(name)
    resultRegex += applyRegexGroup(name)

    return ParamDelegate(name, converter)
}

fun RouteBuilder.int() = param(String::toIntOrNull) { name -> "/(?<$name>\\d+)" }
fun RouteBuilder.boolean() = param(String::toBooleanStrictOrNull) { name -> "/(?<$name>(true|false))" }

fun RouteBuilder.optionalInt() = param(String::toIntOrNull) { name -> "(/(?<$name>\\d+))*"}
fun RouteBuilder.optionalBoolean() = param(String::toBooleanStrictOrNull) { name -> "(/(?<$name>(true|false)))*"}

fun RouteBuilder.content(content: @Composable () -> Unit) {
    this.content = content
}