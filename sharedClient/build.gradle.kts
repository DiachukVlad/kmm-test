val ktorVersion: String by project

buildscript {
    repositories {
        mavenLocal()
        mavenCentral()
        google()
    }
}

plugins {
    kotlin("multiplatform")
}

version = "1.0-SNAPSHOT"

repositories {
    mavenLocal()
    mavenCentral()
    gradlePluginPortal()
    google()
}

kotlin {
    js(IR) {
        useCommonJs()
        moduleName = "sharedClient"
        browser{
            webpackTask {
                outputFileName = "sharedClient.js"
                output.libraryTarget = "commonjs2"
            }
        }

        binaries.library()
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.4")
                implementation("io.ktor:ktor-client-core:$ktorVersion")
                implementation("io.ktor:ktor-serialization-kotlinx-json:$ktorVersion")
                implementation("io.ktor:ktor-client-content-negotiation:$ktorVersion")
                implementation(project(":models"))
            }
        }

        val jsMain by getting {
            dependencies {
                implementation("io.ktor:ktor-client-js:$ktorVersion")
                implementation(project(":models"))
            }
        }
    }
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions.jvmTarget = "16"
}

tasks.register("buildJs") {
    dependsOn("jsBrowserProductionLibraryDistribution")

    doLast {
        val from = File("$buildDir/productionLibrary")
        val into = File("$projectDir/../jsApp/src/kotlin")
        if (into.exists()) into.deleteRecursively()

        from.copyRecursively(into, true)
    }
}