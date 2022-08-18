import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.renderComposable

fun main() {
    var count: Int by mutableStateOf(0)

    renderComposable(rootElementId = "root") {
        Div({ style { padding(25.px) } }) {
            Button(attrs = {
                onClick {
                    sendTestGet()
                }
            }) {
                Text("Get")
            }

            Button(attrs = {
                onClick {
                    sendTestPost()
                }
            }) {
                Text("Post")
            }
        }
    }
}

