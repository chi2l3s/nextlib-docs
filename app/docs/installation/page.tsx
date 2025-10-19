"use client"

import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function InstallationPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Installation",
      description: "Add NextLib to your plugin via JitPack and declare the dependency.",
      gradle: `repositories {
  mavenCentral()
  maven { url 'https://jitpack.io' }
}

dependencies {
  compileOnly 'com.github.chi2l3s:next-lib:1.0.0'
  // or shade it:
  // implementation 'com.github.chi2l3s:next-lib:1.0.0'
}`,
      maven: `<repositories>
  <repository>
    <id>jitpack</id>
    <url>https://jitpack.io</url>
  </repository>
</repositories>

<dependencies>
  <dependency>
    <groupId>com.github.chi2l3s</groupId>
    <artifactId>next-lib</artifactId>
    <version>1.0.0</version>
    <scope>provided</scope>
  </dependency>
</dependencies>`,
      setup: "If you use NextLib as a separate plugin, declare dependency in plugin.yml:",
      pluginYml: `name: MyPlugin
main: com.example.MyPlugin
version: 1.0.0
api-version: 1.16
depend:
  - NextLib`,
      note: "Alternatively, shade NextLib into your plugin and instantiate API classes directly (e.g., new ColorUtilImpl()).",
    },
    ru: {
      title: "Установка",
      description: "Добавьте NextLib в проект через JitPack и объявите зависимость.",
      gradle: `repositories {
  mavenCentral()
  maven { url 'https://jitpack.io' }
}

dependencies {
  compileOnly 'com.github.chi2l3s:next-lib:1.0.0'
  // или зашейте библиотеку:
  // implementation 'com.github.chi2l3s:next-lib:1.0.0'
}`,
      maven: `<repositories>
  <repository>
    <id>jitpack</id>
    <url>https://jitpack.io</url>
  </repository>
</repositories>

<dependencies>
  <dependency>
    <groupId>com.github.chi2l3s</groupId>
    <artifactId>next-lib</artifactId>
    <version>1.0.0</version>
    <scope>provided</scope>
  </dependency>
</dependencies>`,
      setup: "Если используете NextLib как отдельный плагин — объявите зависимость в plugin.yml:",
      pluginYml: `name: MyPlugin
main: com.example.MyPlugin
version: 1.0.0
api-version: 1.16
depend:
  - NextLib`,
      note: "Либо зашейте NextLib в свой плагин и используйте классы API напрямую (например, new ColorUtilImpl()).",
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <DocPage title={current.title} description={current.description}>
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Gradle</h2>
          <CodeExample code={current.gradle} language="gradle" title="build.gradle" />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Maven</h2>
          <CodeExample code={current.maven} language="xml" title="pom.xml" />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">plugin.yml</h2>
          <CodeExample code={current.pluginYml} language="yaml" title="plugin.yml" />
        </div>

        <div className="bg-card border border-border rounded-lg p-6 mt-2">
          <p className="text-muted-foreground text-sm">{current.note}</p>
        </div>
      </section>
    </DocPage>
  )
}

