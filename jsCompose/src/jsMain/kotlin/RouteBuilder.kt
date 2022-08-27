import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf

class RouteBuilder {
    var resultRegex = ""
    val names = mutableListOf<String>()
    var content: @Composable (() -> Unit)? = null

    val states = HashMap<String, Pair<MutableState<Any?>, (String.() -> Any?)>>()

    fun check(url: String): Boolean {
        val regex = "${resultRegex.ifEmpty { "/" }}(\\?.+)*".toRegex()
        println("resultRegex = ${regex.pattern}")
        println(url)
        val match = regex.matchEntire(url) ?: return false

        names.forEach { name ->
            val (state, convert) = states[name] ?: return@forEach

            state.value = match.groups[name]?.value?.convert()
        }

        return true
    }
}

fun RouteBuilder.path(path: String) {
    if (path == "/" || path == "#/" || path == "/#/") return

    resultRegex += (if (!path.startsWith("/")) "/" else "") + path.removeSuffix("/")
}

fun <T> RouteBuilder.param(applyRegex: (String) -> String, converter: String.() -> T): State<T?> {
    val name = "name" + names.size.toString()
    names.add(name)
    val regex = applyRegex(name)
    resultRegex += regex


    val state = mutableStateOf<T?>(null)

    @Suppress("UNCHECKED_CAST")
    states[name] = (state as MutableState<Any?>) to converter

    return state
}

fun RouteBuilder.int() = param({ "/(?<$it>\\d+)" }, { toIntOrNull() })
fun RouteBuilder.optionalInt() = param({ "(/(?<$it>\\d+)){0,}" }, { toIntOrNull() })


fun RouteBuilder.content(content: @Composable () -> Unit) {
    this.content = content
}