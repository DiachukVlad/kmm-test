import com.diachuk.vladar.User
import io.ktor.client.*
import io.ktor.client.engine.js.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json

@JsExport
fun sendTestGet() {
    GlobalScope.launch {
        val response = client.get("http://127.0.0.1:8080")
        println(response.bodyAsText())
    }
}

@JsExport
fun sendTestPost() {
    GlobalScope.launch {
        val response = client.post("http://127.0.0.1:8080/") {
            contentType(ContentType.Application.Json)
            setBody(User("Inna", "Kostiuk"))
        }
        println(response.bodyAsText())
    }
}