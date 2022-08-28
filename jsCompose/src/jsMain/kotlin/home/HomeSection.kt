package home

import androidx.compose.runtime.Composable
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.Div
import ui.LocalTheme

@Composable
fun HomeSection() {
    val colors = LocalTheme.colors
    Div({
        style {
            width(100.percent)
            height(100.percent)
            backgroundColor(colors.mainGreen)
        }
    }) {

    }
}