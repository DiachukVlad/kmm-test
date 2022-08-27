import androidx.compose.runtime.Composable

class RouterBuilder {
    var routes = mutableListOf<RouteBuilder>()
}

fun RouterBuilder.route(
    build: RouteBuilder.() -> Unit
) {
    routes.add(RouteBuilder().apply(build))
}
