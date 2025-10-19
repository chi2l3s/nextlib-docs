"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toc } from "@/components/toc"
import { DocIndex } from "@/components/doc-index"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] xl:grid-cols-[220px_1fr_280px] gap-6 lg:gap-8 max-w-7xl mx-auto w-full px-4 md:px-6">
          <aside className="hidden lg:block pt-6">
            <DocIndex />
          </aside>
          <div id="docs-content" className="min-w-0 pb-40">{children}</div>
          <aside className="hidden xl:block pt-6">
            <Toc containerSelector="#docs-content" />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
