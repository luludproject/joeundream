import { NextRequest, NextResponse } from "next/server";
import { getFortuneCompatibility } from "../../lib/compatibility";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { person1, person2 } = body;

  if (!person1 || !person2) {
    return NextResponse.json(
      { error: "두 사람의 정보가 필요해요!" },
      { status: 400 }
    );
  }

  try {
    const result = await getFortuneCompatibility(person1, person2);
    return NextResponse.json({ result });
  } catch (e) {
    return NextResponse.json({ error: "궁합 생성 실패 😢" }, 
    { status: 500 });
  }
}
