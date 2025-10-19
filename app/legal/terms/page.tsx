"use client"

import { useLanguage } from "@/lib/language-provider"

export default function TermsPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Terms of Service",
      sections: [
        {
          heading: "License",
          content: "NextLib is provided under the MIT License. You are free to use, modify, and distribute it.",
        },
        {
          heading: "Disclaimer",
          content: "NextLib is provided 'as is' without warranty of any kind. Use at your own risk.",
        },
        {
          heading: "Limitations",
          content: "In no event shall the authors be liable for any damages arising from the use of NextLib.",
        },
        {
          heading: "Changes to Terms",
          content: "We reserve the right to modify these terms at any time. Changes will be posted on this page.",
        },
      ],
    },
    ru: {
      title: "Условия использования",
      sections: [
        {
          heading: "Лицензия",
          content:
            "NextLib предоставляется под лицензией MIT. Вы можете свободно использовать, изменять и распространять её.",
        },
        {
          heading: "Отказ от ответственности",
          content: "NextLib предоставляется 'как есть' без каких-либо гарантий. Используйте на свой риск.",
        },
        {
          heading: "Ограничения",
          content: "Авторы не несут ответственности за любые убытки, возникшие в результате использования NextLib.",
        },
        {
          heading: "Изменения условий",
          content:
            "Мы оставляем за собой право изменять эти условия в любое время. Изменения будут опубликованы на этой странице.",
        },
      ],
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">{current.title}</h1>

        <div className="space-y-8">
          {current.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
