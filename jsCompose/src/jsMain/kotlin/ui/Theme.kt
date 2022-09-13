package ui

import androidx.compose.runtime.*

class VTheme(
    val colors: VColors
)

private val localTheme = compositionLocalOf { VTheme(lightColors) }
val LocalTheme: VTheme @Composable get() = localTheme.current

@Composable
fun VladarTheme(content: @Composable () -> Unit) {
    val colors = if (AppState.isDarkTheme) darkColors else lightColors
    CompositionLocalProvider(localTheme provides VTheme(colors), content = content)
}

@Composable
fun <T> rememberTheme(instance: VTheme.() -> T): T {
    val theme = LocalTheme
    return remember(theme) { theme.instance() }
}