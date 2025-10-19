"use client"

import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function ItemBuilderRefPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "ItemBuilder",
      description: "Fluent builder for ItemStack with name, lore, enchants, flags and PDC",
      example: `import io.github.chi2l3s.nextlib.api.item.ItemBuilder;
import io.github.chi2l3s.nextlib.api.item.ItemUtil;
import org.bukkit.Material;
import org.bukkit.enchantments.Enchantment;
import org.bukkit.inventory.ItemStack;

ItemStack item = new ItemBuilder(Material.DIAMOND_SWORD)
  .setName("&b&lLegendary Sword")
  .setLore(java.util.List.of("&7A powerful weapon", "&7+10 Damage"))
  .addEnchant(Enchantment.DAMAGE_ALL, 5, true)
  .setUnbreakable(true)
  .setPersistentData(this, "custom_id", "legend_sword")
  .build();

boolean hasTag = ItemUtil.hasPersistentData(item, this, "custom_id");`,
      methods: [
        "setName(String)",
        "setLore(List<String> | String...)s",
        "addEnchant(Enchantment, int, boolean)",
        "addEnchants(Map<Enchantment,Integer>)",
        "setUnbreakable(boolean)",
        "addFlags(ItemFlag...)",
        "setSkullOwner(String)",
        "setPersistentData(JavaPlugin, String, String|int)",
        "build() -> ItemStack",
        "ItemUtil.hasPersistentData(ItemStack, JavaPlugin, String)",
        "ItemUtil.getStringData / getIntData",
      ],
    },
    ru: {
      title: "ItemBuilder",
      description: "Fluent‑билдер для ItemStack: имя, лор, зачарования, флаги и PDC",
      example: `import io.github.chi2l3s.nextlib.api.item.ItemBuilder;
import io.github.chi2l3s.nextlib.api.item.ItemUtil;
import org.bukkit.Material;
import org.bukkit.enchantments.Enchantment;
import org.bukkit.inventory.ItemStack;

ItemStack item = new ItemBuilder(Material.DIAMOND_SWORD)
  .setName("&b&lЛегендарный меч")
  .setLore(java.util.List.of("&7Мощное оружие", "&7+10 урона"))
  .addEnchant(Enchantment.DAMAGE_ALL, 5, true)
  .setUnbreakable(true)
  .setPersistentData(this, "custom_id", "legend_sword")
  .build();

boolean hasTag = ItemUtil.hasPersistentData(item, this, "custom_id");`,
      methods: [
        "setName(String)",
        "setLore(List<String> | String...)",
        "addEnchant(Enchantment, int, boolean)",
        "addEnchants(Map<Enchantment,Integer>)",
        "setUnbreakable(boolean)",
        "addFlags(ItemFlag...)",
        "setSkullOwner(String)",
        "setPersistentData(JavaPlugin, String, String|int)",
        "build() -> ItemStack",
        "ItemUtil.hasPersistentData(ItemStack, JavaPlugin, String)",
        "ItemUtil.getStringData / getIntData",
      ],
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <DocPage title={current.title} description={current.description}>
      <CodeExample code={current.example} language="java" title="Usage" />
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-bold mb-2">Methods</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          {current.methods.map((m: string) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
    </DocPage>
  )
}

