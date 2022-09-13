package home

import androidx.compose.runtime.Composable
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Img
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Text
import ui.VColors
import ui.base.BaseStyles
import ui.rememberTheme

internal class NavBarStyles(colors: VColors) : BaseStyles(colors) {
    val main = style {
        position(Position.Absolute)
        width(100.percent)
        top(0.px)
        left(0.px)
        display(DisplayStyle.Flex)
        justifyContent(JustifyContent.Center)
        gap(80.px)
    }

    val link = style {
        fontFamily("Calibri")
        fontStyle("normal")
        fontWeight(400)
        fontSize(48.px)
        lineHeight(59.px)
        color(colors.mainGreen)
    }
}

@Composable
fun Link(text: String) {
    val styles = rememberTheme { NavBarStyles(colors) }

    P({
        style(styles.link)
    }) {
        Text(text)
    }
}

@Composable
fun NavBar() {
    val styles = rememberTheme { NavBarStyles(colors) }

    Div({
        style(styles.main)
    }) {
        Link("About")
        Link("Blog")
        Img(src = "img/logo.svg")
        Link("Price")
        Link("Contacts")
    }
}