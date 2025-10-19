"use client"

import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function ItemApiPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Item API",
      description: "Create custom items with ease",
      example: `import com.nextlib.item.ItemBuilder;
import org.bukkit.Material;

ItemBuilder builder = new ItemBuilder(Material.DIAMOND_SWORD)
    .setName("&c&lLegendary Sword")
    .addLore("&7A powerful weapon", "&7+10 Damage")
    .setUnbreakable(true)
    .addEnchantment(Enchantment.DAMAGE_ALL, 5);

ItemStack item = builder.build();`,
    },
    ru: {
      title: "Item API",
      description: "Создавайте пользовательские предметы легко",
      example: `import com.nextlib.item.ItemBuilder;
import org.bukkit.Material;

ItemBuilder builder = new ItemBuilder(Material.DIAMOND_SWORD)
    .setName("&c&lЛегендарный Меч")
    .addLore("&7Мощное оружие", "&7+10 Урона")
    .setUnbreakable(true)
    .addEnchantment(Enchantment.DAMAGE_ALL, 5);

ItemStack item = builder.build();`,
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <DocPage title={current.title} description={current.description}>
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Creating Items</h2>
          <CodeExample code={current.example} language="java" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Features</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Fluent API</li>
              <li>Enchantments</li>
              <li>Lore support</li>
              <li>Custom models</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Methods</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>setName()</li>
              <li>addLore()</li>
              <li>addEnchantment()</li>
              <li>setUnbreakable()</li>
            </ul>
          </div>
        </div>
      </section>
    </DocPage>
  )
}
