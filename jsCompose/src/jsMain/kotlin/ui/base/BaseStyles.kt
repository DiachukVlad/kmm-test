package ui.base

import org.jetbrains.compose.web.css.StyleScope
import ui.VColors

abstract class BaseStyles(val colors: VColors) {
    fun style(style: StyleScope.()->Unit) = style
}