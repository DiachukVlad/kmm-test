package com.vladar

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.vladar.plugins.*

fun main() {
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
//        configureSecurity()
        configureSerialization()
        configureRouting()
    }.start(wait = true)
}
