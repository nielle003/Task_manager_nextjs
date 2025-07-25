import { NextResponse } from "next/server";
import { getTasks, addTask } from "../../../../lib/tasks";

export async function GET() {
    return NextResponse.json(getTasks());
}

export async function POST(request: Request) {
    const { title } = await request.json();
    addTask(title);
    return NextResponse.json({ success: true });
}