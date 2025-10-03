"use client";
import { useState } from "react";

declare global {
    interface Window { Razorpay?: any }
}

export default function CheckoutButton({
    amountPaise,
    receipt,
    name = "ScanFeast",
    description = "Order payment",
    onSuccess,
}: {
    amountPaise: number;
    receipt: string;
    name?: string;
    description?: string;
    onSuccess?: () => void;
}) {
    const [loading, setLoading] = useState(false);

    async function startPayment() {
        try {
            setLoading(true);
            const res = await fetch("/api/payments/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: amountPaise, receipt }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Failed to create order");

            const order = data.order;
            const key = process.env.RAZORPAY_KEY as string | undefined;
            if (!key) {
                alert("Payment config error. Contact support.");
                return;
            }

            const options = {
                key,
                amount: order.amount,
                currency: order.currency,
                name,
                description,
                order_id: order.id,
                handler: function (_response: any) {
                    alert("Payment successful!");
                    onSuccess?.();
                },
                prefill: { name: "", email: "", contact: "" },
                notes: { receipt },
                theme: { color: "#0ea5e9" },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (err: any) {
            alert(err?.message || "Payment failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex justify-center items-center min-h-[80px]">
            <button
                onClick={startPayment}
                disabled={loading}
                className="bg-primary text-white rounded px-4 py-2 disabled:opacity-50"
            >
                {loading ? "Processing..." : "Pay with Razorpay"}
            </button>
        </div>

    );
}



