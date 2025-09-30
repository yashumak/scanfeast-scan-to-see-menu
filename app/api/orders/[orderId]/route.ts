import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Order } from "@/models/Order";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Params = { params: Promise<{ orderId: string }> };

export async function GET(_req: Request, { params }: Params) {
    try {
        const { orderId } = await params;
        await connectToDatabase();
        
        const order = await Order.findOne({ orderId }).lean();
        if (!order) {
            return NextResponse.json({ error: "Order not found" }, { status: 404 });
        }
        
        return NextResponse.json({ data: order });
    } catch (err: any) {
        const message = err?.message || "Internal Server Error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function PATCH(request: Request, { params }: Params) {
    try {
        const { orderId } = await params;
        const body = await request.json().catch(() => ({}));
        
        await connectToDatabase();
        
        const allowedUpdates = ['paymentStatus', 'paymentId', 'razorpayOrderId', 'orderStatus', 'otpVerified'];
        const updates: any = {};
        
        for (const field of allowedUpdates) {
            if (body[field] !== undefined) {
                updates[field] = body[field];
            }
        }
        
        const order = await Order.findOneAndUpdate(
            { orderId },
            updates,
            { new: true, runValidators: true }
        ).lean();
        
        if (!order) {
            return NextResponse.json({ error: "Order not found" }, { status: 404 });
        }
        
        return NextResponse.json({ data: order });
    } catch (err: any) {
        const message = err?.message || "Internal Server Error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
