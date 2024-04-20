import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type Data = {
  name: string;
};

export async function GET(req: NextRequest) {
  // res.status(200).json({ name: "Agent Friday" });
  return NextResponse.json({ name: "AGENT Friday" });
}

export async function POST(req: NextRequest) {
  // res.status(200).json({ name: "Agent Friday" });
  return NextResponse.json({ name: "agent friday" });
}
