package com.diachuk.vladar

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
@Serializable
data class User(val name:String, val surname: String)
