"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeSwitcher } from "./theme-switcher"
import { LanguageSwitcher } from "./language-switcher"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  sidebarOpen?: boolean
  onToggleSidebar?: () => void
}

export function Header({ sidebarOpen = false, onToggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 right-0 left-0 h-16 bg-card/75 backdrop-blur border-b border-border flex items-center justify-between px-4 md:px-6 z-40 transition-all duration-300">
      <div className="flex items-center gap-2">
        {onToggleSidebar && (
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleSidebar}
              aria-label="Toggle sidebar"
              className="transition-all duration-300 hover:scale-110 active:scale-95"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        )}

        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logo.svg" alt="NextLib" width={24} height={24} priority className="opacity-90 group-hover:opacity-100" />
          <span className="font-bold tracking-tight hidden sm:inline-block">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">NextLib</span>
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-accent via-primary to-accent animate-[gradientShift_6s_linear_infinite] opacity-70" />
    </header>
  )
}
