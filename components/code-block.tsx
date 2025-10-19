"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = "java" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <pre className="code-block text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-background/80 hover:bg-background border border-border rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
        title="Copy code"
      >
        {copied ? <Check size={16} className="text-primary" /> : <Copy size={16} className="text-muted-foreground" />}
      </button>
    </div>
  )
}
