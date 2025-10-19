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
  implementation 'com.github.chi2l3s:next-lib:1.0.0'
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
            code={`import ru.amixoldev.nextlib.color.ColorUtil;
import ru.amixoldev.nextlib.color.ColorUtilImpl;

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
            code={`public class ExampleCommand extends LongCommandExecutor {
  public ExampleCommand() {
    addSubCommand(new SubCommand() {
      @Override
      public void onExecute(CommandSender sender, String[] args) {
        sender.sendMessage("Hello from subcommand!");
      }

      @Override
      public List<String> onTabComplete(CommandSender sender, String[] args) {
        return List.of("option1", "option2", "option3");
      }
    }, new String[]{"test", "t"}, new Permission("example.use"));
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
            code={`ItemBuilder builder = new ItemBuilder(Material.DIAMOND_SWORD)
  .setDisplayName("&a&lEpic Sword")
  .addLore("&7Damage: &c+10")
  .addLore("&7Crit Chance: &c25%")
  .addEnchantment(Enchantment.DAMAGE_ALL, 5)
  .setUnbreakable(true)
  .addPDC("custom_item", "epic_sword");

ItemStack item = builder.build();
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
            code={`ConfigManager config = new ConfigManager(plugin, "config.yml");

// Get values
String serverName = config.getString("server.name");
int maxPlayers = config.getInt("server.max-players");
List<String> motd = config.getStringList("server.motd");

// Set values
config.set("server.name", "My Server");
config.save();

// Reload
config.reload();`}
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
            code={`# menus/shop.yml
name: "&a&lShop"
rows: 3

items:
  diamond_sword:
    slot: 11
    material: DIAMOND_SWORD
    name: "&b&lEpic Sword"
    lore:
      - "&7Price: &c100 coins"
      - "&7Click to buy"
    action: "buy_sword"
  
  close_button:
    slot: 26
    material: BARRIER
    name: "&c&lClose"
    action: "close"`}
          />
          <CodeBlock
            code={`// Load and open menu
GUIManager guiManager = new GUIManager(plugin);
Inventory menu = guiManager.loadMenu("shop");
player.openInventory(menu);`}
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
