import androidx.compose.runtime.*
import kotlinx.browser.window
import org.w3c.dom.Location

private fun Location.newPath() = "$pathname$search"
private fun String.currentURL() = removePrefix("#")
    .removeSuffix("/")
    .ifBlank { "/" }

external fun encodeURIComponent(encodedURI: String): String
external fun decodeURIComponent(encodedURI: String): String

@Composable
fun HashRouter(build: RouterBuilder.() -> Unit) {
    var currentLocation: String? by remember { mutableStateOf(null) }
    LaunchedEffect(Unit) {
        currentLocation = window.location.hash.currentURL()
        window.onpopstate = {
            currentLocation = window.location.hash.currentURL()
            Unit
        }
    }
    println("currentLocation = ${currentLocation}")
    val routerBuilder = remember(build) { RouterBuilder().apply(build) }
    currentLocation?.let { url ->
        routerBuilder.routes.firstOrNull{it.check(url)}?.content?.invoke()
    }
}
