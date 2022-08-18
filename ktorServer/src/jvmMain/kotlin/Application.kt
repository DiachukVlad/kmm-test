package com.vladar

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.vladar.plugins.*
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.cors.routing.*

fun main() {
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
//        configureSecurity()
        install(CORS) {
            allowMethod(HttpMethod.Get)
            allowMethod(HttpMethod.Post)
            allowHeader(HttpHeaders.AccessControlAllowHeaders)
            allowHeader(HttpHeaders.ContentType)
            allowHeader(HttpHeaders.AccessControlAllowOrigin)
            allowHeader(HttpHeaders.Cookie)
            allowCredentials = true
            maxAgeInSeconds = 1
            anyHost()
        }
        configureSerialization()
        configureRouting()
    }.start(wait = true)
}
