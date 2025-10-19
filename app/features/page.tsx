"use client"

import { useLanguage } from "@/lib/language-provider"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FeaturesPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Features",
      description: "Discover what makes NextLib powerful",
      features: [
        { title: "Command Manager", description: "Simple and powerful command registration and handling system", icon: "⚡" },
        { title: "Color API", description: "Support for legacy codes and hex colors", icon: "🎨" },
        { title: "Item Builder", description: "Fluent API for custom items with enchants and lore", icon: "🛠️" },
        { title: "Config Manager", description: "Easy YAML configuration file management", icon: "⚙️" },
        { title: "GUI API", description: "Create interactive inventory-based user interfaces", icon: "🧭" },
        { title: "Lightweight", description: "Minimal dependencies and fast performance", icon: "✨" },
      ],
    },
    ru: {
      title: "Возможности",
      description: "Что делает NextLib мощным",
      features: [
        { title: "Менеджер команд", description: "Простая и мощная регистрация и обработка команд", icon: "⚡" },
        { title: "Color API", description: "Поддержка legacy и hex цветов", icon: "🎨" },
        { title: "Item Builder", description: "Fluent‑API для предметов с зачарованиями и лором", icon: "🛠️" },
        { title: "Config Manager", description: "Удобная работа с YAML‑конфигами", icon: "⚙️" },
        { title: "GUI API", description: "Интерактивные инвентори‑интерфейсы", icon: "🧭" },
        { title: "Лёгкость", description: "Минимум зависимостей и высокая скорость", icon: "✨" },
      ],
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">{current.title}</h1>
            <p className="text-xl text-muted-foreground">{current.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {current.features.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{language === "en" ? "Ready to get started?" : "Готовы начать?"}</h2>
            <Link href="/docs/installation" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              {language === "en" ? "View Documentation" : "Открыть документацию"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

