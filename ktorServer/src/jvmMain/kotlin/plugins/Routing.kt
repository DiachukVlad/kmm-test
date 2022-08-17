package com.vladar.plugins

import com.diachuk.vladar.User
import io.ktor.server.routing.*
import io.ktor.server.locations.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*

fun Application.configureRouting() {
    install(Locations) {
    }

    routing {
        get("/") {
            call.respond(User("Vlad", "Diachuk"))
        }
        post("/") {
            println(call.receive<User>())
        }
    }
}