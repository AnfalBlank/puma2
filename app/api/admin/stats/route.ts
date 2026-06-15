import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/auth";
import { getDashboardStats } from "@/lib/analytics";

export const runtime = "nodejs";

export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(getDashboardStats());
}
