"use client"

import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function GuiApiPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "GUI API",
      description: "Define menus in YAML and open them for players",
      mainYaml: `# plugins/YourPlugin/menus/main.yml
title: "&0Main Menu"
size: 54
items:
  close:
    material: BARRIER
    slot: 53
    name: "&cClose"
    on_left_click:
      - "close"

  diamond:
    material: DIAMOND
    slot: 0
    amount: 1
    name: "&bDiamond"
    lore:
      - "Shiny, precious gem"
    on_left_click:
      - "console give %player% diamond 64"
      - "message &aYou received diamonds!"
      - "opengui shop"`,
      shopYaml: `# plugins/YourPlugin/menus/shop.yml
title: "&aShop"
size: 27
items:
  back:
    material: ARROW
    slot: 26
    name: "&7Back"
    on_left_click:
      - "opengui main"`,
      java: `import io.github.chi2l3s.nextlib.api.gui.GuiManager;
import org.bukkit.entity.Player;
import org.bukkit.plugin.java.JavaPlugin;

public class MyPlugin extends JavaPlugin {
  private GuiManager guiManager;

  @Override
  public void onEnable() {
    guiManager = new GuiManager(this);

    // Load all *.yml from /menus
    java.io.File menusFolder = new java.io.File(getDataFolder(), "menus");
    guiManager.loadFromFolder(menusFolder);

    // Simple command to open a GUI by file name (without .yml)
    getCommand("menu").setExecutor((sender, cmd, label, args) -> {
      if (sender instanceof Player player) {
        String id = args.length > 0 ? args[0] : "main"; // main -> main.yml
        guiManager.openGui(player, id);
      }
      return true;
    });
  }
}`,
      actions: [
        "close — closes the inventory",
        "command <cmd> — run as player",
        "console <cmd> — run as console",
        "message <text> — send colored chat message",
        "opengui <id> — open another GUI",
      ],
    },
    ru: {
      title: "GUI API",
      description: "Определяйте меню в YAML и открывайте их игрокам",
      mainYaml: `# plugins/YourPlugin/menus/main.yml
title: "&0Главное меню"
size: 54
items:
  close:
    material: BARRIER
    slot: 53
    name: "&cЗакрыть"
    on_left_click:
      - "close"

  diamond:
    material: DIAMOND
    slot: 0
    amount: 1
    name: "&bАлмаз"
    lore:
      - "Драгоценный камень"
    on_left_click:
      - "console give %player% diamond 64"
      - "message &aВы получили алмазы!"
      - "opengui shop"`,
      shopYaml: `# plugins/YourPlugin/menus/shop.yml
title: "&aМагазин"
size: 27
items:
  back:
    material: ARROW
    slot: 26
    name: "&7Назад"
    on_left_click:
      - "opengui main"`,
      java: `import io.github.chi2l3s.nextlib.api.gui.GuiManager;
import org.bukkit.entity.Player;
import org.bukkit.plugin.java.JavaPlugin;

public class MyPlugin extends JavaPlugin {
  private GuiManager guiManager;

  @Override
  public void onEnable() {
    guiManager = new GuiManager(this);

    // Загрузить все *.yml из /menus
    java.io.File menusFolder = new java.io.File(getDataFolder(), "menus");
    guiManager.loadFromFolder(menusFolder);

    // Команда для открытия GUI по имени файла (без .yml)
    getCommand("menu").setExecutor((sender, cmd, label, args) -> {
      if (sender instanceof Player player) {
        String id = args.length > 0 ? args[0] : "main"; // main -> main.yml
        guiManager.openGui(player, id);
      }
      return true;
    });
  }
}`,
      actions: [
        "close — закрыть инвентарь",
        "command <cmd> — выполнить от имени игрока",
        "console <cmd> — выполнить от имени консоли",
        "message <text> — отправить сообщение с цветами",
        "opengui <id> — открыть другой GUI",
      ],
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <DocPage title={current.title} description={current.description}>
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">YAML</h2>
          <CodeExample code={current.mainYaml} language="yaml" title="menus/main.yml" />
          <CodeExample code={current.shopYaml} language="yaml" title="menus/shop.yml" />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Java</h2>
          <CodeExample code={current.java} language="java" title="MyPlugin.java" />
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">Actions</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {current.actions.map((a: string) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>
    </DocPage>
  )
}

