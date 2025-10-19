import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-provider"
import { LanguageProvider } from "@/lib/language-provider"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: { default: "NextLib – Lightweight Minecraft Plugin Library", template: "%s | NextLib" },
  description:
    "NextLib is a lightweight library for Minecraft plugin development: Color API, Command Manager, Item Builder, Config Manager, GUI API.",
  keywords: ["Minecraft", "Plugin", "Library", "Java", "Spigot", "Paper", "Bukkit"],
  authors: [{ name: "chi2l3s" }],
  creator: "chi2l3s",
  publisher: "NextLib",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://mc-nextlib.vercel.app"),
  icons: {
    icon: "/favicon.ico",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mc-nextlib.vercel.app",
    siteName: "NextLib",
    title: "NextLib – Lightweight Minecraft Plugin Library",
    description: "Build Minecraft plugins the easy way with NextLib",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NextLib - Minecraft Plugin Library" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextLib – Lightweight Minecraft Plugin Library",
    description: "Build Minecraft plugins the easy way",
    creator: "@chi2l3s",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7c3aed" },
    { media: "(prefers-color-scheme: dark)", color: "#a78bfa" },
  ],
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
              url: "https://mc-nextlib.vercel.app",
              image: "https://mc-nextlib.vercel.app/og-image.png",
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
