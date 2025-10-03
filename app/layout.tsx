import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Street Food Delights",
  description: "Explore authentic Indian street food with detailed descriptions and prices in INR",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",        // main favicon
    shortcut: "/favicon.png",    // browser shortcut
    apple: "/favicon.png", // optional for iOS
  },
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
        {/* Razorpay Checkout */}
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
      </body>
    </html>
  )
}
