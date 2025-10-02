import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-12">
            <div className="sticky top-0 z-10 bg-white border-b border-primary/20 shadow-sm">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-4xl">
                    <Button variant="ghost" size="icon" asChild className="text-primary">
                        <Link href="/menu">
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                    </Button>
                    <h1 className="text-lg md:text-xl font-bold text-primary">Privacy Policy</h1>
                    <div className="w-9"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-6 max-w-4xl">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center text-2xl text-primary">Privacy Policy</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Information We Collect</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Personal information (name, phone number, email address)</li>
                                <li>• Delivery address and location data</li>
                                <li>• Payment information (processed securely through third-party providers)</li>
                                <li>• Order history and preferences</li>
                                <li>• Device information and usage patterns</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">How We Use Your Information</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Process and fulfill your orders</li>
                                <li>• Provide customer support and respond to inquiries</li>
                                <li>• Send order updates and delivery notifications</li>
                                <li>• Improve our services and menu offerings</li>
                                <li>• Send promotional offers (with your consent)</li>
                                <li>• Comply with legal obligations</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Information Sharing</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• We do not sell your personal information to third parties</li>
                                <li>• We may share information with delivery partners for order fulfillment</li>
                                <li>• Payment information is shared only with secure payment processors</li>
                                <li>• We may disclose information if required by law or legal process</li>
                                <li>• Information may be shared in case of business transfers or mergers</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Data Security</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• We implement appropriate security measures to protect your data</li>
                                <li>• All payment transactions are encrypted using SSL technology</li>
                                <li>• Access to personal information is restricted to authorized personnel</li>
                                <li>• Regular security audits and updates are conducted</li>
                                <li>• Data is stored on secure servers with regular backups</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Your Rights</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• Access and review your personal information</li>
                                <li>• Request correction of inaccurate data</li>
                                <li>• Request deletion of your personal information</li>
                                <li>• Opt-out of promotional communications</li>
                                <li>• Withdraw consent for data processing</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Cookies and Tracking</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li>• We use cookies to enhance your browsing experience</li>
                                <li>• Cookies help remember your preferences and login status</li>
                                <li>• You can disable cookies through your browser settings</li>
                                <li>• We may use analytics tools to understand website usage</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Data Retention</h3>
                            <p className="text-slate-600">
                                We retain your personal information only as long as necessary to fulfill the purposes
                                outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                            <p className="text-slate-600">
                                If you have any questions about this Privacy Policy or wish to exercise your rights,
                                please contact us at:
                            </p>
                            <ul className="mt-2 space-y-1 text-slate-600">
                                <li>• Email: info@streetfooddelights.com</li>
                                <li>• Phone: +91 98765 43210</li>
                                <li>• Address: 123 Flavor Street, Mumbai, India</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-sm text-blue-800">
                                <strong>Updates:</strong> This Privacy Policy may be updated periodically.
                                We will notify you of any significant changes through our website or email.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
