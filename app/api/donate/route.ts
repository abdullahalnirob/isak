import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import Donate from "@/model/donate.model";

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const email = searchParams.get("email");
        const filter = email ? { email } : {};
        const donations = await Donate.find(filter).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: donations });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Failed to fetch donations." }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const body = await req.json();

        const donation = await Donate.create(body);

        return NextResponse.json(
            {
                success: true,
                message: "Donation created successfully.",
                data: donation,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to create donation.",
            },
            { status: 500 }
        );
    }
}