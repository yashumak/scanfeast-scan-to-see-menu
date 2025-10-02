import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-12">
            <div className="sticky top-0 z-10 bg-white border-b border-primary/20 shadow-sm">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-4xl">
                    <Button variant="ghost" size="icon" asChild className="text-primary">
                        <Link href="/menu">
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                    </Button>
                    <h1 className="text-lg md:text-xl font-bold text-primary">Pricing Policy</h1>
                    <div className="w-9"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-6 max-w-4xl">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center text-2xl text-primary">Pricing Policy</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Menu Pricing</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• All prices listed on our menu are in Indian Rupees (INR)</li>
                                <li>• Prices are inclusive of all applicable taxes</li>
                                <li>• Prices are subject to change without prior notice</li>
                                <li>• Special offers and discounts may apply during promotional periods</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Delivery Charges</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Free delivery for orders above ₹500</li>
                                <li>• Delivery charges of ₹50 apply for orders below ₹500</li>
                                <li>• Delivery charges may vary based on distance and location</li>
                                <li>• Express delivery charges (₹100) for orders within 30 minutes</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Payment Methods</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• We accept all major credit/debit cards</li>
                                <li>• UPI payments through various apps</li>
                                <li>• Net banking and digital wallets</li>
                                <li>• Cash on delivery (COD) available for select areas</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Special Pricing</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Student discounts: 10% off on valid student ID</li>
                                <li>• Senior citizen discounts: 15% off for customers above 60</li>
                                <li>• Bulk orders: Special pricing for orders above ₹2000</li>
                                <li>• Corporate orders: Custom pricing available for large orders</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-sm text-blue-800">
                                <strong>Note:</strong> All prices are final at the time of order confirmation.
                                For any pricing queries, please contact us at +91 98765 43210 or email us at info@streetfooddelights.com
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
