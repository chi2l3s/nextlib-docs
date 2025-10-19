"use client"

import { useLanguage } from "@/lib/language-provider"

export default function PrivacyPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "Information We Collect",
          content: "NextLib is an open-source library. We do not collect any personal information from users.",
        },
        {
          heading: "How We Use Information",
          content: "Since we do not collect personal information, there is no data to use or share.",
        },
        {
          heading: "Third-Party Services",
          content: "NextLib may be hosted on GitHub or other platforms. Please refer to their privacy policies.",
        },
        {
          heading: "Contact Us",
          content: "If you have questions about this privacy policy, please contact us on GitHub.",
        },
      ],
    },
    ru: {
      title: "Политика конфиденциальности",
      sections: [
        {
          heading: "Информация, которую мы собираем",
          content:
            "NextLib - это библиотека с открытым исходным кодом. Мы не собираем никакую личную информацию от пользователей.",
        },
        {
          heading: "Как мы используем информацию",
          content: "Поскольку мы не собираем личную информацию, нет данных для использования или обмена.",
        },
        {
          heading: "Сторонние сервисы",
          content:
            "NextLib может быть размещена на GitHub или других платформах. Пожалуйста, обратитесь к их политикам конфиденциальности.",
        },
        {
          heading: "Свяжитесь с нами",
          content:
            "Если у вас есть вопросы об этой политике конфиденциальности, пожалуйста, свяжитесь с нами на GitHub.",
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
