"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, X } from "lucide-react"
import { useLanguage } from "@/lib/language-provider"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { t } = useLanguage()
  const [expandedSections, setExpandedSections] = useState<string[]>([t("gettingStarted")])

  const navigation = [
    {
      title: t("gettingStarted"),
      items: [
        { label: t("introduction"), href: "/" },
        { label: t("installation"), href: "/docs/installation" },
        { label: t("quickStart"), href: "/docs/quick-start" },
      ],
    },
    {
      title: t("guides"),
      items: [
        { label: t("colorApi"), href: "/docs/color-api" },
        { label: t("commandApi"), href: "/docs/command-api" },
        { label: t("itemApi"), href: "/docs/item-api" },
        { label: t("configManager"), href: "/docs/config-manager" },
        { label: t("guiApi"), href: "/docs/gui-api" },
      ],
    },
    {
      title: t("apiReference"),
      items: [
        { label: t("colorUtil"), href: "/docs/api/color-util" },
        { label: t("commandExecutor"), href: "/docs/api/command-executor" },
        { label: t("itemBuilder"), href: "/docs/api/item-builder" },
        { label: t("configManagerRef"), href: "/docs/api/config-manager" },
      ],
    },
    {
      title: t("examples"),
      items: [
        { label: t("basicCommand"), href: "/docs/examples/command" },
        { label: t("customItem"), href: "/docs/examples/item" },
        { label: t("guiMenu"), href: "/docs/examples/gui" },
      ],
    },
  ]

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => (prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]))
  }

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 md:hidden z-30 animate-fade-in" onClick={onClose} />}

      <aside
        className={`fixed left-0 top-16 md:top-0 w-64 h-screen bg-card border-r border-border overflow-y-auto transition-all duration-300 z-40 md:z-0 ${
          isOpen ? "translate-x-0 animate-slide-in-left" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8 md:hidden">
            <div className="flex items-center gap-2 animate-fade-in">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">NL</span>
              </div>
              <h1 className="text-xl font-bold highlight-cyan">NextLib</h1>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-background/50 rounded transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-sm">NL</span>
            </div>
            <h1 className="text-xl font-bold highlight-cyan">NextLib</h1>
          </div>

          <nav className="space-y-1">
            {navigation.map((section, idx) => (
              <div key={section.title} style={{ animationDelay: `${idx * 50}ms` }} className="animate-fade-in">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-background/50 transition-all duration-300 hover:translate-x-1 active:scale-95"
                >
                  {section.title}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${expandedSections.includes(section.title) ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedSections.includes(section.title) && (
                  <div className="ml-2 space-y-1 mt-1 animate-fade-in">
                    {section.items.map((item, itemIdx) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-background/50 transition-all duration-300 hover:translate-x-1 active:scale-95"
                        onClick={onClose}
                        style={{ animationDelay: `${itemIdx * 30}ms` }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-background/50">
          <a
            href="https://github.com/chi2l3s/next-lib"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-300 font-medium text-sm hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-primary/50"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {t("github")}
          </a>
        </div>
      </aside>
    </>
  )
}
