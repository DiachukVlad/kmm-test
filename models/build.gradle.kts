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
    jvm()
    js(IR){
        browser()
        binaries.executable()
    }
    sourceSets {
        val commonMain by getting {
        }
    }
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions.jvmTarget = "16"
}