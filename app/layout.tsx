import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-provider"
import { LanguageProvider } from "@/lib/language-provider"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NextLib - Lightweight Minecraft Plugin Library | Easy Development",
  description:
    "NextLib is a lightweight utility library for Minecraft plugin development with Color API, Command Manager, Item Builder, Config Manager, and GUI API. Build plugins the easy way.",
  keywords: ["Minecraft", "Plugin", "Library", "Java", "Development", "API", "Spigot", "Paper"],
  authors: [{ name: "chi2l3s" }],
  creator: "chi2l3s",
  publisher: "NextLib",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextlib.dev",
    siteName: "NextLib",
    title: "NextLib - Lightweight Minecraft Plugin Library",
    description: "Build Minecraft plugins the easy way with NextLib",
    images: [
      {
        url: "https://nextlib.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "NextLib - Minecraft Plugin Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextLib - Lightweight Minecraft Plugin Library",
    description: "Build Minecraft plugins the easy way",
    creator: "@chi2l3s",
  },
  alternates: {
    canonical: "https://nextlib.dev",
    languages: {
      en: "https://nextlib.dev/en",
      ru: "https://nextlib.dev/ru",
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "NextLib",
              description: "Lightweight utility library for Minecraft plugin development",
              applicationCategory: "DeveloperApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Person",
                name: "chi2l3s",
              },
              url: "https://nextlib.dev",
              image: "https://nextlib.dev/og-image.png",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.className} bg-background text-foreground overflow-x-hidden`}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
