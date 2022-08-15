buildscript {
    repositories {
        mavenLocal()
        mavenCentral()
        google()
        maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
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
    maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
    google()
}

kotlin {
    js(IR) {
        useCommonJs()
        browser{
            webpackTask {
                outputFileName = "mycustomfilename.js"
                output.libraryTarget = "commonjs2"
            }
        }
        binaries.executable()
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.4")
            }
        }

        val jsMain by getting {
        }
    }
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions.jvmTarget = "16"
}