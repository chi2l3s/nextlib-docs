"use client"

import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function ExampleCommandPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Example: Command",
      description: "Root command with a simple subcommand and permission",
      java: `import io.github.chi2l3s.nextlib.api.command.CommandRegistry;
import io.github.chi2l3s.nextlib.api.command.LongCommandExecutor;
import io.github.chi2l3s.nextlib.api.command.SubCommand;
import org.bukkit.command.CommandSender;
import org.bukkit.permissions.Permission;
import org.bukkit.plugin.java.JavaPlugin;

public class MyPlugin extends JavaPlugin {
  @Override
  public void onEnable() {
    new CommandRegistry(this).registerCommand("example", new ExampleCommand());
  }
}

class ExampleCommand extends LongCommandExecutor {
  public ExampleCommand() {
    addSubCommand(new SubCommand() {
      @Override public void onExecute(CommandSender sender, String[] args) {
        sender.sendMessage("Hey!");
      }
      @Override public java.util.List<String> onTabComplete(CommandSender s, String[] a) {
        return java.util.List.of("hello");
      }
    }, new String[]{"hello", "hi"}, new Permission("example.use"));
  }
}`,
      yml: `commands:\n  example:\n    description: Example root command\n    permission: example.use\n    permission-message: "No permission"`,
    },
    ru: {
      title: "Пример: Команда",
      description: "Корневая команда с простой подкомандой и правом",
      java: `import io.github.chi2l3s.nextlib.api.command.CommandRegistry;
import io.github.chi2l3s.nextlib.api.command.LongCommandExecutor;
import io.github.chi2l3s.nextlib.api.command.SubCommand;
import org.bukkit.command.CommandSender;
import org.bukkit.permissions.Permission;
import org.bukkit.plugin.java.JavaPlugin;

public class MyPlugin extends JavaPlugin {
  @Override
  public void onEnable() {
    new CommandRegistry(this).registerCommand("example", new ExampleCommand());
  }
}

class ExampleCommand extends LongCommandExecutor {
  public ExampleCommand() {
    addSubCommand(new SubCommand() {
      @Override public void onExecute(CommandSender sender, String[] args) {
        sender.sendMessage("Привет!");
      }
      @Override public java.util.List<String> onTabComplete(CommandSender s, String[] a) {
        return java.util.List.of("hello");
      }
    }, new String[]{"hello", "hi"}, new Permission("example.use"));
  }
}`,
      yml: `commands:\n  example:\n    description: Пример корневой команды\n    permission: example.use\n    permission-message: "Нет прав"`,
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <DocPage title={current.title} description={current.description}>
      <CodeExample code={current.java} language="java" title="MyPlugin + Executor" />
      <CodeExample code={current.yml} language="yaml" title="plugin.yml" />
    </DocPage>
  )
}

