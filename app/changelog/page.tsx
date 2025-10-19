"use client"

import { useLanguage } from "@/lib/language-provider"

export default function ChangelogPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Changelog",
      description: "Version history and updates",
      versions: [
        {
          version: "1.0.0",
          date: "2025-01-15",
          changes: [
            "Initial release",
            "Command Manager API",
            "Color API with hex support",
            "Item Builder",
            "Config Manager",
            "GUI API",
          ],
        },
        {
          version: "0.9.0",
          date: "2025-01-10",
          changes: ["Beta release", "Core features implementation", "Documentation"],
        },
      ],
    },
    ru: {
      title: "История изменений",
      description: "История версий и обновления",
      versions: [
        {
          version: "1.0.0",
          date: "2025-01-15",
          changes: [
            "Первый релиз",
            "Command Manager API",
            "Color API с поддержкой hex",
            "Item Builder",
            "Config Manager",
            "GUI API",
          ],
        },
        {
          version: "0.9.0",
          date: "2025-01-10",
          changes: ["Бета-релиз", "Реализация основных функций", "Документация"],
        },
      ],
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{current.title}</h1>
          <p className="text-xl text-muted-foreground">{current.description}</p>
        </div>

        <div className="space-y-8">
          {current.versions.map((version, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">v{version.version}</h2>
                <span className="text-muted-foreground">{version.date}</span>
              </div>
              <ul className="space-y-2">
                {version.changes.map((change, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">•</span>
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
