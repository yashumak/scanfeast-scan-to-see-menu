import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CancellationRefundPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-12">
            <div className="sticky top-0 z-10 bg-white border-b border-primary/20 shadow-sm">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-4xl">
                    <Button variant="ghost" size="icon" asChild className="text-primary">
                        <Link href="/menu">
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                    </Button>
                    <h1 className="text-lg md:text-xl font-bold text-primary">Cancellation & Refund Policy</h1>
                    <div className="w-9"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-6 max-w-4xl">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center text-2xl text-primary">Cancellation & Refund Policy</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Order Cancellation</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Orders can be cancelled within 5 minutes of placement without any charges</li>
                                <li>• Cancellation after 5 minutes but before food preparation starts: ₹50 cancellation fee</li>
                                <li>• Cancellation after food preparation has started: No refund available</li>
                                <li>• Orders already out for delivery cannot be cancelled</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Refund Eligibility</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Refunds are processed for cancelled orders within 5 minutes</li>
                                <li>• Refunds available for orders cancelled before food preparation</li>
                                <li>• Quality issues: Full refund or replacement (customer's choice)</li>
                                <li>• Wrong order delivered: Full refund or correct order delivery</li>
                                <li>• Delivery delays beyond 90 minutes: Partial refund of delivery charges</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Refund Process</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Refunds are processed within 3-5 business days</li>
                                <li>• Refund amount will be credited to the original payment method</li>
                                <li>• For cash payments, refund will be processed via bank transfer</li>
                                <li>• You will receive SMS/email confirmation once refund is processed</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Non-Refundable Items</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Orders cancelled after food preparation has started</li>
                                <li>• Orders that have been delivered successfully</li>
                                <li>• Custom or special preparation items</li>
                                <li>• Delivery charges for completed deliveries</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Quality Issues</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Report quality issues within 30 minutes of delivery</li>
                                <li>• We may request photos as proof of the issue</li>
                                <li>• Our team will investigate and provide appropriate resolution</li>
                                <li>• Full refund or free replacement for genuine quality issues</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Delivery Issues</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• If delivery person cannot locate you: 3 attempts will be made</li>
                                <li>• After 3 failed attempts: Order will be cancelled with full refund</li>
                                <li>• Wrong address provided: Customer responsible for additional delivery charges</li>
                                <li>• Delayed delivery due to traffic/weather: No cancellation charges</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">How to Cancel/Request Refund</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Call our customer service: +91 98765 43210</li>
                                <li>• Email us at: info@streetfooddelights.com</li>
                                <li>• Use the cancellation option in your order confirmation SMS</li>
                                <li>• Provide your order number and reason for cancellation</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Dispute Resolution</h3>
                            <p className="text-slate-600">
                                If you are not satisfied with our resolution, you can escalate the matter by writing to
                                our customer service team. We aim to resolve all disputes within 48 hours of receiving your complaint.
                            </p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                            <p className="text-sm text-green-800">
                                <strong>Customer Satisfaction:</strong> We are committed to providing excellent service.
                                If you're not satisfied with your order, please contact us immediately and we'll make it right.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
