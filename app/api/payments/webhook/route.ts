import crypto from "crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET as string | undefined;
    if (!webhookSecret) {
        return NextResponse.json({ error: "RAZORPAY_WEBHOOK_SECRET not set" }, { status: 500 });
    }

    const payload = await request.text();
    const signature = request.headers.get("x-razorpay-signature") || "";
    const expected = crypto.createHmac("sha256", webhookSecret).update(payload).digest("hex");

    if (signature !== expected) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(payload);
    // TODO: handle event types and update your database accordingly
    return NextResponse.json({ ok: true });
}



