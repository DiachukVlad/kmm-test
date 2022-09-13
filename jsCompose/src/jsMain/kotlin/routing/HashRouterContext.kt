package routing

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import kotlinx.browser.window
import org.w3c.dom.url.URLSearchParams
import kotlin.reflect.KProperty

class HashRouterContext {
    companion object {
        const val DEFAULT_ROUTE = "/"
    }

    var routes = mutableListOf<BaseRoute>()
    var notFoundContent: @Composable (() -> Unit)? by mutableStateOf(null)

    private var currentLocation: String? by mutableStateOf(null)
    var url: String?
        get() = currentLocation
        set(value) {
            val normalized = value?.normalizeUrl()
            currentLocation = normalized
            window.location.hash = normalized ?: DEFAULT_ROUTE

            updateQueryParams()
        }

    var queryParams: URLSearchParams by mutableStateOf(URLSearchParams(""))

    inner class QueryParamsDelegate<T>(val convert: (String?) -> T) {
        operator fun getValue(thisRef: Any?, property: KProperty<*>): T {
            return convert(queryParams[property.name])
        }
    }
}

@Suppress("UNCHECKED_CAST")
fun <T> HashRouterContext.queryParam(
    default: T,
    name: String? = null
): HashRouterContext.QueryParamsDelegate<T> {
    return when (default) {
        is Int -> QueryParamsDelegate { it?.toIntOrNull() ?: default }
        is Boolean -> QueryParamsDelegate { it?.toBooleanStrictOrNull() ?: default }
        is Double -> QueryParamsDelegate { it?.toDoubleOrNull() ?: default }
        is Float -> QueryParamsDelegate { it?.toFloatOrNull() ?: default }
        is String -> QueryParamsDelegate { decodeURIComponentOrNull(it) }
        else -> throw IllegalArgumentException("Bad type query param")
    } as HashRouterContext.QueryParamsDelegate<T>
}

@Suppress("UNCHECKED_CAST")
inline fun <reified T> HashRouterContext.queryParam(
    name: String? = null
): HashRouterContext.QueryParamsDelegate<T?> {
    return when (T::class) {
        Int::class -> QueryParamsDelegate{it?.toIntOrNull()}
        Boolean::class -> QueryParamsDelegate{it?.toBooleanStrictOrNull()}
        Double::class -> QueryParamsDelegate{it?.toDoubleOrNull()}
        Float::class -> QueryParamsDelegate{it?.toFloatOrNull()}
        String::class -> QueryParamsDelegate { it?.let { it1 -> decodeURIComponent(it1) } }
        else -> throw IllegalArgumentException("Bad query param type. Could be only: Int, Boolean, String, Double, Float")
    } as HashRouterContext.QueryParamsDelegate<T?>
}

fun HashRouterContext.notFound(content: @Composable () -> Unit) {
    notFoundContent = content
}