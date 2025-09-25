import { NextResponse } from "next/server";
import { z } from "zod";
import { connectToDatabase } from "@/lib/mongodb";
import { Review } from "@/models/Review";

const ReviewInput = z.object({
    itemId: z.string().min(1),
    userName: z.string().min(1).max(80),
    rating: z.number().int().min(1).max(5),
    comment: z.string().min(1).max(1000),
});

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const itemId = searchParams.get("itemId");
        const page = Number(searchParams.get("page") || 1);
        const pageSize = Math.min(Number(searchParams.get("pageSize") || 10), 50);

        if (!itemId) {
            return NextResponse.json({ error: "itemId is required" }, { status: 400 });
        }

        await connectToDatabase();

        const [items, total] = await Promise.all([
            Review.find({ itemId })
                .sort({ createdAt: -1 })
                .skip((page - 1) * pageSize)
                .limit(pageSize)
                .lean(),
            Review.countDocuments({ itemId }),
        ]);

        return NextResponse.json({
            data: items,
            page,
            pageSize,
            total,
            totalPages: Math.ceil(total / pageSize),
        });
    } catch (err: any) {
        const message = err?.message || "Internal Server Error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const json = await request.json().catch(() => null);
        const parsed = ReviewInput.safeParse(json);

        if (!parsed.success) {
            return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
        }

        await connectToDatabase();
        const created = await Review.create(parsed.data);
        return NextResponse.json({ data: created }, { status: 201 });
    } catch (err: any) {
        const message = err?.message || "Internal Server Error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}