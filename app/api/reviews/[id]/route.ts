import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Review } from "@/models/Review";

type Params = { params: { id: string } };

export async function DELETE(_req: Request, { params }: Params) {
  try {
    await connectToDatabase();
    await Review.findByIdAndDelete(params.id);
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const message = err?.message || "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}