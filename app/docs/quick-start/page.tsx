"use client"

import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function QuickStartPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Quick Start",
      description: "Learn the basics of NextLib in 5 minutes",
      example: `import com.nextlib.command.CommandManager;
import com.nextlib.color.ColorUtil;
import org.bukkit.plugin.java.JavaPlugin;

public class MyPlugin extends JavaPlugin {
    private CommandManager commandManager;

    @Override
    public void onEnable() {
        commandManager = new CommandManager(this);
        
        // Register a simple command
        commandManager.register("hello", (sender, args) -> {
            sender.sendMessage(ColorUtil.colorize("&a&lHello World!"));
        });
        
        getLogger().info("MyPlugin enabled!");
    }
}`,
    },
    ru: {
      title: "Быстрый старт",
      description: "Изучите основы NextLib за 5 минут",
      example: `import com.nextlib.command.CommandManager;
import com.nextlib.color.ColorUtil;
import org.bukkit.plugin.java.JavaPlugin;

public class MyPlugin extends JavaPlugin {
    private CommandManager commandManager;

    @Override
    public void onEnable() {
        commandManager = new CommandManager(this);
        
        // Регистрируем простую команду
        commandManager.register("hello", (sender, args) -> {
            sender.sendMessage(ColorUtil.colorize("&a&lПривет Мир!"));
        });
        
        getLogger().info("MyPlugin включен!");
    }
}`,
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <DocPage title={current.title} description={current.description}>
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Your First Plugin</h2>
          <CodeExample code={current.example} language="java" title="MyPlugin.java" />
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">What's Next?</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Explore the Color API for advanced text formatting</li>
            <li>Learn about the Command API for complex command handling</li>
            <li>Check out the Item API for custom items</li>
          </ul>
        </div>
      </section>
    </DocPage>
  )
}
