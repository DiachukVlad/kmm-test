package ui

import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.compositionLocalOf
import org.jetbrains.compose.web.css.CSSColorValue
import org.jetbrains.compose.web.css.rgba

data class VColors(
    val mainGreen: CSSColorValue = rgba(77, 119, 78, 1),
    val background: CSSColorValue = rgba(255, 255, 255, 1)
)

class VTheme(
    val colors: VColors
)

private val localTheme = compositionLocalOf { VTheme(VColors()) }
val LocalTheme: VTheme @Composable get() = localTheme.current

@Composable
fun VladarTheme(content: @Composable () -> Unit) {
    val theme = VTheme(VColors())
    CompositionLocalProvider(localTheme provides theme, content = content)
}