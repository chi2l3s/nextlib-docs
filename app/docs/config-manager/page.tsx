"use client"

import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function ConfigManagerPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Config Manager",
      description: "Manage configuration files easily",
      example: `import com.nextlib.config.ConfigManager;

ConfigManager config = new ConfigManager(plugin, "config.yml");

// Get values
String name = config.getString("player.name");
int level = config.getInt("player.level");
boolean enabled = config.getBoolean("features.enabled");

// Set values
config.set("player.name", "NewName");
config.set("player.level", 50);
config.save();`,
    },
    ru: {
      title: "Config Manager",
      description: "Управляйте файлами конфигурации легко",
      example: `import com.nextlib.config.ConfigManager;

ConfigManager config = new ConfigManager(plugin, "config.yml");

// Получить значения
String name = config.getString("player.name");
int level = config.getInt("player.level");
boolean enabled = config.getBoolean("features.enabled");

// Установить значения
config.set("player.name", "NewName");
config.set("player.level", 50);
config.save();`,
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <DocPage title={current.title} description={current.description}>
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <CodeExample code={current.example} language="java" />
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">Supported Types</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>String</li>
            <li>Integer</li>
            <li>Double</li>
            <li>Boolean</li>
            <li>List</li>
            <li>ConfigurationSection</li>
          </ul>
        </div>
      </section>
    </DocPage>
  )
}
