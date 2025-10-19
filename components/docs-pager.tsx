"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-provider"

interface DocsPagerProps { className?: string }

export function DocsPager({ className = "" }: DocsPagerProps) {
  const pathname = usePathname()
  const { t, language } = useLanguage()

  const sections = [
    { href: "/docs/quick-start", label: t("quickStart") },
    { href: "/docs/installation", label: t("installation") },
    { href: "/docs/color-api", label: t("colorApi") },
    { href: "/docs/command-api", label: t("commandApi") },
    { href: "/docs/item-api", label: t("itemApi") },
    { href: "/docs/config-manager", label: t("configManager") },
    { href: "/docs/gui-api", label: t("guiApi") },
    { href: "/docs/api/color-util", label: t("colorUtil") },
    { href: "/docs/api/command-executor", label: t("commandExecutor") },
    { href: "/docs/api/item-builder", label: t("itemBuilder") },
    { href: "/docs/api/config-manager", label: t("configManagerRef") },
    { href: "/docs/examples/command", label: t("basicCommand") },
    { href: "/docs/examples/item", label: t("customItem") },
    { href: "/docs/examples/gui", label: t("guiMenu") },
  ]

  const idx = Math.max(0, sections.findIndex((s) => pathname.startsWith(s.href)))
  const prev = sections[idx - 1]
  const next = sections[idx + 1]

  const prevText = language === "ru" ? "Назад" : "Previous"
  const nextText = language === "ru" ? "Дальше" : "Next"

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${className}`}>
      {prev ? (
        <Link
          href={prev.href}
          className="group flex items-center justify-between gap-3 px-5 py-4 rounded-lg border border-border bg-card hover:border-primary transition-colors"
        >
          <div className="flex items-center gap-3">
            <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <div>
              <div className="text-xs text-muted-foreground">{prevText}</div>
              <div className="font-medium">{prev.label}</div>
            </div>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next && (
        <Link
          href={next.href}
          className="group flex items-center justify-between gap-3 px-5 py-4 rounded-lg border border-border bg-card hover:border-primary transition-colors sm:justify-end"
        >
          <div className="text-right">
            <div className="text-xs text-muted-foreground">{nextText}</div>
            <div className="font-medium">{next.label}</div>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
      )}
    </div>
  )
}

