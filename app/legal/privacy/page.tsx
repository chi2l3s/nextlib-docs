"use client"

import { useLanguage } from "@/lib/language-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "Information We Collect",
          content:
            "NextLib is an open-source library. We do not collect any personal information from users.",
        },
        {
          heading: "How We Use Information",
          content: "Since we do not collect personal information, there is no data to use or share.",
        },
        {
          heading: "Third-Party Services",
          content:
            "NextLib may be hosted on GitHub or other platforms. Please refer to their privacy policies.",
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
          heading: "Какие данные мы собираем",
          content:
            "NextLib — открытая библиотека. Мы не собираем персональные данные пользователей.",
        },
        {
          heading: "Как мы используем данные",
          content:
            "Так как персональные данные не собираются, нам нечего использовать или передавать.",
        },
        {
          heading: "Сторонние сервисы",
          content:
            "NextLib размещается на GitHub или других платформах. Пожалуйста, ознакомьтесь с их политиками конфиденциальности.",
        },
        {
          heading: "Связаться с нами",
          content: "Если у вас есть вопросы по этой политике, напишите нам на GitHub.",
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

