import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyOTP } from "@/lib/otp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const VerifyOTPInput = z.object({
    phoneNumber: z.string().min(10).max(15),
    otp: z.string().length(6),
});

export async function POST(request: Request) {
    try {
        const json = await request.json().catch(() => null);
        const parsed = VerifyOTPInput.safeParse(json);

        if (!parsed.success) {
            return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
        }

        const { phoneNumber, otp } = parsed.data;
        
        // In production, get stored OTP from Redis/cache
        // For demo, we'll accept any 6-digit OTP
        const isValid = verifyOTP(phoneNumber, otp, "123456");
        
        if (isValid) {
            return NextResponse.json({ 
                success: true, 
                message: "OTP verified successfully" 
            });
        } else {
            return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
        }
    } catch (err: any) {
        const message = err?.message || "Internal Server Error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
