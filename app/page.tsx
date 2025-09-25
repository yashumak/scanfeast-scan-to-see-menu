"use client"

import { CardContent } from "@/components/ui/card"
import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { QRCodeSVG } from "qrcode.react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ClientOnly from "@/components/client-only"

export default function HomePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("qrcode")

  // Generate a menu URL that would work when scanned from a different device
  const qrValue = typeof window !== "undefined" ? `${window.location.origin}/menu` : "";

  // Simple validation function for menu QR codes
  const isValidMenuQR = (text: string): boolean => {
    // Check for JSON format that might contain menu data
    if (text.startsWith("{") && text.endsWith("}")) {
      try {
        const data = JSON.parse(text)
        return data.type === "menu" || data.menuId !== undefined
      } catch {
        return false
      }
    }
    return false
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="flex-1 container px-4 py-8 flex flex-col items-center justify-center text-center gap-6 mx-auto">
        <div className="w-full max-w-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 text-primary">
            Street Food Delights
          </h1>
          <p className="text-slate-600 text-sm md:text-base">Scan QR code to explore authentic Indian street food</p>
        </div>

        <div className="w-full max-w-xs flex justify-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white px-6 py-2 md:px-8 md:py-2.5">
            <Link href="/menu">View Menu Directly</Link>
          </Button>
        </div>

        <div className="w-full max-w-xs bg-white p-4 md:p-6 rounded-lg border border-secondary/20 shadow-sm">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-1 mb-4 bg-secondary/10">
              <TabsTrigger
                value="qrcode"
                className="text-xs md:text-sm data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                Menu QR Code
              </TabsTrigger>
            </TabsList>

            <TabsContent value="qrcode" className="flex flex-col items-center">
              <p className="text-sm md:text-base font-medium mb-2 text-secondary">Scan with your mobile device:</p>
              <div className="bg-white p-2 md:p-3 rounded-lg border border-accent/30">
                <ClientOnly>
                  <QRCodeSVG
                    value={qrValue}
                    size={180}
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level={"H"}
                    includeMargin={true}
                  />
                </ClientOnly>
              </div>
              <p className="text-xs md:text-sm text-slate-500 mt-2">This QR code links to our menu</p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-full max-w-md mt-4">
          <Card className="border-secondary/20 bg-gradient-to-br from-white to-purple-50">
            <CardContent className="p-4 md:p-6 text-center">
              <p className="text-sm md:text-base text-slate-600">
                <strong className="text-primary">Street Food Delights</strong>
                <br />
                Rajapeth, Amravati, Maharashtra
                <br />
                <a href="tel:+919876543210" className="text-secondary hover:underline">
                  +91 98765 43210
                </a>
                <br />
                <a href="mailto:info@streetfooddelights.com" className="text-secondary hover:underline">
                  info@streetfooddelights.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
