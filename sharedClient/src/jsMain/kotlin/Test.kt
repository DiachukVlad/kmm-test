import com.diachuk.vladar.User
import io.ktor.client.request.*
import io.ktor.http.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

@JsExport
fun testKtor() {
    GlobalScope.launch {
        client.post {
            contentType(ContentType.Application.Json)
            setBody(User("Inna", "Kostiuk"))
        }
    }
}