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
      example: `import io.github.chi2l3s.nextlib.api.command.CommandRegistry;
import io.github.chi2l3s.nextlib.api.command.LongCommandExecutor;
import io.github.chi2l3s.nextlib.api.command.SubCommand;
import io.github.chi2l3s.nextlib.api.color.ColorUtil;
import io.github.chi2l3s.nextlib.api.color.ColorUtilImpl;
import org.bukkit.command.CommandSender;
import org.bukkit.permissions.Permission;
import org.bukkit.plugin.java.JavaPlugin;

public class MyPlugin extends JavaPlugin {
  @Override
  public void onEnable() {
    // Register root command with a subcommand
    new CommandRegistry(this).registerCommand("hello", new HelloCommand());
    getLogger().info("MyPlugin enabled!");
  }

  static class HelloCommand extends LongCommandExecutor {
    private final ColorUtil color = new ColorUtilImpl();
    HelloCommand() {
      addSubCommand(new SubCommand() {
        public void onExecute(CommandSender sender, String[] args) {
          sender.sendMessage(color.formatMessage("&a&lHello World!"));
        }
        public java.util.List<String> onTabComplete(CommandSender s, String[] a) {
          return java.util.List.of();
        }
      }, new String[]{"run"}, new Permission("hello.use"));
    }
  }
}`,
    },
    ru: {
      title: "Быстрый старт",
      description: "Освойте основы NextLib за 5 минут",
      example: `import io.github.chi2l3s.nextlib.api.command.CommandRegistry;
import io.github.chi2l3s.nextlib.api.command.LongCommandExecutor;
import io.github.chi2l3s.nextlib.api.command.SubCommand;
import io.github.chi2l3s.nextlib.api.color.ColorUtil;
import io.github.chi2l3s.nextlib.api.color.ColorUtilImpl;
import org.bukkit.command.CommandSender;
import org.bukkit.permissions.Permission;
import org.bukkit.plugin.java.JavaPlugin;

public class MyPlugin extends JavaPlugin {
  @Override
  public void onEnable() {
    new CommandRegistry(this).registerCommand("hello", new HelloCommand());
    getLogger().info("MyPlugin включён!");
  }

  static class HelloCommand extends LongCommandExecutor {
    private final ColorUtil color = new ColorUtilImpl();
    HelloCommand() {
      addSubCommand(new SubCommand() {
        public void onExecute(CommandSender sender, String[] args) {
          sender.sendMessage(color.formatMessage("&a&lПривет, мир!"));
        }
        public java.util.List<String> onTabComplete(CommandSender s, String[] a) {
          return java.util.List.of();
        }
      }, new String[]{"run"}, new Permission("hello.use"));
    }
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

