val kotlinVersion: String by project

buildscript {
    repositories {
        gradlePluginPortal()
        google()
        mavenCentral()
    }
}

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}

tasks.register("buildJs") {
    dependsOn("sharedClient:compileProductionExecutableKotlinJs")

    doLast {
        val from = File("$buildDir/js/packages/kmm-test-sharedClient/kotlin")
        val into = File("$projectDir/jsApp/src/kotlin")
        if (into.exists()) into.deleteRecursively()

        from.copyRecursively(into, true)
    }
}