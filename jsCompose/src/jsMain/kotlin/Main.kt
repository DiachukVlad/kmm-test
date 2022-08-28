import androidx.compose.runtime.Composable
import mainpage.MainBody
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text

import org.jetbrains.compose.web.renderComposable
import routing.*
import ui.VladarTheme

fun main() {
    renderComposable(rootElementId = "root") {
        VladarTheme {
            HashRouter {
                route {
                    path("/")
                    content{
                        MainBody()
                    }
                }

                notFound {
                    Text("NOT FOUND")
                }
            }
        }
    }
}



