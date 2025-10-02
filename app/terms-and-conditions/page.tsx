import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsAndConditionsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-12">
            <div className="sticky top-0 z-10 bg-white border-b border-primary/20 shadow-sm">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-4xl">
                    <Button variant="ghost" size="icon" asChild className="text-primary">
                        <Link href="/menu">
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                    </Button>
                    <h1 className="text-lg md:text-xl font-bold text-primary">Terms & Conditions</h1>
                    <div className="w-9"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-6 max-w-4xl">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center text-2xl text-primary">Terms and Conditions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Acceptance of Terms</h3>
                            <p className="text-slate-600">
                                By accessing and using our website and services, you accept and agree to be bound by the terms
                                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Use License</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Permission is granted to temporarily download one copy of the materials for personal,
                                    non-commercial transitory viewing only</li>
                                <li>• This is the grant of a license, not a transfer of title</li>
                                <li>• You may not modify or copy the materials</li>
                                <li>• You may not use the materials for any commercial purpose or for any public display</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Order Terms</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• All orders are subject to availability</li>
                                <li>• We reserve the right to refuse or cancel any order</li>
                                <li>• Orders cannot be modified once confirmed</li>
                                <li>• Prices are subject to change without notice</li>
                                <li>• Delivery time estimates are approximate</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Payment Terms</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Payment must be made at the time of order confirmation</li>
                                <li>• We accept all major credit/debit cards and digital payment methods</li>
                                <li>• Cash on delivery is available for select areas</li>
                                <li>• All payments are processed securely through encrypted channels</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">User Responsibilities</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Provide accurate and complete information during ordering</li>
                                <li>• Ensure someone is available to receive the delivery</li>
                                <li>• Maintain the confidentiality of your account credentials</li>
                                <li>• Notify us immediately of any unauthorized use of your account</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Limitation of Liability</h3>
                            <p className="text-slate-600">
                                In no event shall Street Food Delights or its suppliers be liable for any damages
                                (including, without limitation, damages for loss of data or profit, or due to business interruption)
                                arising out of the use or inability to use the materials on our website.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Modifications</h3>
                            <p className="text-slate-600">
                                Street Food Delights may revise these terms of service at any time without notice.
                                By using this website, you are agreeing to be bound by the then current version of these terms.
                            </p>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <p className="text-sm text-yellow-800">
                                <strong>Last Updated:</strong> These terms and conditions were last updated on January 1, 2024.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
