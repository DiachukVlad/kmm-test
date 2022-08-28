package routing

fun String.normalizeUrl() =
    "/" + this
        .removeSuffix("/")
        .removePrefix("/")

external fun encodeURIComponent(encodedURI: String): String
external fun decodeURIComponent(encodedURI: String): String