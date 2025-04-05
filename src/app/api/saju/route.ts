// src/app/api/saju/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getDailyFortune } from "@/app/lib/saju";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    name,
    gender,
    birthYear,
    birthMonth,
    birthDay,
    birthTime,
    calendarType,
  } = body;

  if (
    !name ||
    !gender ||
    !birthYear ||
    !birthMonth ||
    !birthDay ||
    !birthTime ||
    !calendarType
  ) {
    return NextResponse.json(
      { error: "모든 정보를 입력해주세요!" },
      { status: 400 }
    );
  }

  try {
    const fortune = await getDailyFortune({
      name,
      gender,
      birthYear,
      birthMonth,
      birthDay,
      birthTime,
      calendarType,
    });
    return NextResponse.json({ fortune });
  } catch (error) {
    console.error("운세 생성 에러:", error);
    return NextResponse.json({ error: "운세 생성 실패 😢" }, { status: 500 });
  }
}
