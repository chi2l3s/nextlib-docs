"use client"

import type React from "react"
import { DocsPager } from "@/components/docs-pager"

interface DocPageProps {
  title: string
  description: string
  children: React.ReactNode
}

export function DocPage({ title, description, children }: DocPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-balance">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        <p className="text-lg text-muted-foreground text-balance">{description}</p>
        <div className="mt-4 h-0.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
      </div>
      <div className="prose prose-invert max-w-none">{children}</div>
      <DocsPager className="mt-10" />
    </div>
  )
}
