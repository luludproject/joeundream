// fortune.ts
import fetch from "node-fetch"; // 필요 시 설치: npm install node-fetch

export interface GeminiResponse {
  candidates?: {
    content?: {
      parts?: { text?: string }[];
    };
  }[];
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // .env에 꼭 넣어주세요!

export async function getFortune(sign: string): Promise<string> {
  if (!GEMINI_API_KEY) throw new Error("API 키가 없습니다! 🧨");

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const formattedToday = `${year}년 ${month.toString().padStart(2, "0")}월 ${day
    .toString()
    .padStart(2, "0")}일`;

  const prompt = `당신은 유명한 운세사주를 봐주는 철학 전문가입니다. '${sign}'띠의 사람을 위해 ${formattedToday} 오늘의 운세를 간단하고 따뜻하게 존댓말로 각 운세별로 문단을 나눠서 써주세요.언어는 한국어로 해주세요. 줄바꿈도 적절하게 해주세요. 그리고 마지막으로 소제목의 '**'는 모두 제거하고 대괄호로 표기해주세요. `;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  );

  const data = (await response.json()) as GeminiResponse;

  const fortune = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!fortune) throw new Error("운세 생성 실패 😢");

  return fortune;
}
