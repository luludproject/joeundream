// src/app/lib/saju.ts
import fetch from "node-fetch";

interface GeminiResponse {
  candidates?: {
    content?: {
      parts?: { text?: string }[];
    };
  }[];
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function getDailyFortune({
  name,
  gender,
  birthYear,
  birthMonth,
  birthDay,
  birthTime,
  calendarType,
}: {
  name: string;
  gender: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  birthTime: string;
  calendarType: string;
}): Promise<string> {
  if (!GEMINI_API_KEY) throw new Error("API 키가 없습니다! 🔑");

  const today = new Date();
  const formattedToday = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  const prompt = `
당신은 한국의 사주 명리학 전문가입니다.
아래 정보는 한 사용자의 생년월일 정보입니다:

- 이름: ${name}
- 성별: ${gender}
- 생년월일: ${birthYear}년 ${birthMonth}월 ${birthDay}일 (${calendarType})
- 태어난 시간: ${birthTime}

오늘은 ${formattedToday}입니다.

이 정보를 기반으로, 오늘 하루를 위한 진심어린 운세를 작성해주세요.
- 한국어로 작성해주세요.
- 존댓말을 사용해주세요.
- 문단을 나눠서 보기 좋게 해주세요.
- 각 소제목은 '**'는 모두 제거한 후 [소제목] 형식으로 적어주세요.
- 마무리에는 따뜻한 응원의 말도 잊지 마세요 💕`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      }),
    }
  );

  const data = (await response.json()) as GeminiResponse;
  const fortune = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!fortune) throw new Error("운세 생성 실패 😢");

  return fortune;
}
