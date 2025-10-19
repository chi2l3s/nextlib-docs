"use client"

import { useLanguage } from "@/lib/language-provider"
import Link from "next/link"

export function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="border-t border-border bg-card/50 py-8 md:py-12 px-4 md:px-8 w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-8 w-full">
          <div className="min-w-0">
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">
              {language === "en" ? "Product" : "Продукт"}
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>
                <Link href="/features" className="hover:text-primary transition-colors break-words">
                  {language === "en" ? "Features" : "Возможности"}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors break-words">
                  {language === "en" ? "Pricing" : "Цены"}
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="hover:text-primary transition-colors break-words">
                  {language === "en" ? "Changelog" : "История изменений"}
                </Link>
              </li>
            </ul>
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">
              {language === "en" ? "Community" : "Сообщество"}
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>
                <a
                  href="https://discord.gg/nextlib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors break-words"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/chi2l3s/next-lib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors break-words"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/chi2l3s/next-lib/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors break-words"
                >
                  {language === "en" ? "Issues" : "Проблемы"}
                </a>
              </li>
            </ul>
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">
              {language === "en" ? "Resources" : "Ресурсы"}
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>
                <Link href="/docs/installation" className="hover:text-primary transition-colors break-words">
                  {language === "en" ? "Documentation" : "Документация"}
                </Link>
              </li>
              <li>
                <Link href="/docs/quick-start" className="hover:text-primary transition-colors break-words">
                  {language === "en" ? "Examples" : "Примеры"}
                </Link>
              </li>
              <li>
                <Link href="/docs/color-api" className="hover:text-primary transition-colors break-words">
                  {language === "en" ? "API Reference" : "Справка API"}
                </Link>
              </li>
            </ul>
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">
              {language === "en" ? "Legal" : "Юридическое"}
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>
                <Link href="/legal/license" className="hover:text-primary transition-colors break-words">
                  {language === "en" ? "License" : "Лицензия"}
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-primary transition-colors break-words">
                  {language === "en" ? "Privacy" : "Конфиденциальность"}
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-primary transition-colors break-words">
                  {language === "en" ? "Terms" : "Условия"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 w-full">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">NL</span>
            </div>
            <span className="font-semibold text-sm md:text-base">NextLib</span>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-right">
            © 2025 NextLib. {language === "en" ? "All rights reserved." : "Все права защищены."}
          </p>
        </div>
      </div>
    </footer>
  )
}
