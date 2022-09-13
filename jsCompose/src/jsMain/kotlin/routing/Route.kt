package routing

import androidx.compose.runtime.*

class Route: BaseRoute() {
    var content: @Composable (() -> Unit)? = null

    @Composable
    override fun onEnter() {
        content?.invoke()
    }
}

fun HashRouterContext.route(
    build: Route.() -> Unit
) {
    routes.add(Route().apply(build))
}

fun Route.content(content: @Composable () -> Unit) {
    this.content = content
}