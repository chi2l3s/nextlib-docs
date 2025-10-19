"use client"

import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function ExampleGuiPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Example: GUI",
      description: "Define two menus in YAML and switch between them",
      mainYaml: `# plugins/YourPlugin/menus/main.yml
title: "&0Main Menu"
size: 54
items:
  next:
    material: ARROW
    slot: 53
    name: "&aNext"
    on_left_click:
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

GuiManager manager = new GuiManager(this);
java.io.File menus = new java.io.File(getDataFolder(), "menus");
manager.loadFromFolder(menus);

getCommand("menu").setExecutor((sender, cmd, label, args) -> {
  if (sender instanceof Player p) manager.openGui(p, "main");
  return true;
});`,
    },
    ru: {
      title: "Пример: GUI",
      description: "Два меню в YAML с переходами между ними",
      mainYaml: `# plugins/YourPlugin/menus/main.yml
title: "&0Главное меню"
size: 54
items:
  next:
    material: ARROW
    slot: 53
    name: "&aДалее"
    on_left_click:
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

GuiManager manager = new GuiManager(this);
java.io.File menus = new java.io.File(getDataFolder(), "menus");
manager.loadFromFolder(menus);

getCommand("menu").setExecutor((sender, cmd, label, args) -> {
  if (sender instanceof Player p) manager.openGui(p, "main");
  return true;
});`,
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <DocPage title={current.title} description={current.description}>
      <CodeExample code={current.mainYaml} language="yaml" title="menus/main.yml" />
      <CodeExample code={current.shopYaml} language="yaml" title="menus/shop.yml" />
      <CodeExample code={current.java} language="java" title="MyPlugin.java" />
    </DocPage>
  )
}

