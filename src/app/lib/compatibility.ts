import fetch from "node-fetch";
import { GeminiResponse } from "./fortune";

interface CompatibilityRequest {
  name: string;
  gender: string;
  year: string;
  month: string;
  day: string;
  time: string;
  calendar: string;
}

export async function getFortuneCompatibility(
  person1: CompatibilityRequest,
  person2: CompatibilityRequest
): Promise<string> {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) throw new Error("API 키가 없습니다! 🧨");

  const prompt = `
당신은 전통적인 동양 사주 궁합 전문가입니다.
다음 두 사람의 정보를 바탕으로 성격, 궁합, 조화점, 주의사항, 궁합 점수 등을 한국어로 존댓말로 따뜻하게 설명해주세요.
소제목은 [ ] 대괄호로 해주세요.

[첫 번째 사람]
이름: ${person1.name}
성별: ${person1.gender}
생년월일: ${person1.year}년 ${person1.month}월 ${person1.day}일
출생 시간: ${person1.time}
음력/양력: ${person1.calendar}

[두 번째 사람]
이름: ${person2.name}
성별: ${person2.gender}
생년월일: ${person2.year}년 ${person2.month}월 ${person2.day}일
출생 시간: ${person2.time}
음력/양력: ${person2.calendar}
`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-pro:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      }),
    }
  );

  const data = (await response.json()) as GeminiResponse;
  const result = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!result) throw new Error("운세 생성 실패 😢");

  return result;
}
