import androidx.compose.runtime.*
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text

import org.jetbrains.compose.web.renderComposable

fun main() {

    renderComposable(rootElementId = "root") {
        HashRouter {
            route{
                path("qwe")
                val id by int()
                val q by optionalInt()

                content {
                    Div {
                        Text("id = $id\n")
                        Text("q = $q")
                    }
                }
            }

            route{
                path("")

                content {
                    Div {
                        Text("Hello world")
                    }
                }
            }

            route{
                path("inna")

                content {
                    Div {
                        Text("Hello Inna")
                    }
                }
            }
        }
    }
}





