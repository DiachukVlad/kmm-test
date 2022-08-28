package mainpage

import androidx.compose.runtime.Composable
import home.HomeSection
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.Div
import ui.LocalTheme

@Composable
fun MainBody() {
    Div({
        style {
            margin(0.px)
            height(100.percent)
        }
    }) {
        HomeSection()
        Div({
            style {
                width(100.percent)
                height(100.percent)
                backgroundColor(Color("red"))
            }
        }) {

        }
    }
}