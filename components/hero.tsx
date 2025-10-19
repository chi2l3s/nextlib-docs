"use client"

import { useLanguage } from "@/lib/language-provider"
import { Badges } from "./badges"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-20 md:pb-32 px-4 md:px-8 w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center w-full">
        <Badges />

        <div className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-2 bg-card border border-primary/30 rounded-full animate-fade-in text-xs md:text-sm">
          <span className="text-primary font-medium">✨ Lightweight & Powerful</span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance animate-fade-in-up leading-tight">
          Build Minecraft Plugins
          <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            The Easy Way
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto text-balance animate-fade-in-up animation-delay-100 px-2">
          {t("heroDescription")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in-up animation-delay-200 px-2">
          <a
            href="/docs/installation"
            className="px-6 md:px-8 py-2 md:py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 active:scale-95 text-sm md:text-base"
          >
            {t("getStarted")}
          </a>
          <a
            href="/docs/quick-start"
            className="px-6 md:px-8 py-2 md:py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base"
          >
            {t("viewDocs")}
          </a>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto px-2">
          <div className="text-center animate-fade-in-up animation-delay-300">
            <div className="text-xl md:text-2xl font-bold text-primary mb-1 md:mb-2">5+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Core APIs</div>
          </div>
          <div className="text-center animate-fade-in-up animation-delay-400">
            <div className="text-xl md:text-2xl font-bold text-accent mb-1 md:mb-2">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Open Source</div>
          </div>
          <div className="text-center animate-fade-in-up animation-delay-500">
            <div className="text-xl md:text-2xl font-bold text-primary mb-1 md:mb-2">Easy</div>
            <div className="text-xs md:text-sm text-muted-foreground">To Use</div>
          </div>
        </div>
      </div>
    </section>
  )
}
