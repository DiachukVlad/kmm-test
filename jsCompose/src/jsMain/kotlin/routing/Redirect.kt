package routing

import androidx.compose.runtime.Composable

class Redirect : BaseRoute() {
    var pathToRedirect: String = "/"
        set(value) {
            field = "/" + value
                .removePrefix("/")
        }

    @Composable
    override fun onEnter() {
        CurrentRouterContext.url = pathToRedirect
    }
}

fun HashRouterContext.redirect(builder: Redirect.() -> Unit) {
    Redirect()
        .apply(builder)
        .also { routes.add(it) }
}