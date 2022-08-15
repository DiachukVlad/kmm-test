@file:JsExport

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

class Module {
    fun qwe() = "qweqwe"

    var s = "fghjj"
}

object Obg {
    val r = 123
}

fun mainFunc() {
    GlobalScope.launch {
        repeat(5) {
            delay(2000)
            console.log("Message - $it")
        }
    }
    console.log("Hello Taras")
}