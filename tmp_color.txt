"use client"

import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function ColorApiPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Color API",
      description: "Format text with colors and styles",
      example: `import com.nextlib.color.ColorUtil;

// Legacy color codes
String message = ColorUtil.colorize("&c&lRed Bold &r&bBlue");

// Hex colors
String hexMessage = ColorUtil.colorizeHex("&#FF0000Red &#00FF00Green");

// RGB colors
String rgbMessage = ColorUtil.colorizeRGB("<rgb:255,0,0>Red</rgb>");`,
    },
    ru: {
      title: "Color API",
      description: "Форматируйте текст с цветами и стилями",
      example: `import com.nextlib.color.ColorUtil;

// Коды цветов наследия
String message = ColorUtil.colorize("&c&lКрасный Жирный &r&bСиний");

// Hex цвета
String hexMessage = ColorUtil.colorizeHex("&#FF0000Красный &#00FF00Зелёный");

// RGB цвета
String rgbMessage = ColorUtil.colorizeRGB("<rgb:255,0,0>Красный</rgb>");`,
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
              Support for traditional Minecraft color codes like &c for red, &a for green, etc.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Hex Colors</h3>
            <p className="text-muted-foreground text-sm">Use modern hex color codes for more precise color control.</p>
          </div>
        </div>
      </section>
    </DocPage>
  )
}
