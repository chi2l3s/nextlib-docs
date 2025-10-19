"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CodeExampleProps {
  code: string
  language?: string
  title?: string
}

export function CodeExample({ code, language = "java", title }: CodeExampleProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-6 rounded-lg border border-border overflow-hidden bg-card">
      {title && <div className="px-4 py-2 bg-background/50 border-b border-border text-sm font-medium">{title}</div>}
      <div className="relative">
        <pre className="p-4 overflow-x-auto">
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 bg-background/50 hover:bg-background rounded transition-all duration-300 hover:scale-110 active:scale-95"
          title="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}
