import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text

import org.jetbrains.compose.web.renderComposable
import routing.*

fun main() {

    renderComposable(rootElementId = "root") {
        HashRouter {
            route{
                path("")
                val qwe by intQueryParam()

                content {
                    Div {
                        Text("Hello world")
                    }
                }
            }


            redirect {
                path("/red")
                pathToRedirect = "/hoinka/"
            }

            notFound {
                Text("NOT FOUND")
            }
        }
    }
}





