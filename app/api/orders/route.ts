import { NextResponse } from "next/server";
import { z } from "zod";
import { connectToDatabase } from "@/lib/mongodb";
import { Order } from "@/models/Order";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const OrderInput = z.object({
    itemId: z.string().min(1),
    itemName: z.string().min(1),
    price: z.number().positive(),
    quantity: z.number().int().positive().default(1),
    customerName: z.string().min(1).max(100),
    phoneNumber: z.string().min(10).max(15),
    address: z.string().min(1).max(500),
    deliveryTime: z.string().min(1),
    notes: z.string().max(300).optional(),
});

export async function POST(request: Request) {
    try {
        const json = await request.json().catch(() => null);
        const parsed = OrderInput.safeParse(json);

        if (!parsed.success) {
            return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
        }

        await connectToDatabase();
        
        // Generate unique order ID
        const orderId = `ORD${Date.now()}${Math.floor(Math.random() * 1000)}`;
        
        const orderData = {
            ...parsed.data,
            orderId,
            otpVerified: false,
            paymentStatus: 'pending' as const,
            orderStatus: 'pending' as const,
        };

        const order = await Order.create(orderData);
        return NextResponse.json({ data: order }, { status: 201 });
    } catch (err: any) {
        const message = err?.message || "Internal Server Error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const orderId = searchParams.get("orderId");
        const phoneNumber = searchParams.get("phoneNumber");

        await connectToDatabase();

        if (orderId) {
            const order = await Order.findOne({ orderId }).lean();
            if (!order) {
                return NextResponse.json({ error: "Order not found" }, { status: 404 });
            }
            return NextResponse.json({ data: order });
        }

        if (phoneNumber) {
            const orders = await Order.find({ phoneNumber })
                .sort({ createdAt: -1 })
                .limit(10)
                .lean();
            return NextResponse.json({ data: orders });
        }

        return NextResponse.json({ error: "orderId or phoneNumber required" }, { status: 400 });
    } catch (err: any) {
        const message = err?.message || "Internal Server Error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
