"use client"

import { DocPage } from "@/components/doc-page"
import { CodeExample } from "@/components/code-example"
import { useLanguage } from "@/lib/language-provider"

export default function ColorUtilRefPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "ColorUtil",
      description: "API for formatting strings with hex and legacy color codes",
      example: `import io.github.chi2l3s.nextlib.api.color.ColorUtil;
import io.github.chi2l3s.nextlib.api.color.ColorUtilImpl;

ColorUtil color = new ColorUtilImpl();
player.sendMessage(color.formatMessage("&aHello &#FF8800World"));`,
      methods: [
        "String formatMessage(String message)",
      ],
      notes: [
        "Supports legacy & codes and hex like &#RRGGBB",
        "Requires 1.16+ for hex colors",
      ],
    },
    ru: {
      title: "ColorUtil",
      description: "API для форматирования строк с hex и legacy цветами",
      example: `import io.github.chi2l3s.nextlib.api.color.ColorUtil;
import io.github.chi2l3s.nextlib.api.color.ColorUtilImpl;

ColorUtil color = new ColorUtilImpl();
player.sendMessage(color.formatMessage("&aПривет, &#FF8800мир"));`,
      methods: [
        "String formatMessage(String message)",
      ],
      notes: [
        "Поддерживает legacy & и hex вида &#RRGGBB",
        "Для hex требуется 1.16+",
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
      <div className="bg-card border border-border rounded-lg p-6 mt-4">
        <h3 className="text-lg font-bold mb-2">Notes</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          {current.notes.map((n: string) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </DocPage>
  )
}

