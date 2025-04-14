"use client";

import { useState, useRef } from "react";
import { Loader2, Copy, Download, Home } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    router.push(`/fortune/${selected}`);
  };

  const signs = [
    { name: "쥐띠", label: "🐭쥐띠" },
    { name: "소띠", label: "🐮소띠" },
    { name: "호랑이띠", label: "🐯호랑이띠" },
    { name: "토끼띠", label: "🐰토끼띠" },
    { name: "용띠", label: "🐲용띠" },
    { name: "뱀띠", label: "🐍뱀띠" },
    { name: "말띠", label: "🐴말띠" },
    { name: "양띠", label: "🐑양띠" },
    { name: "원숭이띠", label: "🐵원숭이띠" },
    { name: "닭띠", label: "🐔닭띠" },
    { name: "개띠", label: "🐶개띠" },
    { name: "돼지띠", label: "🐷돼지띠" },
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
              onChange={handleChange}
              className="p-2 rounded-lg text-white shadow border"
              defaultValue=""
            >
              <option value="" disabled hidden>
                선택해주세요
              </option>
              {signs.map((s) => (
                <option className="text-indigo-900" key={s.name} value={s.name}>
                  {s.label}
                </option>
              ))}
            </select>
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

        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md text-gray-800">
          <h1 className="text-2xl font-bold mb-6">띠별 운세란 무엇일까요?</h1>
          <p className="mb-4">
            띠별 운세는 한국, 중국, 일본 등 동아시아 문화권에서 전통적으로
            활용해 온 운세 방식 중 하나입니다. ‘띠’는 출생 연도를 기준으로
            나뉘며, 십이지신(十二支神)이라 불리는 열두 동물에 따라 운세를
            해석합니다. 즉, 태어난 해에 따라 ‘쥐띠’, ‘소띠’, ‘호랑이띠’ 등으로
            분류되고, 각 띠마다 해마다 영향을 받는 기운이 다르다고 해석합니다.
          </p>
          <p className="mb-4">
            띠별 운세는 개인의 생년월일시를 정밀하게 분석하는 사주와 달리,
            비교적 대중적이고 쉽게 접근할 수 있다는 점에서 많은 분들이 일상
            속에서 참고하고 있습니다. 출생연도만 알아도 자신의 띠를 알 수 있기
            때문에 오늘의 운세, 주간 운세, 연간 총운 등을 간편하게 확인할 수
            있습니다.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            띠별 운세는 어떻게 해석하나요?
          </h2>
          <p className="mb-4">
            띠별 운세는 단순히 동물 이름에 기반한 재미 요소가 아닌, 각각의 띠가
            가진 특성과 그 해의 흐름(세운, 연운 등)을 조합해 해석합니다. 예를
            들어 어떤 해에는 ‘쥐띠’에게 금전운이 좋다고 하고, 다른 해에는
            ‘호랑이띠’에게 연애운이 강해지는 등, 해마다 에너지 흐름이 달라지게
            됩니다.
          </p>
          <p className="mb-4">
            또한 띠끼리의 궁합도 중요한 요소입니다. 예를 들어 ‘용띠’와 ‘쥐띠’는
            궁합이 좋은 편으로 알려져 있으며, ‘닭띠’와 ‘토끼띠’는 충돌이 있을 수
            있다고 해석되기도 합니다. 띠끼리의 상생과 상극 관계도 참고하면 더
            입체적인 운세 해석이 가능합니다.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            띠별 운세, 이렇게 활용해보세요
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              오늘이나 이번 주 중요한 일이 있다면 자신의 띠 운세를 먼저
              확인해보세요.
            </li>
            <li>
              연애, 이직, 투자 등 큰 결정을 앞두고 있다면 띠별 흐름을 참고해볼
              수 있습니다.
            </li>
            <li>
              가족이나 연인의 띠 운세도 함께 확인해서 서로의 컨디션을 이해하는
              데 도움을 받을 수 있어요.
            </li>
            <li>
              띠별 궁합을 통해 사람 간의 관계 흐름을 이해하고 갈등을 줄이는 데
              활용해보세요.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            띠별 운세, 이렇게만 보지 마세요!
          </h2>
          <p className="mb-4">
            운세는 어디까지나 참고용입니다. ‘오늘 운세가 안 좋다’고 해서 하루를
            불안하게 시작하기보다는, ‘이런 일이 있을 수 있으니 조금 더
            조심하자’는 마음가짐으로 접근하는 것이 좋습니다. 또한 같은 띠라고
            해도 생년월일시나 환경, 개인의 성향에 따라 결과는 달라질 수
            있으므로, 맹신보다는 가벼운 가이드로 활용해보세요.
          </p>
          <p className="mb-8">
            특히 AI 기반 운세는 최신 통계적 모델을 기반으로 하면서도 전통 해석을
            반영하고 있어, 보다 객관적이고 현실적인 조언을 받을 수 있습니다.
            매일 아침 자신의 띠 운세를 확인하며 하루의 마음가짐을 다잡아보는
            것도 좋은 습관이 될 수 있습니다.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            띠별 운세를 위한 간단한 표
          </h2>
          <table className="table-auto w-full border border-gray-300 text-center text-sm mb-6">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border border-gray-300 px-2 py-2">띠</th>
                <th className="border border-gray-300 px-2 py-2">해당 연도</th>
                <th className="border border-gray-300 px-2 py-2">성향</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-2">쥐띠</td>
                <td className="border border-gray-300 px-2 py-2">
                  1984, 1996, 2008, 2020
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  총명하고 빠른 판단
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-2 py-2">소띠</td>
                <td className="border border-gray-300 px-2 py-2">
                  1985, 1997, 2009, 2021
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  성실하고 책임감 강함
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-2">호랑이띠</td>
                <td className="border border-gray-300 px-2 py-2">
                  1986, 1998, 2010, 2022
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  용기 있고 리더십 강함
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm text-gray-500">
            ※ 띠별 연도는 양력 기준이며, 음력 설 이전 출생자의 경우 이전 해 띠로
            해석할 수 있습니다.
          </p>
        </div>

        <FAQ faqs={fortuneFaqs} />
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}
