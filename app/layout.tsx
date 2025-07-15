import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Street Food Delights",
  description: "Explore authentic Indian street food with detailed descriptions and prices in INR",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className} style={{ colorScheme: "light" }}>
      <body>
        {children}
      </body>
    </html>
  )
}
