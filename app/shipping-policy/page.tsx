import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ShippingPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-12">
            <div className="sticky top-0 z-10 bg-white border-b border-primary/20 shadow-sm">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-4xl">
                    <Button variant="ghost" size="icon" asChild className="text-primary">
                        <Link href="/menu">
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                    </Button>
                    <h1 className="text-lg md:text-xl font-bold text-primary">Shipping Policy</h1>
                    <div className="w-9"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-6 max-w-4xl">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center text-2xl text-primary">Shipping & Delivery Policy</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Delivery Areas</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• We deliver within a 10km radius from our location</li>
                                <li>• Free delivery areas: Mumbai Central, Andheri, Bandra, Juhu</li>
                                <li>• Extended delivery areas available with additional charges</li>
                                <li>• Out-of-coverage areas may have limited delivery options</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Delivery Time</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Standard delivery: 45-60 minutes from order confirmation</li>
                                <li>• Express delivery: 30 minutes (additional charges apply)</li>
                                <li>• Delivery time may vary based on traffic and weather conditions</li>
                                <li>• Peak hours (7-9 PM) may have extended delivery times</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Order Processing</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Orders are processed within 10-15 minutes of confirmation</li>
                                <li>• You will receive SMS updates about your order status</li>
                                <li>• Orders placed after 9:30 PM will be delivered the next day</li>
                                <li>• Minimum order value: ₹200 for delivery</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Delivery Charges</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Free delivery for orders above ₹500</li>
                                <li>• Standard delivery: ₹50 for orders below ₹500</li>
                                <li>• Express delivery: ₹100 (30-minute delivery)</li>
                                <li>• Out-of-coverage areas: ₹100-150 based on distance</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Delivery Instructions</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Please provide accurate delivery address and landmarks</li>
                                <li>• Keep your phone accessible for delivery updates</li>
                                <li>• Someone must be available to receive the order</li>
                                <li>• Unattended deliveries will be attempted twice before cancellation</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                            <p className="text-sm text-green-800">
                                <strong>Note:</strong> We ensure fresh and hot food delivery. All items are packed
                                in eco-friendly containers to maintain quality and temperature during transit.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
