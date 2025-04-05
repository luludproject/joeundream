"use client";

import { useState, useRef } from "react";
import { Loader2, Copy, Download, Home } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const fortuneFaqs = [
  {
    question: "띠는 변하지 않나요?",
    answer: "띠는 출생 연도에 따라 평생 동일합니다!",
  },
  {
    question: "오늘의 운세는 자정마다 바뀌나요?",
    answer: "네, 매일 00시에 자동으로 리프레시돼요!",
  },
  {
    question: "띠운세는 매일 확인할 수 있나요?",
    answer: "물론이죠~ 매일 새로운 운세를 제공해요 😊",
  },
  {
    question: "운세는 얼마나 신뢰할 수 있나요?",
    answer: "AI가 분석한 데이터 기반으로 작성되어 꽤 정확하답니다!",
  },
  { question: "복채는 없나요?", answer: "없어요~ 대신 후원은 환영이에요" },
  {
    question: "결혼이나 직장운도 알 수 있나요?",
    answer: "띠별 요약 운세에 포함되어 있어요!",
  },
  {
    question: "특정 띠는 더 좋은 해가 있나요?",
    answer: "해마다 다르지만, 그런 경향은 있어요~ 운세로 확인해보세요!",
  },
  {
    question: "아이의 띠운세도 볼 수 있나요?",
    answer: "그럼요, 누구든 볼 수 있어요 👶",
  },
];

export default function FortunePage() {
  const signs = [
    { name: "쥐", emoji: "🐭" },
    { name: "소", emoji: "🐮" },
    { name: "호랑이", emoji: "🐯" },
    { name: "토끼", emoji: "🐰" },
    { name: "용", emoji: "🐲" },
    { name: "뱀", emoji: "🐍" },
    { name: "말", emoji: "🐴" },
    { name: "양", emoji: "🐑" },
    { name: "원숭이", emoji: "🐵" },
    { name: "닭", emoji: "🐔" },
    { name: "개", emoji: "🐶" },
    { name: "돼지", emoji: "🐷" },
  ];

  const [sign, setSign] = useState("쥐");
  const [fortune, setFortune] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const resultRef = useRef<HTMLDivElement>(null);

  const fetchFortune = async () => {
    setLoading(true);
    setError("");
    setFortune("");
    setCopied(false);

    try {
      const res = await fetch("/api/fortune", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sign }),
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fortune);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{
        background: "linear-gradient(to bottom right, #4c1d95, #312e81)",
      }}
    >
      {/* 헤더 */}
      <Header />

      {/* 콘텐츠 */}
      <main className="flex-grow p-6">
        <div className="max-w-2xl mx-auto mt-10">
          <h1 className="text-3xl font-bold mb-6 text-center">
            🔮 띠별 오늘의 무료 운세
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <label htmlFor="sign" className="text-lg font-medium">
              띠를 선택하세요:
            </label>
            <select
              id="sign"
              value={sign}
              onChange={(e) => setSign(e.target.value)}
              className="p-2 rounded-lg text-white shadow"
            >
              {signs.map((s) => (
                <option className="text-indigo-900" key={s.name} value={s.name}>
                  {s.emoji} {s.name}띠
                </option>
              ))}
            </select>

            <button
              onClick={fetchFortune}
              disabled={loading}
              className="bg-yellow-400 text-indigo-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition shadow-lg"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="animate-spin" size={18} />
                  불러오는 중...
                </span>
              ) : (
                "운세 보기 🔍"
              )}
            </button>
          </div>

          {/* 운세 출력 */}
          {error && (
            <p className="text-red-300 text-center font-medium mt-4">{error}</p>
          )}

          {fortune && (
            <motion.div
              ref={resultRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white text-indigo-900 p-6 mt-6 rounded-xl shadow-xl whitespace-pre-wrap leading-relaxed"
            >
              {fortune}

              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 text-sm bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg hover:bg-indigo-200 transition"
                >
                  <Copy size={16} />
                  {copied ? "복사됨!" : "복사하기"}
                </button>

                <Link
                  href="/"
                  className="flex items-center gap-2 text-sm bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg hover:bg-indigo-200 transition"
                >
                  <Home size={16} />
                  홈으로
                </Link>
              </div>
            </motion.div>
          )}
        </div>

        <p className="max-w-xl mx-auto text-sm text-gray-300 mt-10 leading-relaxed">
          띠별 운세는 우리 전통에서 내려오는 <b>십이간지(十二間支)</b>, 즉 열두
          띠에 따라 운세를 해석하는 방식이에요 🐭🐮🐯 태어난 해의 띠를 기준으로
          하여 각각의 띠가 가진 성격, 성향, 그리고 그 해의 흐름에 따라 오늘
          하루에 어떤 기운이 들어오는지, 어떤 점을 조심하면 좋을지 알려주는
          거죠~
          <br />
          <br />
          예를 들어 '말띠'는 활동적이고 열정적인 성향이 강하다고 알려져 있는데,
          이런 특징과 오늘의 기운이 어떻게 어우러지는지를 바탕으로 운세가
          만들어져요! 그렇기 때문에 같은 날이라도, 각 띠마다 전혀 다른 운세가
          나올 수 있답니다 💫
          <br />
          <br />
          운세는 절대적인 정답보다는, 오늘 하루를 조금 더 기분 좋게 시작할 수
          있는 작고 사소한 힌트라고 생각해주세요 😊 좋은 날엔 더 큰 용기를! 살짝
          흐린 날엔 조심할 점을 알려주는… 마치 작은 하루의 길잡이 같은
          존재랄까요?
          <br />
          <br />
          오늘도 띠별 무료운세를 통해 나만의 긍정 에너지를 충전해보세요! 작은
          문장 하나가, 하루를 반짝이게 만들어줄지도 몰라요 🌟
        </p>

        <FAQ faqs={fortuneFaqs} />
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}
