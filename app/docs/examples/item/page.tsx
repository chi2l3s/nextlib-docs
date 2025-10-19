"use client"

import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function ExampleItemPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Example: Item",
      description: "Create a custom item with name, lore and persistent data",
      java: `import io.github.chi2l3s.nextlib.api.item.ItemBuilder;
import io.github.chi2l3s.nextlib.api.item.ItemUtil;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;

ItemStack item = new ItemBuilder(Material.DIAMOND_SWORD)
  .setName("&b&lLegendary Sword")
  .setLore(java.util.List.of("&7A powerful weapon", "&7+10 Damage"))
  .setPersistentData(this, "power", 10)
  .build();

boolean hasPower = ItemUtil.hasPersistentData(item, this, "power");`,
    },
    ru: {
      title: "Пример: Предмет",
      description: "Создание кастомного предмета с именем, лором и PDC",
      java: `import io.github.chi2l3s.nextlib.api.item.ItemBuilder;
import io.github.chi2l3s.nextlib.api.item.ItemUtil;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;

ItemStack item = new ItemBuilder(Material.DIAMOND_SWORD)
  .setName("&b&lЛегендарный меч")
  .setLore(java.util.List.of("&7Мощное оружие", "&7+10 урона"))
  .setPersistentData(this, "power", 10)
  .build();

boolean hasPower = ItemUtil.hasPersistentData(item, this, "power");`,
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <DocPage title={current.title} description={current.description}>
      <CodeExample code={current.java} language="java" title="Item example" />
    </DocPage>
  )
}

