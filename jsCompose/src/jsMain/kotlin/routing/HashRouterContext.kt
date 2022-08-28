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
            println("value = ${value}")
            val normalized = value?.normalizeUrl()
            currentLocation = normalized
            window.location.hash = normalized ?: DEFAULT_ROUTE

            updateQueryParams()
        }

    var queryParams: URLSearchParams by mutableStateOf(URLSearchParams(""))

    inner class QueryParamsDelegate<T>(val convert: String.() -> T) {
        operator fun getValue(thisRef: Any?, property: KProperty<*>): T? {
            return queryParams[property.name]?.convert()
        }
    }
}

fun HashRouterContext.intQueryParam() = QueryParamsDelegate(String::toIntOrNull)
fun HashRouterContext.booleanQueryParam() = QueryParamsDelegate(String::toBooleanStrictOrNull)
fun HashRouterContext.stringQueryParam() = QueryParamsDelegate { this }

fun HashRouterContext.notFound(content: @Composable () -> Unit) {
    notFoundContent = content
}