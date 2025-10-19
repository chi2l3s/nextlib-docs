"use client"

import { ThemeSwitcher } from "./theme-switcher"
import { LanguageSwitcher } from "./language-switcher"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  sidebarOpen: boolean
  onToggleSidebar: () => void
}

export function Header({ sidebarOpen, onToggleSidebar }: HeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-card border-b border-border flex items-center justify-between px-6 z-40 transition-all duration-300">
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          className="transition-all duration-300 hover:scale-110 active:scale-95"
        >
          {sidebarOpen ? <X className="w-5 h-5 animate-fade-in" /> : <Menu className="w-5 h-5 animate-fade-in" />}
        </Button>
      </div>

      <div className="flex items-center gap-2 md:hidden">
        <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <span className="text-white font-bold text-xs">NL</span>
        </div>
        <h1 className="text-lg font-bold highlight-cyan">NextLib</h1>
      </div>

      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  )
}
