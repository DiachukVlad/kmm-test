package ui

import org.jetbrains.compose.web.css.CSSColorValue
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.rgba

data class VColors(
    val mainGreen: CSSColorValue,
    val background: CSSColorValue
)

val lightColors = VColors(
    mainGreen = rgba(77, 119, 78, 1),
    background = rgba(255, 255, 255, 1)
)
val darkColors = VColors(
    mainGreen = Color("white"),
    background = Color("black")
)