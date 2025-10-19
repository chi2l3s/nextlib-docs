"use client"

import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function CommandExecutorRefPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "LongCommandExecutor",
      description: "Base for root commands with subcommands, permissions and tab-complete",
      example: `import io.github.chi2l3s.nextlib.api.command.CommandRegistry;
import io.github.chi2l3s.nextlib.api.command.LongCommandExecutor;
import io.github.chi2l3s.nextlib.api.command.SubCommand;
import org.bukkit.command.CommandSender;
import org.bukkit.permissions.Permission;

public class ExampleCommand extends LongCommandExecutor {
  public ExampleCommand() {
    addSubCommand(new SubCommand() {
      @Override public void onExecute(CommandSender sender, String[] args) {
        sender.sendMessage("Sub executed");
      }
      @Override public java.util.List<String> onTabComplete(CommandSender s, String[] a) {
        return java.util.List.of("sub");
      }
    }, new String[]{"sub", "s"}, new Permission("example.use"));
  }
}

// Registration (plugin.yml must declare command 'example')
new CommandRegistry(this).registerCommand("example", new ExampleCommand());`,
      methods: [
        "addSubCommand(SubCommand, String[] aliases, Permission)",
        "onCommand(...) — routes to subcommand by first arg",
        "onTabComplete(...) — suggests first aliases then delegates",
      ],
    },
    ru: {
      title: "LongCommandExecutor",
      description: "База для корневых команд с подкомандами, правами и таб‑комплитом",
      example: `import io.github.chi2l3s.nextlib.api.command.CommandRegistry;
import io.github.chi2l3s.nextlib.api.command.LongCommandExecutor;
import io.github.chi2l3s.nextlib.api.command.SubCommand;
import org.bukkit.command.CommandSender;
import org.bukkit.permissions.Permission;

public class ExampleCommand extends LongCommandExecutor {
  public ExampleCommand() {
    addSubCommand(new SubCommand() {
      @Override public void onExecute(CommandSender sender, String[] args) {
        sender.sendMessage("Подкоманда выполнена");
      }
      @Override public java.util.List<String> onTabComplete(CommandSender s, String[] a) {
        return java.util.List.of("sub");
      }
    }, new String[]{"sub", "s"}, new Permission("example.use"));
  }
}

// Регистрация (команда 'example' должна быть в plugin.yml)
new CommandRegistry(this).registerCommand("example", new ExampleCommand());`,
      methods: [
        "addSubCommand(SubCommand, String[] aliases, Permission)",
        "onCommand(...) — перенаправляет по первому аргументу",
        "onTabComplete(...) — предлагает алиасы и делегирует",
      ],
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <DocPage title={current.title} description={current.description}>
      <CodeExample code={current.example} language="java" title="Usage" />
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-bold mb-2">Key Methods</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          {current.methods.map((m: string) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
    </DocPage>
  )
}

