"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download } from "lucide-react";

export default function QRCodeGenerator() {
  const [menuSection, setMenuSection] = useState("breakfast");
  // Always use the environment variable for the base URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const qrValue = `${baseUrl}/menu?section=${menuSection}`;

  const handleDownload = () => {
    const svg = document.getElementById("menu-qr-code") as SVGSVGElement | null;
    if (!svg) return;

    // Serialize SVG to string
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = 1024;
      canvas.height = 1024;
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `grand-plaza-menu-${menuSection}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Menu QR Code</CardTitle>
        <CardDescription>
          Generate a QR code for a specific menu section
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="mb-6">
          <Select value={menuSection} onValueChange={setMenuSection}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select menu section" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="breakfast">Breakfast</SelectItem>
              <SelectItem value="lunch">Lunch</SelectItem>
              <SelectItem value="dinner">Dinner</SelectItem>
              <SelectItem value="drinks">Drinks</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <QRCodeSVG
            id="menu-qr-code"
            value={qrValue}
            size={200}
            level="H" // High error correction
            includeMargin={true}
          />
        </div>

        <p className="text-sm text-muted-foreground mt-4 text-center">
          Scan to view the {menuSection} menu
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={handleDownload} className="gap-2">
          <Download className="h-4 w-4" />
          Download QR Code
        </Button>
      </CardFooter>
    </Card>
  );
}
