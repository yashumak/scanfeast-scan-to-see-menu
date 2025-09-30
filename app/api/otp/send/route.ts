import { NextResponse } from "next/server";
import { z } from "zod";
import { generateOTP, sendOTP } from "@/lib/otp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SendOTPInput = z.object({
    phoneNumber: z.string().min(10).max(15),
});

export async function POST(request: Request) {
    try {
        const json = await request.json().catch(() => null);
        const parsed = SendOTPInput.safeParse(json);

        if (!parsed.success) {
            return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
        }

        const { phoneNumber } = parsed.data;
        const otp = generateOTP();
        
        // In production, store OTP in Redis/cache with expiry
        // For demo, we'll return it (remove this in production!)
        const sent = await sendOTP(phoneNumber, otp);
        
        if (sent) {
            return NextResponse.json({ 
                success: true, 
                message: "OTP sent successfully",
                // Remove this in production - only for demo
                demoOTP: otp 
            });
        } else {
            return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
        }
    } catch (err: any) {
        const message = err?.message || "Internal Server Error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
