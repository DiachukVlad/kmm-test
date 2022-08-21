import com.diachuk.vladar.User
import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*

fun Application.configureRouting() {
    routing {
        get("/") {
            call.respond(User("Vlad", "Diachuk"))
        }
        post("/") {
            val user = call.receive<User>()
            call.respond(user)
        }
    }
}