import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import Donate from "@/model/donate.model";

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const { id } = await params;
        await Donate.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Donation deleted." });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Failed to delete donation." }, { status: 500 });
    }
}
