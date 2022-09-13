package routing

fun String.normalizeUrl() =
    "/" + this
        .removeSuffix("/")
        .removePrefix("/")

fun String.currentURL() = removePrefix("#")
    .removeSuffix("/")
    .ifBlank { "/" }

external fun decodeURIComponent(encodedURI: String): String
fun decodeURIComponentOrNull(encodedURI: String?): String? {
    if (encodedURI == null) return null
    return try {
        decodeURIComponent(encodedURI)
    } catch (e: Throwable) {
        null
    }
}