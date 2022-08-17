import io.ktor.client.*
import io.ktor.client.engine.*
import io.ktor.client.engine.js.*

actual val engine: HttpClientEngineFactory<HttpClientEngineConfig> = Js
val e = HttpClient(Js)