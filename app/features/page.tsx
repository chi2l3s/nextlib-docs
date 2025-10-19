"use client"

import { useLanguage } from "@/lib/language-provider"
import Link from "next/link"

export default function FeaturesPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Features",
      description: "Discover what makes NextLib powerful",
      features: [
        {
          title: "Command Manager",
          description: "Simple and powerful command registration and handling system",
          icon: "⚡",
        },
        {
          title: "Color API",
          description: "Support for legacy codes, hex colors, and RGB formatting",
          icon: "🎨",
        },
        {
          title: "Item Builder",
          description: "Fluent API for creating custom items with enchantments and lore",
          icon: "🔨",
        },
        {
          title: "Config Manager",
          description: "Easy YAML configuration file management",
          icon: "⚙️",
        },
        {
          title: "GUI API",
          description: "Create interactive inventory-based user interfaces",
          icon: "🖼️",
        },
        {
          title: "Lightweight",
          description: "Minimal dependencies and fast performance",
          icon: "⚡",
        },
      ],
    },
    ru: {
      title: "Возможности",
      description: "Откройте для себя, что делает NextLib мощным",
      features: [
        {
          title: "Command Manager",
          description: "Простая и мощная система регистрации и обработки команд",
          icon: "⚡",
        },
        {
          title: "Color API",
          description: "Поддержка кодов наследия, hex цветов и RGB форматирования",
          icon: "🎨",
        },
        {
          title: "Item Builder",
          description: "Fluent API для создания пользовательских предметов с чарами и описанием",
          icon: "🔨",
        },
        {
          title: "Config Manager",
          description: "Простое управление файлами конфигурации YAML",
          icon: "⚙️",
        },
        {
          title: "GUI API",
          description: "Создавайте интерактивные пользовательские интерфейсы на основе инвентаря",
          icon: "🖼️",
        },
        {
          title: "Легкий",
          description: "Минимальные зависимости и быстрая производительность",
          icon: "⚡",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {current.features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{language === "en" ? "Ready to get started?" : "Готовы начать?"}</h2>
          <Link
            href="/docs/installation"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {language === "en" ? "View Documentation" : "Посмотреть документацию"}
          </Link>
        </div>
      </div>
    </main>
  )
}
