// src/app/api/fortune/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getFortune } from "../../lib/fortune";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { sign } = body;

  if (!sign) {
    return NextResponse.json({ error: "띠 정보가 필요해요!" }, { status: 400 });
  }

  try {
    const fortune = await getFortune(sign);
    return NextResponse.json({ fortune });
  } catch (e) {
    return NextResponse.json({ error: "운세 생성 실패 😢" }, { status: 500 });
  }
}
