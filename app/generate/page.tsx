import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import QRCodeGenerator from "@/components/qr-code-generator"

export default function GeneratePage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
      </Button>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">QR Code Generator</h1>
        <p className="text-muted-foreground mt-2">Create QR codes for your menu sections</p>
      </div>

      <QRCodeGenerator />

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Print these QR codes and place them on tables or in your hotel information booklet.
        </p>
      </div>
    </div>
  )
}
