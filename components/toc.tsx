"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { usePathname } from "next/navigation"

type TocItem = { id: string; text: string; level: number }

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u0400-\u04FF\s-]/g, "")
    .replace(/\s+/g, "-")
}

export function Toc({ containerSelector = "#docs-content" }: { containerSelector?: string }) {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const observerRef = useRef<IntersectionObserver | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const root = document.querySelector(containerSelector) || document
    const headings = Array.from(root.querySelectorAll("h2, h3")) as HTMLElement[]

    const built: TocItem[] = headings.map((el) => {
      if (!el.id) el.id = slugify(el.innerText)
      const level = el.tagName === "H2" ? 2 : 3
      return { id: el.id, text: el.innerText, level }
    })
    setItems(built)

    observerRef.current?.disconnect()
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId((entry.target as HTMLElement).id)
          }
        })
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 1] }
    )
    headings.forEach((h) => obs.observe(h))
    observerRef.current = obs

    // Fallback: activate last heading when near bottom
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight
      const y = window.scrollY + window.innerHeight
      if (built.length && y >= docH - 24) setActiveId(built[built.length - 1].id)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => { obs.disconnect(); window.removeEventListener("scroll", onScroll) }
  }, [containerSelector, pathname])

  const lineHeight = useMemo(() => 28, [])
  const activeIndex = Math.max(0, items.findIndex((i) => i.id === activeId))

  if (!items.length) return null

  return (
    <nav aria-label="On this page" className="sticky top-24">
      <div className="text-xs uppercase tracking-wide text-muted-foreground mb-3">On this page</div>
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-px bg-border" aria-hidden />
        <div
          className="absolute left-0 w-0.5 bg-gradient-to-b from-primary to-accent rounded transition-all duration-300"
          style={{ height: `${lineHeight}px`, transform: `translateY(${activeIndex * lineHeight}px)` }}
          aria-hidden
        />
        <ul className="ml-3 space-y-1">
          {items.map((i) => (
            <li key={i.id} className="overflow-hidden">
              <a
                href={`#${i.id}`}
                className={`block text-sm truncate hover:text-primary transition-colors duration-200 ${
                  activeId === i.id ? "text-primary" : "text-muted-foreground"
                } ${i.level === 3 ? "ml-3" : ""}`}
              >
                {i.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
