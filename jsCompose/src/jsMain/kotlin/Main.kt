import androidx.compose.runtime.Composable
import mainpage.MainBody
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.P
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
                    val i: Int by pathParam()
                    val b: Boolean by pathParam()

                    content{
                        MainBody()
                    }
                }

                route {// /users/Vlad%20Diachuk/123
                    path("users")
                    val name: String by pathParam()
                    val id: Int by pathParam()
                    val qwe: String by queryParam(default = "default")

                    content {
                        Text("Id = $id")
                        P {
                         Text("Name = $name")
                        }
                        P {
                            Text("qwe = $qwe")
                        }
                    }
                }
//
//                redirect {
//                    path("taras")
//
//                    pathToRedirect = "vlad"
//                }

                notFound {
                    Text("NOT FOUND")
                }

//                val qwe by stringQueryParam()
//
//                P {
//                    Text(url ?: "null")
//                }
//                P {
//                    Text(qwe ?: "null")
//                }
            }
        }
    }
}



