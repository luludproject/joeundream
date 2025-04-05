// src/app/daily/page.tsx
"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Loader2 } from "lucide-react";
import FAQ from "../components/FAQ";

const sajuFaqs = [
  {
    question: "사주 운세는 어떤 정보를 사용하나요?",
    answer: "생년월일과 태어난 시간을 기준으로 합니다.",
  },
  {
    question: "정확한 생시를 모르면 어떻게 하나요?",
    answer: "대략적인 시간으로도 해석이 가능하지만 정확도가 떨어질 수 있어요.",
  },
  {
    question: "사주는 뭐에 좋은가요?",
    answer: "인생 전반, 성격, 궁합, 진로 등 다양한 판단에 도움을 줄 수 있어요!",
  },
  { question: "무료인가요?", answer: "네! 전부 무료입니다 🙌" },
  {
    question: "사주팔자란 뭔가요?",
    answer: "사주팔자는 태어난 연월일시의 천간지지를 조합한 구조예요.",
  },
  {
    question: "운세 결과는 저장되나요?",
    answer: "아니요, 개인 정보는 절대로 저장하지 않습니다!",
  },
  {
    question: "타어인 사주도 볼 수 있나요?",
    answer: "정보만 알면 누구든 볼 수 있요!",
  },
  {
    question: "이 결과는 점쟁이랑 다른가요?",
    answer: "기계적 해석이라 조금 차이는 있지만, 핵심은 비슷합니다.",
  },
  {
    question: "사주는 바뀌지 않나요?",
    answer: "네! 태어난 시간 기준이기 때문에 평생 고정이에요.",
  },
  {
    question: "역학적인 내용도 나오나요?",
    answer: "간단한 수준에서 음양오행 기반 해석을 제공하고 있어요 🔥🌊🌳",
  },
];

export default function DailyPage() {
  const [form, setForm] = useState({
    name: "",
    gender: "여자",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    birthTime: "",
    calendarType: "양력",
  });
  const [loading, setLoading] = useState(false);
  const [fortune, setFortune] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchDailyFortune = async () => {
    setLoading(true);
    setFortune("");
    setError("");

    try {
      const res = await fetch("/api/saju", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setFortune(data.fortune);
      } else {
        setError(data.error || "운세 불러오기 실패 😢");
      }
    } catch (err) {
      setError("에러가 발생했어요 💥");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-50 text-gray-800">
      <Header />

      <main className="flex-grow p-6">
        <div className="max-w-xl mx-auto mt-10 bg-white shadow-xl rounded-xl p-6">
          <h1 className="text-3xl font-bold text-center mb-6">
            🌞 오늘의 무료 사주 운세 보기
          </h1>

          <div className="space-y-4">
            <input
              name="name"
              placeholder="이름"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="여자">여자</option>
              <option value="남자">남자</option>
            </select>
            <input
              name="birthYear"
              placeholder="태어난 년도 (예: 1995)"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              name="birthMonth"
              placeholder="태어난 월 (예: 7)"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              name="birthDay"
              placeholder="태어난 일 (예: 15)"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              name="birthTime"
              placeholder="태어난 시간 (예: 오전 10시, 14시)"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <select
              name="calendarType"
              value={form.calendarType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="양력">양력</option>
              <option value="음력">음력</option>
            </select>
          </div>

          <button
            onClick={fetchDailyFortune}
            disabled={loading}
            className="mt-6 w-full bg-orange-400 hover:bg-orange-300 text-white font-semibold py-2 rounded shadow"
          >
            {loading ? (
              <span className="flex justify-center items-center gap-2">
                <Loader2 className="animate-spin" size={18} />
                불러오는 중...
              </span>
            ) : (
              "오늘의 운세 보기 🔮"
            )}
          </button>

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

          {fortune && (
            <div className="mt-6 p-4 border bg-orange-50 rounded whitespace-pre-wrap shadow-md">
              {fortune}
            </div>
          )}
        </div>

        <p className="max-w-xl mx-auto text-sm text-gray-700 mt-10 leading-relaxed">
          오늘의 운세는 이름, 생년월일, 성별, 생시 등 개인 정보를 바탕으로, 동양
          철학과 AI사주선생의 지혜를 융합해 생성된 결과입니다. 입력한 정보는
          오직 오늘의 운세 계산을 위해서만 사용되며, 서버에 저장되지 않으니
          안심하세요 💌
          <br />
          <br />
          운세 내용은 단순히 예언이나 점괘에 그치지 않고, 오늘 하루를 조금 더
          따뜻하게 시작할 수 있도록 작은 위로와 조언을 담고 있어요. 인생의
          방향을 정해주는 나침반이라기보다는, 오늘 하루를 의미 있게 보내기 위한
          작은 힌트라고 생각해주시면 좋아요 😊
          <br />
          <br />
          삶은 늘 예측할 수 없는 방향으로 흐르지만, 그 속에서도 마음을 단단히
          다지고 긍정적인 기운을 받아들인다면 분명 멋진 하루가 기다리고 있을
          거예요! 오늘도 당신의 하루에 좋은 일이 가득하길 바라요 🌷💫
        </p>

        <FAQ faqs={sajuFaqs} />
      </main>

      <Footer />
    </div>
  );
}
