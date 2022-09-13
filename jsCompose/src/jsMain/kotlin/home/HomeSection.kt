package home

import AppState
import androidx.compose.runtime.Composable
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.Img
import org.jetbrains.compose.web.dom.Text
import ui.VColors
import ui.base.BaseStyles
import ui.rememberTheme

private class HomeStyles(colors: VColors) : BaseStyles(colors) {
    val main = style {
        width(100.percent)
        height(100.percent)
        backgroundColor(colors.background)
    }

    val text = style {
        color(colors.mainGreen)
    }

    val bgImg = style {
        width(100.percent)
    }
}

@Composable
fun HomeSection() {
    val styles = rememberTheme { HomeStyles(colors) }

    Div({
        style(styles.main)
        onClick {
            AppState.isDarkTheme = !AppState.isDarkTheme
        }
    }) {
        Img("img/home_background.png") {
            style(styles.bgImg)
        }
        NavBar()
    }
}