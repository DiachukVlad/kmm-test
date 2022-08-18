buildscript {
    repositories {
        mavenLocal()
        mavenCentral()
        google()
    }
}

plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization")
}

version = "1.0-SNAPSHOT"

repositories {
    mavenLocal()
    mavenCentral()
    gradlePluginPortal()
    google()
}

kotlin {
    jvm()
    js(IR){
        browser()
        binaries.executable()
    }
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.3.2")
            }
        }
    }
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions.jvmTarget = "16"
}