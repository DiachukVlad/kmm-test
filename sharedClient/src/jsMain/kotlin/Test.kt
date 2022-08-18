import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.engine.js.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json
import kotlin.js.json


val client = HttpClient(Js) {
    install(ContentNegotiation) {
        json()
    }
}
fun testKtor() {
    GlobalScope.launch {
//        client.post("127.0.0.1:8080") {
//            contentType(ContentType.Application.Json)
//            setBody(User("Inna", "Kostiuk"))
//        }
        val response = client.get("http://www.testingmcafeesites.com/index.html")
        response.headers.forEach { s, strings ->
            println("s = ${s}")
            println("strings = ${strings}\n")
        }
    }
}