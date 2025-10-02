import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactInfo() {
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold text-primary mb-4">Visit Us</h2>

      <div className="space-y-3 max-w-md mx-auto">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="h-4 w-4 text-secondary shrink-0" />
          <span className="text-sm text-slate-600">123 Flavor Street, Mumbai, India</span>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Phone className="h-4 w-4 text-secondary shrink-0" />
          <Link href="tel:+919876543210" className="text-sm text-slate-600 hover:text-primary">
            +91 98765 43210
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Mail className="h-4 w-4 text-secondary shrink-0" />
          <Link href="mailto:info@streetfooddelights.com" className="text-sm text-slate-600 hover:text-primary">
            info@streetfooddelights.com
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Clock className="h-4 w-4 text-secondary shrink-0" />
          <span className="text-sm text-slate-600">Open daily: 11:00 AM - 10:00 PM</span>
        </div>
      </div>

      {/* Policy Links */}
      <div className="mt-8 pt-6 border-t border-slate-200">
        <div className="flex flex-wrap justify-center gap-4 text-xs">
          <Link href="/pricing-policy" className="text-slate-500 hover:text-primary transition-colors">
            Pricing Policy
          </Link>
          <Link href="/shipping-policy" className="text-slate-500 hover:text-primary transition-colors">
            Shipping Policy
          </Link>
          <Link href="/terms-and-conditions" className="text-slate-500 hover:text-primary transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/privacy-policy" className="text-slate-500 hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/cancellation-refund-policy" className="text-slate-500 hover:text-primary transition-colors">
            Cancellation/Refund Policy
          </Link>
        </div>
      </div>

      <p className="text-xs text-slate-500 mt-6">© 2023 Street Food Delights. All rights reserved.</p>
    </div>
  )
}
