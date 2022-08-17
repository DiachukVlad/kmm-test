rootProject.name = "kmm-test"

pluginManagement {
    repositories {
        google()
        gradlePluginPortal()
        mavenCentral()
    }
}

val kv = "1.7.10-Beta"

//include(":androidApp")
include(":sharedClient")
include(":ktorServer")
include(":models")