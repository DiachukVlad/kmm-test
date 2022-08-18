import io.ktor.client.*
import io.ktor.client.engine.*
import io.ktor.client.plugins.contentnegotiation.*
import kotlin.js.json

expect val engine: HttpClientEngineFactory<HttpClientEngineConfig>
