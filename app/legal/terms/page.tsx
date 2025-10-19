"use client"

import { useLanguage } from "@/lib/language-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Terms of Service",
      sections: [
        {
          heading: "License",
          content:
            "NextLib is provided under the MIT License. You are free to use, modify, and distribute it.",
        },
        {
          heading: "Disclaimer",
          content:
            "NextLib is provided 'as is' without warranty of any kind. Use at your own risk.",
        },
        {
          heading: "Limitations",
          content:
            "In no event shall the authors be liable for any damages arising from the use of NextLib.",
        },
        {
          heading: "Changes to Terms",
          content:
            "We reserve the right to modify these terms at any time. Changes will be posted on this page.",
        },
      ],
    },
    ru: {
      title: "Условия использования",
      sections: [
        {
          heading: "Лицензия",
          content:
            "NextLib распространяется по лицензии MIT. Вы можете свободно использовать, изменять и распространять библиотеку.",
        },
        {
          heading: "Отказ от гарантий",
          content:
            "NextLib предоставляется «как есть», без каких‑либо гарантий. Используйте на свой риск.",
        },
        {
          heading: "Ограничения ответственности",
          content:
            "Ни при каких обстоятельствах авторы не несут ответственности за любые убытки, возникшие при использовании NextLib.",
        },
        {
          heading: "Изменения условий",
          content:
            "Мы можем менять эти условия в любое время. Изменения будут опубликованы на этой странице.",
        },
      ],
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background pt-16">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
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
      <Footer />
    </div>
  )
}

