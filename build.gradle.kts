buildscript {
    repositories {
        gradlePluginPortal()
        google()
        mavenCentral()
    }
    dependencies {
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.7.20-Beta")
        classpath("com.android.tools.build:gradle:7.4.0-alpha09")
    }
}

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}

tasks.register("buildJs") {
    dependsOn("shared:compileProductionExecutableKotlinJs")

    doLast {
        val from = File("$buildDir/js/packages/kmm-test-shared/kotlin")
        val into = File("$projectDir/jsApp/src/kotlin")
        if (into.exists()) into.deleteRecursively()

        from.copyRecursively(into, true)
    }
}