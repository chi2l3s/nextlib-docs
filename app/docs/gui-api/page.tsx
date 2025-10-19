"use client"

import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function GuiApiPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "GUI API",
      description: "Create interactive GUIs for your players",
      example: `import com.nextlib.gui.GuiBuilder;
import org.bukkit.Material;

GuiBuilder gui = new GuiBuilder("My Menu", 3)
    .setItem(0, new ItemStack(Material.DIAMOND), (player) -> {
        player.sendMessage("You clicked diamond!");
    })
    .setItem(4, new ItemStack(Material.EMERALD), (player) -> {
        player.sendMessage("You clicked emerald!");
    });

gui.open(player);`,
    },
    ru: {
      title: "GUI API",
      description: "Создавайте интерактивные интерфейсы для ваших игроков",
      example: `import com.nextlib.gui.GuiBuilder;
import org.bukkit.Material;

GuiBuilder gui = new GuiBuilder("Мое Меню", 3)
    .setItem(0, new ItemStack(Material.DIAMOND), (player) -> {
        player.sendMessage("Вы нажали на алмаз!");
    })
    .setItem(4, new ItemStack(Material.EMERALD), (player) -> {
        player.sendMessage("Вы нажали на изумруд!");
    });

gui.open(player);`,
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <DocPage title={current.title} description={current.description}>
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Creating GUIs</h2>
          <CodeExample code={current.example} language="java" />
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">Features</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Easy inventory creation</li>
            <li>Click event handling</li>
            <li>Customizable items</li>
            <li>Multiple pages support</li>
          </ul>
        </div>
      </section>
    </DocPage>
  )
}
