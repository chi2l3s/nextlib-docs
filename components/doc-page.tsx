"use client"

import type React from "react"

interface DocPageProps {
  title: string
  description: string
  children: React.ReactNode
}

export function DocPage({ title, description, children }: DocPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-balance">{title}</h1>
        <p className="text-lg text-muted-foreground text-balance">{description}</p>
      </div>
      <div className="prose prose-invert max-w-none">{children}</div>
    </div>
  )
}
