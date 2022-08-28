package routing

import org.w3c.dom.url.URLSearchParams

fun HashRouterContext.updateQueryParams() {
    val paramsString = getQueryParamsString()
    queryParams = URLSearchParams(paramsString)
}

fun HashRouterContext.getQueryParamsString(): String {
    return url?.let {
        "^.+(\\?.*)".toRegex().matchEntire(it)?.groups?.get(1)?.value
    } ?: ""
}

operator fun URLSearchParams.get(name: String) = get(name)