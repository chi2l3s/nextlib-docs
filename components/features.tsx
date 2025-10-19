"use client"

import { useLanguage } from "@/lib/language-provider"
import { CodeBlock } from "./code-block"

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      id: "installation",
      title: t("installation"),
      description: "Get started with NextLib in minutes",
      content: (
        <div className="space-y-4 overflow-x-hidden">
          <div>
            <h4 className="text-sm font-semibold text-primary mb-2">Gradle</h4>
            <CodeBlock
              code={`repositories {
  mavenCentral()
  maven { url 'https://jitpack.io' }
}

dependencies {
  compileOnly 'com.github.chi2l3s:next-lib:1.0.0'
  // or shade:
  // implementation 'com.github.chi2l3s:next-lib:1.0.0'
}`}
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-primary mb-2">Maven</h4>
            <CodeBlock
              code={`<repositories>
  <repository>
    <id>jitpack</id>
    <url>https://jitpack.io</url>
  </repository>
</repositories>

<dependencies>
  <dependency>
    <groupId>com.github.chi2l3s</groupId>
    <artifactId>next-lib</artifactId>
    <version>1.0.0</version>
    <scope>provided</scope>
  </dependency>
</dependencies>`}
            />
          </div>
        </div>
      ),
    },
    {
      id: "color-api",
      title: t("colorApiTitle"),
      description: t("colorApiDesc"),
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            The Color API provides easy formatting of messages with HEX colors and legacy Minecraft color codes.
          </p>
          <CodeBlock
            code={`import io.github.chi2l3s.nextlib.api.color.ColorUtil;
import io.github.chi2l3s.nextlib.api.color.ColorUtilImpl;

ColorUtil color = new ColorUtilImpl();

// Using HEX colors
player.sendMessage(color.formatMessage("&#FF0000Hello &#00FF00World"));

// Using legacy codes
player.sendMessage(color.formatMessage("&aHello &bWorld"));

// Mixed
player.sendMessage(color.formatMessage("&aHello &#FF0000World"));`}
          />
          <div className="bg-card border border-border rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-primary mb-2">Supported Codes:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>
                <span className="text-primary">&#38;0-&#38;f</span> - Legacy color codes
              </li>
              <li>
                <span className="text-primary">&#38;k-&#38;o</span> - Text formatting
              </li>
              <li>
                <span className="text-primary">&#38;#RRGGBB</span> - HEX colors
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "command-api",
      title: t("commandApiTitle"),
      description: t("commandApiDesc"),
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Create powerful command systems with automatic tab completion and permission handling.
          </p>
          <CodeBlock
            code={`public class ExampleCommand extends io.github.chi2l3s.nextlib.api.command.LongCommandExecutor {
  public ExampleCommand() {
    addSubCommand(new io.github.chi2l3s.nextlib.api.command.SubCommand() {
      @Override
      public void onExecute(org.bukkit.command.CommandSender sender, String[] args) {
        sender.sendMessage("Hello from subcommand!");
      }

      @Override
      public java.util.List<String> onTabComplete(org.bukkit.command.CommandSender sender, String[] args) {
        return java.util.List.of("option1", "option2", "option3");
      }
    }, new String[]{"test", "t"}, new org.bukkit.permissions.Permission("example.use"));
  }
}`}
          />
          <div className="bg-card border border-border rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-primary mb-2">Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Automatic tab completion</li>
              <li>✓ Permission checking</li>
              <li>✓ Multiple aliases support</li>
              <li>✓ Easy subcommand management</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "item-api",
      title: t("itemApiTitle"),
      description: t("itemApiDesc"),
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Create custom items with names, lore, enchantments, and persistent data containers.
          </p>
          <CodeBlock
            code={`io.github.chi2l3s.nextlib.api.item.ItemBuilder builder = new io.github.chi2l3s.nextlib.api.item.ItemBuilder(org.bukkit.Material.DIAMOND_SWORD)
  .setName("&a&lEpic Sword")
  .setLore(java.util.List.of("&7Damage: &c+10", "&7Crit Chance: &c25%"))
  .addEnchant(org.bukkit.enchantments.Enchantment.DAMAGE_ALL, 5, true)
  .setUnbreakable(true)
  .setPersistentData(this, "custom_item", "epic_sword");

org.bukkit.inventory.ItemStack item = builder.build();
player.getInventory().addItem(item);`}
          />
          <div className="bg-card border border-border rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-primary mb-2">Builder Methods:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>setDisplayName() - Set custom name</li>
              <li>addLore() - Add lore lines</li>
              <li>addEnchantment() - Add enchantments</li>
              <li>setUnbreakable() - Make unbreakable</li>
              <li>addPDC() - Add persistent data</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "config-manager",
      title: t("configTitle"),
      description: t("configDesc"),
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Manage your plugin configuration files with a simple and intuitive API.
          </p>
          <CodeBlock
            code={`class MyConfig extends io.github.chi2l3s.nextlib.api.config.BaseConfig {
  public String serverName;
  public int maxPlayers;
  MyConfig(org.bukkit.plugin.java.JavaPlugin plugin) { super(plugin, "config.yml"); }
  protected void loadValues() {
    serverName = config.getString("server.name", "My Server");
    maxPlayers = config.getInt("server.max-players", 20);
  }
}

MyConfig cfg = new MyConfig(this);
cfg.reloadConfig();`}
          />
          <div className="bg-card border border-border rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-primary mb-2">Supported Types:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>getString() / getInt() / getDouble() / getBoolean()</li>
              <li>getStringList() / getIntList()</li>
              <li>getConfigurationSection()</li>
              <li>set() - Set any value</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "gui-api",
      title: t("guiTitle"),
      description: t("guiDesc"),
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Build interactive GUI menus by defining them in YAML files. No code needed!
          </p>
          <CodeBlock
            code={`# plugins/YourPlugin/menus/shop.yml
title: "&aShop"
size: 27
items:
  close_button:
    slot: 26
    material: BARRIER
    name: "&cClose"
    on_left_click:
      - close`}
          />
          <CodeBlock
            code={`io.github.chi2l3s.nextlib.api.gui.GuiManager gui = new io.github.chi2l3s.nextlib.api.gui.GuiManager(this);
java.io.File menus = new java.io.File(getDataFolder(), "menus");
gui.loadFromFolder(menus);
gui.openGui(player, "shop");`}
          />
        </div>
      ),
    },
  ]

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto space-y-12 md:space-y-20 w-full">
        {features.map((feature) => (
          <div key={feature.id} id={feature.id} className="scroll-mt-20 w-full overflow-x-hidden">
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{feature.title}</h2>
              <p className="text-base md:text-lg text-muted-foreground">{feature.description}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 md:p-8 overflow-x-auto">{feature.content}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
