import { NextResponse } from "next/server";
import { getRazorpay } from "@/lib/razorpay";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => ({} as any));
        const amount = Number(body?.amount);
        const currency = (body?.currency || "INR") as string;
        const receipt = (body?.receipt || "receipt_" + Date.now()) as string;

        if (!amount || amount <= 0 || !receipt) {
            return NextResponse.json({ error: "amount and receipt are required" }, { status: 400 });
        }

        // TODO: Validate amount against your catalog/cart server-side

        const razorpay = getRazorpay();
        const order = await razorpay.orders.create({ amount, currency, receipt });
        return NextResponse.json({ order });
    } catch (err: any) {
        const message = err?.message || "Server error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}



