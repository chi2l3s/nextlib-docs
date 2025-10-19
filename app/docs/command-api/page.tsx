"use client"

import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function CommandApiPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Command API",
      description: "Create and manage commands easily",
      example: `import com.nextlib.command.CommandManager;

CommandManager manager = new CommandManager(plugin);

// Simple command
manager.register("greet", (sender, args) -> {
    sender.sendMessage("Hello!");
});

// Command with arguments
manager.register("greet", (sender, args) -> {
    if (args.length > 0) {
        sender.sendMessage("Hello " + args[0] + "!");
    }
});

// Command with permission
manager.register("admin", (sender, args) -> {
    if (!sender.hasPermission("admin.command")) {
        sender.sendMessage("No permission!");
        return;
    }
    sender.sendMessage("Admin command executed!");
});`,
    },
    ru: {
      title: "Command API",
      description: "Создавайте и управляйте командами легко",
      example: `import com.nextlib.command.CommandManager;

CommandManager manager = new CommandManager(plugin);

// Простая команда
manager.register("greet", (sender, args) -> {
    sender.sendMessage("Привет!");
});

// Команда с аргументами
manager.register("greet", (sender, args) -> {
    if (args.length > 0) {
        sender.sendMessage("Привет " + args[0] + "!");
    }
});

// Команда с разрешением
manager.register("admin", (sender, args) -> {
    if (!sender.hasPermission("admin.command")) {
        sender.sendMessage("Нет разрешения!");
        return;
    }
    sender.sendMessage("Команда администратора выполнена!");
});`,
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <DocPage title={current.title} description={current.description}>
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Examples</h2>
          <CodeExample code={current.example} language="java" />
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">Features</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Simple registration and execution</li>
            <li>Built-in permission checking</li>
            <li>Argument parsing</li>
            <li>Tab completion support</li>
          </ul>
        </div>
      </section>
    </DocPage>
  )
}
