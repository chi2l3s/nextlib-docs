
"use client"
import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function ColorApiPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Color API",
      description: "Format messages using legacy (&) and hex (&#RRGGBB) color codes",
      example: `import io.github.chi2l3s.nextlib.api.color.ColorUtil;
import io.github.chi2l3s.nextlib.api.color.ColorUtilImpl;

ColorUtil color = new ColorUtilImpl();

// Legacy color codes
String legacy = color.formatMessage("&c&lRed Bold &r&bBlue");

// Hex colors (Paper/Spigot 1.16+)
String hex = color.formatMessage("&#FF0000Red &#00FF00Green &#00aaffCyan");

player.sendMessage(hex);`,
    },
    ru: {
      title: "Color API",
      description: "Форматирование сообщений с помощью legacy (&) и hex (&#RRGGBB) цветов",
      example: `import io.github.chi2l3s.nextlib.api.color.ColorUtil;
import io.github.chi2l3s.nextlib.api.color.ColorUtilImpl;

ColorUtil color = new ColorUtilImpl();

// Коды цветов legacy
String legacy = color.formatMessage("&c&lКрасный жирный &r&bСиний");

// Hex‑цвета (Paper/Spigot 1.16+)
String hex = color.formatMessage("&#FF0000Красный &#00FF00Зелёный &#00aaffГолубой");

player.sendMessage(hex);`,
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <DocPage title={current.title} description={current.description}>
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <CodeExample code={current.example} language="java" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Legacy Codes</h3>
            <p className="text-muted-foreground text-sm">
              Support for traditional Minecraft color codes like &amp;c for red, &amp;a for green, etc.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Hex Colors</h3>
            <p className="text-muted-foreground text-sm">Use modern hex color codes for precise color control.</p>
          </div>
        </div>
      </section>
    </DocPage>
  )
}

