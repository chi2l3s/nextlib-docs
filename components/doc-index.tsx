"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Wrench, Palette, Package, Settings, LayoutGrid, FileText, TerminalSquare, FlaskConical } from "lucide-react"
import { useLanguage } from "@/lib/language-provider"

export function DocIndex() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const sections = [
    {
      title: t("gettingStarted"),
      items: [
        { href: "/docs/quick-start", label: t("quickStart"), icon: BookOpen },
        { href: "/docs/installation", label: t("installation"), icon: Wrench },
      ],
    },
    {
      title: t("guides"),
      items: [
        { href: "/docs/color-api", label: t("colorApi"), icon: Palette },
        { href: "/docs/command-api", label: t("commandApi"), icon: Settings },
        { href: "/docs/item-api", label: t("itemApi"), icon: Package },
        { href: "/docs/config-manager", label: t("configManager"), icon: FileText },
        { href: "/docs/gui-api", label: t("guiApi"), icon: LayoutGrid },
      ],
    },
    {
      title: t("apiReference"),
      items: [
        { href: "/docs/api/color-util", label: t("colorUtil"), icon: Palette },
        { href: "/docs/api/command-executor", label: t("commandExecutor"), icon: TerminalSquare },
        { href: "/docs/api/item-builder", label: t("itemBuilder"), icon: Package },
        { href: "/docs/api/config-manager", label: t("configManagerRef"), icon: FileText },
      ],
    },
    {
      title: t("examples"),
      items: [
        { href: "/docs/examples/command", label: t("basicCommand"), icon: TerminalSquare },
        { href: "/docs/examples/item", label: t("customItem"), icon: Package },
        { href: "/docs/examples/gui", label: t("guiMenu"), icon: LayoutGrid },
      ],
    },
  ]
  const links = sections.flatMap((s) => s.items)

  const activeIndex = Math.max(0, links.findIndex((l) => pathname.startsWith(l.href)))
  const containerRef = (globalThis as any).React?.useRef?.() ?? null
  // fallback: dynamic without relying on global React; create a local ref via custom hook
  // but in Next/React runtime we can just use useRef

  return (
    <nav aria-label="Docs index" className="relative select-none sticky top-24">
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-px bg-border" aria-hidden />
        <div
          className="absolute left-0 w-0.5 bg-gradient-to-b from-accent to-primary rounded transition-transform duration-300"
          aria-hidden
        />
        <div className="ml-3 space-y-4 max-h-[60vh] overflow-auto pr-2">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">{section.title}</div>
              <ul className="space-y-1">
                {section.items.map(({ href, label, icon: Icon }) => {
                  const active = pathname.startsWith(href)
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`flex items-center gap-2 text-sm px-2 py-1.5 rounded hover:text-primary transition-colors ${
                          active ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        <Icon size={16} className="opacity-80" />
                        <span className="truncate">{label}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

  

