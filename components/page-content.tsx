"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

export function PageContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen w-full overflow-x-hidden flex-col">
      <Header />
      <main className="pt-16 w-full overflow-x-hidden">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
