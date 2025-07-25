import { NextResponse } from "next/server";
import { getTask, updateTask, deleteTask } from "../../../../../lib/tasks";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const task = getTask(params.id);
    if (!task) {
        return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }
    return NextResponse.json(task);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const { title } = await req.json();
    updateTask(params.id, title);
    return NextResponse.json({ success: true });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    deleteTask(params.id);
    return NextResponse.json({ success: true });
}