"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Camera, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"

export default function ScanPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [scanning, setScanning] = useState(false)
  const [scanSuccess, setScanSuccess] = useState(false)
  const [scanMessage, setScanMessage] = useState("")

  useEffect(() => {
    let scanner: any = null

    const startScanner = async () => {
      try {
        setScanning(true)
        const Html5QrcodeScannerModule = await import("html5-qrcode")
        const Html5QrcodeScanner = Html5QrcodeScannerModule.Html5QrcodeScanner

        scanner = new Html5QrcodeScanner(
          "qr-reader",
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
            rememberLastUsedCamera: true,
          },
          false,
        )

        scanner.render(
          (decodedText: string) => {
            // Handle the scanned code
            if (decodedText) {
              try {
                // Check if the QR code contains valid menu data
                // For demo purposes, we'll accept URLs containing "menu" or specific formats
                // In a real app, you might want to validate against expected patterns

                if (decodedText.includes("menu") || decodedText.startsWith("hotel:") || isValidMenuQR(decodedText)) {
                  setScanSuccess(true)
                  setScanMessage("Menu found! Redirecting...")

                  // Extract menu section if present in QR code
                  let menuSection = "breakfast" // default section
                  if (decodedText.includes("section=")) {
                    const sectionMatch = decodedText.match(/section=([a-z]+)/)
                    if (sectionMatch && sectionMatch[1]) {
                      menuSection = sectionMatch[1]
                    }
                  }

                  // Redirect after a short delay to show success message
                  setTimeout(() => {
                    router.push(`/menu?section=${menuSection}`)
                  }, 1500)
                } else {
                  setError("Invalid QR code. Please scan a valid hotel menu QR code.")
                }
              } catch (err) {
                setError("Failed to process QR code. Please try again.")
              }
            }
          },
          (errorMessage: string) => {
            // Only set error for persistent issues, not for each frame
            if (errorMessage.includes("No QR code found")) {
              // Ignore this common error during scanning
              return
            }
            console.error(errorMessage)
          },
        )
      } catch (err) {
        setError("Failed to start camera. Please ensure you've granted camera permissions.")
        setScanning(false)
      }
    }

    startScanner()

    return () => {
      if (scanner) {
        try {
          scanner.clear()
        } catch (error) {
          console.error("Failed to clear scanner", error)
        }
      }
    }
  }, [router])

  // Simple validation function for menu QR codes
  // In a real app, this would be more sophisticated
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
    <div className="container max-w-md mx-auto px-4 py-8">
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Scan Menu QR Code</CardTitle>
          <CardDescription>Position the QR code within the camera view to scan</CardDescription>
        </CardHeader>
        <CardContent>
          {error ? (
            <div className="text-center p-4">
              <Alert variant="destructive" className="mb-4">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
              <Button asChild>
                <Link href="/menu">View Menu Instead</Link>
              </Button>
            </div>
          ) : scanSuccess ? (
            <div className="text-center p-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Loader2 className="h-6 w-6 text-primary animate-spin" />
                </div>
                <p className="font-medium text-lg">{scanMessage}</p>
              </div>
            </div>
          ) : (
            <>
              <div id="qr-reader" className="w-full"></div>
              {!scanning && (
                <div className="flex justify-center items-center h-64 border rounded-md border-dashed">
                  <div className="text-center">
                    <Camera className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Camera loading...</p>
                  </div>
                </div>
              )}
              <div className="mt-4 text-sm text-muted-foreground">
                <p className="mb-2">Tips for scanning:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ensure good lighting</li>
                  <li>Hold your device steady</li>
                  <li>Position QR code within the frame</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Having trouble? You can also{" "}
                <Link href="/menu" className="text-primary underline">
                  view the menu directly
                </Link>
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
