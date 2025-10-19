"use client"

import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function ConfigManagerRefPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Config Manager (BaseConfig)",
      description: "Base class for YAML configs with auto-update via ConfigUpdater",
      example: `import io.github.chi2l3s.nextlib.api.config.BaseConfig;
import io.github.chi2l3s.nextlib.api.config.ConfigUtil;
import org.bukkit.World;
import org.bukkit.plugin.java.JavaPlugin;

public class MyConfig extends BaseConfig {
  public String prefix;
  public int cooldownSeconds;
  public World targetWorld;

  public MyConfig(JavaPlugin plugin) { super(plugin, "config.yml"); }

  @Override
  protected void loadValues() {
    prefix = config.getString("prefix", "&7[My]&r ");
    cooldownSeconds = ConfigUtil.parseTime(config, "cooldown", 60); // e.g. "2m", "10s"
    targetWorld = ConfigUtil.getWorld(config, "world", "world");
  }
}

// Usage
MyConfig cfg = new MyConfig(this);
cfg.reloadConfig();
getLogger().info("Prefix: " + cfg.prefix);`,
      notes: [
        "reloadConfig() creates the file from resources if missing",
        "ConfigUpdater keeps comments and adds new keys",
      ],
    },
    ru: {
      title: "Config Manager (BaseConfig)",
      description: "Базовый класс для YAML‑конфигов с автообновлением через ConfigUpdater",
      example: `import io.github.chi2l3s.nextlib.api.config.BaseConfig;
import io.github.chi2l3s.nextlib.api.config.ConfigUtil;
import org.bukkit.World;
import org.bukkit.plugin.java.JavaPlugin;

public class MyConfig extends BaseConfig {
  public String prefix;
  public int cooldownSeconds;
  public World targetWorld;

  public MyConfig(JavaPlugin plugin) { super(plugin, "config.yml"); }

  @Override
  protected void loadValues() {
    prefix = config.getString("prefix", "&7[My]&r ");
    cooldownSeconds = ConfigUtil.parseTime(config, "cooldown", 60); // например, "2m", "10s"
    targetWorld = ConfigUtil.getWorld(config, "world", "world");
  }
}

// Использование
MyConfig cfg = new MyConfig(this);
cfg.reloadConfig();
getLogger().info("Prefix: " + cfg.prefix);`,
      notes: [
        "reloadConfig() создаёт файл из ресурсов, если его нет",
        "ConfigUpdater сохраняет комментарии и добавляет новые ключи",
      ],
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <DocPage title={current.title} description={current.description}>
      <CodeExample code={current.example} language="java" title="Usage" />
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-bold mb-2">Notes</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          {current.notes.map((n: string) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </DocPage>
  )
}

