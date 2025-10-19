"use client"

import { useState, useMemo } from "react"
import { Copy, Check } from "lucide-react"

interface CodeExampleProps {
  code: string
  language?: string
  title?: string
}

function highlightYaml(code: string) {
  const lines = code.split(/\r?\n/)
  const out: string[] = []
  for (const raw of lines) {
    let line = raw
    if (/^\s*#/.test(line)) {
      out.push(`<span class="token comment">${line}</span>`)
      continue
    }
    const m = line.match(/^(\s*)(-\s+)?([^:#\n]+?)(\s*:\s*)(.*)?$/)
    if (m) {
      const [, indent = "", dash = "", key = "", colon = ": ", rest = ""] = m
      let valueHtml = rest
      if (rest) {
        const trimmed = rest.trim()
        if (/^(true|false)$/i.test(trimmed)) {
          const cls = trimmed.toLowerCase() === "true" ? "boolean true" : "boolean false"
          valueHtml = `<span class="token ${cls}">${rest}</span>`
        } else if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
          valueHtml = `<span class="token number">${rest}</span>`
        } else if (/^\[.*\]$/.test(trimmed)) {
          valueHtml = `<span class="token array">${rest}</span>`
        } else {
          valueHtml = `<span class="token string">${rest}</span>`
        }
      }
      line = `${indent}${dash ? `<span class=\"token punct\">${dash}</span>` : ""}` +
        `<span class="token yaml-key">${key}</span>` +
        `<span class="token punct">${colon}</span>` +
        (rest ? valueHtml : "")
      out.push(line)
    } else if (/^(\s*)-(\s*)(.*)$/.test(line)) {
      const [, ind = "", sp = " ", rest = ""] = line.match(/^(\s*)-(\s*)(.*)$/) || []
      let valueHtml = rest
      if (rest) {
        const t = rest.trim()
        if (/^(true|false)$/i.test(t)) valueHtml = `<span class="token boolean ${t.toLowerCase()}">${rest}</span>`
        else if (/^-?\d+(\.\d+)?$/.test(t)) valueHtml = `<span class="token number">${rest}</span>`
        else valueHtml = `<span class="token string">${rest}</span>`
      }
      out.push(`${ind}<span class="token punct">-</span>${sp}${valueHtml}`)
    } else {
      out.push(line)
    }
  }
  return out.join("\n")
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function highlightJavaOrGradle(code: string) {
  let s = escapeHtml(code)
  // Order: strings -> numbers -> keywords -> comments (last)
  s = s.replace(/(&quot;|\")[^"\\]*(?:\\.[^"\\]*)*\1/g, (m) => `${m}`)
  s = s.replace(/\b-?\d+(?:\.\d+)?\b/g, (m) => `<span class="token number">${m}</span>`)
  const kw = [
    'public','protected','private','class','interface','enum','extends','implements','static','final','void','new','return','if','else','switch','case','break','default','for','while','do','try','catch','finally','import','package','null','true','false'
  ]
  const kwRe = new RegExp(`\\b(${kw.join('|')})\\b`, 'g')
  s = s.replace(kwRe, (m) => `<span class="token keyword">${m}</span>`)
  s = s.replace(/\/\*[\s\S]*?\*\//g, (m) => `<span class="token comment">${m}</span>`)
  s = s.replace(/(^|\s)(\/\/.*)$/gm, (_a, g1, g2) => `${g1}<span class="token comment">${g2}</span>`)
  return s
}

function highlightXml(code: string) {
  let s = escapeHtml(code)
  s = s.replace(/(&lt;\/)([A-Za-z0-9:_-]+)(&gt;)/g, (_m, a, name, b) => `${a}<span class="token tag">${name}</span>${b}`)
  s = s.replace(/(&lt;)([A-Za-z0-9:_-]+)([^&]*?)(&gt;)/g, (_m, lt, name, attrs, gt) => {
    attrs = attrs.replace(/([A-Za-z0-9:_-]+)(=)(&quot;[^&]*?&quot;)/g, (_m2: any, an: any, eq: any, av: any) => `<span class="token attr">${an}</span>${eq}<span class="token string">${av}</span>`)
    return `${lt}<span class="token tag">${name}</span>${attrs}${gt}`
  })
  return s
}

export function CodeExample({ code, language = "java", title }: CodeExampleProps) {
  const [copied, setCopied] = useState(false)
  const highlighted = useMemo(() => {
    if (language === "yaml") return highlightYaml(code)
    if (language === "java" || language === "gradle") return highlightJavaOrGradle(code)
    if (language === "xml") return highlightXml(code)
    return null
  }, [code, language])

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-6 rounded-lg border border-border overflow-hidden bg-card">
      {title && <div className="px-4 py-2 bg-background/50 border-b border-border text-sm font-medium">{title}</div>}
      <div className="relative">
        {highlighted ? (
          <pre className="p-4 overflow-x-auto"><code dangerouslySetInnerHTML={{ __html: highlighted }} /></pre>
        ) : (
          <pre className="p-4 overflow-x-auto"><code className={`language-${language}`}>{code}</code></pre>
        )}
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

