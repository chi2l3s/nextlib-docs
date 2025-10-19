"use client"

import { useLanguage } from "@/lib/language-provider"

export default function PricingPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Pricing",
      description: "NextLib is completely free and open source",
      free: "Free",
      forever: "Forever",
      features: [
        "All features included",
        "Community support",
        "Open source code",
        "Regular updates",
        "Commercial use allowed",
      ],
    },
    ru: {
      title: "Цены",
      description: "NextLib полностью бесплатен и имеет открытый исходный код",
      free: "Бесплатно",
      forever: "Навсегда",
      features: [
        "Все функции включены",
        "Поддержка сообщества",
        "Открытый исходный код",
        "Регулярные обновления",
        "Коммерческое использование разрешено",
      ],
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{current.title}</h1>
          <p className="text-xl text-muted-foreground">{current.description}</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-card border border-primary rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-2">{current.free}</h2>
            <p className="text-muted-foreground mb-6">{current.forever}</p>
            <ul className="space-y-3 mb-8">
              {current.features.map((feature, index) => (
                <li key={index} className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              {language === "en" ? "Get Started" : "Начать"}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
