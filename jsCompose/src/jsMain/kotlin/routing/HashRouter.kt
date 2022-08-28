package routing

import androidx.compose.runtime.*
import kotlinx.browser.window

private fun String.currentURL() = removePrefix("#")
    .removeSuffix("/")
    .ifBlank { "/" }

private val LocalRouterContext = compositionLocalOf { HashRouterContext() }
val CurrentRouterContext: HashRouterContext @Composable get() = LocalRouterContext.current

@Composable
fun HashRouter(build: HashRouterContext.() -> Unit) {
    val path = window.location.pathname
    if (path != "/") {
        window.location.replace("/#$path")
        return
    }

    val context = remember(build) {
        HashRouterContext()
            .apply(build)
    }

    LaunchedEffect(Unit) {
        context.url = window.location.hash.currentURL()
        window.onpopstate = {
            context.url = window.location.hash.currentURL()
            Unit
        }
    }

    CompositionLocalProvider(LocalRouterContext provides context) {
        context.url?.let { url ->
            context.routes
                .firstOrNull { it.shouldEnter(url) }
                ?.onEnter() // enter first found route
                ?: context.notFoundContent?.invoke() // show not found content if any suitable route found
        }
    }
}
