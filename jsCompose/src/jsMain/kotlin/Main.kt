import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import app.softwork.routingcompose.*

import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.renderComposable

fun main() {
    var count: Int by mutableStateOf(0)

    renderComposable(rootElementId = "root") {
        BrowserRouter("/") {
            route("/hello") {
                int { userID ->
                    Text("User with $userID")
                }
                noMatch {
                    Text("User list")
                }
            }
            route("/") {
                Text("Def route")
                NavLink("/hello/123", null) {
                    Text("Link to hello")
                }
            }
        }
    }
}

