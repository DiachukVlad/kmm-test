import com.diachuk.vladar.User
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.json.Json

fun main() {
    val client = HttpClient(CIO) {
        install(ContentNegotiation) {
            json(Json)
        }
    }

    runBlocking {
        val res = client.post("http://127.0.0.1:8080") {
            contentType(ContentType.Application.Json)
            setBody(User("asd", "asdas"))
        }
        println(res.bodyAsText())
    }
}