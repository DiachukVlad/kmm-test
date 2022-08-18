val kotlinVersion: String by project

buildscript {
    repositories {
        mavenLocal()
        mavenCentral()
        google()
        maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
    }
}

plugins {
    kotlin("multiplatform") apply false
    id("org.jetbrains.compose") apply false
}

allprojects {
    repositories {
        mavenLocal()
        mavenCentral()
        gradlePluginPortal()
        maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
        google()
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