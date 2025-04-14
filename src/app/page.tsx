"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import fortuneImage from "/public/banner_img.png"; // 퍼블릭 폴더에 이미지 하나 넣어두세요
import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import React from "react";

const reviews = [
  {
    text: "요즘 힘들었는데, 운세 보고 마음이 편해졌어요.",
    author: "직장인 이모씨",
  },
  { text: "하루 운세가 맞아떨어져서 깜짝 놀랐어요!", author: "대학생 정모씨" },
  { text: "연애운 보다가 소개팅 성공했어요. 감사합니다.", author: "박모씨" },
  {
    text: "이직 고민 중이었는데 사주 풀이가 큰 도움이 되었어요.",
    author: "프리랜서 김모씨",
  },
  {
    text: "신기하게도 운세에서 조심하라더니 진짜 조심할 일이 있었어요!",
    author: "주부 최모씨",
  },
  {
    text: "매일 보는 오늘의 운세 덕분에 루틴이 생겼어요.",
    author: "직장인 남모씨",
  },
];
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const homeFaqs = [
  {
    question: "AI 운세는 어떻게 작동하나요?",
    answer:
      "저희 AI는 생년월일 등 입력 정보를 바탕으로 다양한 전통 운세 해석 알고리즘을 활용해 결과를 제공합니다!",
  },
  { question: "무료인가요?", answer: "전 기능 모두 무료입니다 😊" },
  {
    question: "개인정보는 안전한가요?",
    answer: "물론이죠! 저희는 어떤 정보도 저장하지 않아요.",
  },
  {
    question: "모바일에서도 사용 가능한가요?",
    answer: "네~ 모바일, 태블릿, PC 모두 문제없이 사용 가능해요!",
  },
  {
    question: "결제 상품은 없나요?",
    answer: "전혀 없어요! 대신 후원은 사랑입니다(광고도...) 💖",
  },
  {
    question: "운세 결과는 신뢰할 수 있나요?",
    answer: "진짜 전문가들의 지식과 데이터를 기반으로 만들어졌어요",
  },
  {
    question: "궁합 운세는 없나요?",
    answer: "앗! 준비 중이에요~ 기대해주세요 ⭐",
  },
  {
    question: "언제 업데이트되나요?",
    answer: "매일 아침 자동 업데이트됩니다!",
  },
  {
    question: "카카오톡으로 공유할 수 있나요?",
    answer: "역시 기능 준비 중이에요! 조금만 기다려주세요",
  },
  {
    question: "사이트는 누가 만들었나요?",
    answer: "AI와 사람의 협업으로 만든 똑똑한 운세 사이트랍니다 🔮",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4000); // 4초마다 자동 슬라이드
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-indigo-700 text-white">
      {/* 🧭 헤더 메뉴 */}
      <Header />

      {/* ✨ 메인 콘텐츠 */}
      <main className="p-8 max-w-3xl mx-auto text-center space-y-12">
        <h1 className="text-4xl font-bold">✨오늘의 무료운세보기 ✨</h1>
        <p className="text-indigo-200 text-lg">
          AI사주선생이 전해주는 당신만을 위한 하루의 이야기 💌
        </p>

        {/* 🔗 운세 버튼 */}
        <section className="space-y-6 flex flex-col ">
          <Link href="/fortune">
            <div className="bg-yellow-500 hover:bg-yellow-400 text-indigo-900 py-4 px-6 rounded-xl font-semibold transition shadow-lg">
              [무료] 띠로 보는 오늘의 운세 🐉
            </div>
          </Link>
          <Link href="/saju">
            <div className="bg-yellow-500 hover:bg-yellow-400 text-indigo-900 py-4 px-6 rounded-xl font-semibold transition shadow-lg">
              [무료] 사주로 보는 오늘의 운세 ✨
            </div>
          </Link>
          <Link href="/#">
            <div className="bg-yellow-500 hover:bg-yellow-400 text-indigo-900 py-4 px-6 rounded-xl font-semibold transition shadow-lg">
              사주로 보는 궁합 💕[궁합 서비스는 2025년 5월 중 오픈 예정입니다.]
            </div>
          </Link>
        </section>

        {/* 📸 감성 이미지 */}
        <div className="mt-10 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={fortuneImage}
            alt="운세이미지"
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* 📖 운세 소개글 */}
        <article className="text-left mt-16 bg-white text-indigo-900 p-6 rounded-xl shadow-lg space-y-4">
          <h2 className="text-2xl font-bold mb-2 ">운세란 무엇일까요? 🔮</h2>
          <p>
            운세는 단순한 미래 예측이 아니에요. 사실은 마음을 돌보는 ‘작은
            루틴’이기도 하답니다. 바쁜 일상 속에서 운세를 읽으며 오늘의 나를
            돌아보는 그 시간, 그게 바로 ‘힐링’이죠.
          </p>
          <p>
            운세는 단순히 숫자나 알고리즘이 아니에요. 철학자의 따뜻한 시선과
            위로의 말들이 담긴, ‘하루의 가이드북’ 같은 존재에요. 복잡한 세상 속,
            나를 위한 방향표 하나쯤은 있어야 하지 않을까요?
          </p>
          <p>
            운세가 좋으면 기분이 좋고, 운세가 안 좋으면 마음을 다잡게 되죠.
            결과보다 중요한 건 ‘어떻게 살아가느냐’이니까요. 😊
          </p>
          <p>
            자~ 오늘도 AI사주선생이 준비한 운세 한 줄 읽고, 더 멋진 하루를
            살아가보는 건 어때요? 🌈🌞
          </p>
        </article>

        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md text-gray-800">
          <h1 className="text-2xl font-bold mb-6">
            사주와 운세, 알고 보면 인생의 작은 나침반?
          </h1>

          <p className="mb-4">
            안녕하세요! 운세 좋아하시나요? 저는 사실 어릴 땐 “운세가 뭐야”
            했지만, 연애, 이직, 혹은 중요한 결정을 앞두고 있을 때는 괜히 한 번쯤
            사주나 운세를 보고 싶어지더라고요.
          </p>
          <p className="mb-4">
            요즘은 단순히 재미로 보는 분들도 많지만, 자신의 흐름이나 방향성을
            찾기 위해 참고하시는 분들도 많아졌습니다.
          </p>
          <p className="mb-8">
            그래서 이번에는 사주와 운세가 무엇인지, 왜 많은 사람들이 관심을
            가지는지 소개해 드리려고 합니다.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            사주(四柱)란 무엇일까?
          </h2>
          <p className="mb-4">
            "사주"는 태어난 연(年), 월(月), 일(日), 시(時) 네 가지 기둥을
            의미합니다. 이 네 가지 기둥을 통해 한 사람의 기질, 운명, 흐름, 궁합
            등을 풀어내는 것이 바로 사주팔자입니다.
          </p>
          <p className="mb-4">
            음양오행 이론을 바탕으로, 사람마다 타고난 기운과 성향이 다르다고
            보고 이를 통해 성격, 직업운, 연애운, 건강, 재물운 등을 예측합니다.
          </p>
          <p className="mb-8">
            최근에는 AI 기술이 적용되어 생년월일시만 입력하면 손쉽게 사주 풀이가
            가능한 시대가 되었습니다.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            운세는 또 무엇이 다를까?
          </h2>
          <p className="mb-4">
            운세는 사주보다 일상적인 흐름에 초점을 맞추는 개념입니다. 오늘의
            운세, 이번 달 운세, 올해의 총운 등 단기적인 기간에 대해
            이야기합니다.
          </p>
          <p className="mb-4">
            예를 들어 "오늘은 새로운 사람을 만나기 좋은 날입니다"와 같은 조언을
            통해 긍정적인 마인드를 갖거나 실수를 예방하는 데 도움을 줄 수
            있습니다.
          </p>
          <p className="mb-8">
            운세는 자기 암시나 마인드 컨트롤 측면에서도 의미가 있다고 합니다.
            기분 좋은 운세를 보면 하루가 즐겁고, 조심하라는 운세는 신중한 선택을
            이끌 수 있습니다.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            사주 vs 운세? 이렇게 정리해볼게요!
          </h2>
          <table className="table-auto w-full border border-gray-300 text-center text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border border-gray-300 px-4 py-2">구분</th>
                <th className="border border-gray-300 px-4 py-2">사주</th>
                <th className="border border-gray-300 px-4 py-2">운세</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">기간</td>
                <td className="border border-gray-300 px-4 py-2">평생 흐름</td>
                <td className="border border-gray-300 px-4 py-2">
                  하루/월/연 단위 흐름
                </td>
              </tr>
              <tr className="bg-gray-50 text-gray-700">
                <td className="border border-gray-300 px-4 py-2">기준</td>
                <td className="border border-gray-300 px-4 py-2">
                  태어난 연월일시
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  시간의 흐름 & 기운
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">활용</td>
                <td className="border border-gray-300 px-4 py-2">
                  성격, 직업, 궁합 등
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  오늘의 조언, 기분전환 등
                </td>
              </tr>
              <tr className="bg-gray-50 text-gray-700">
                <td className="border border-gray-300 px-4 py-2">풀이 방식</td>
                <td className="border border-gray-300 px-4 py-2">
                  오행, 십간십이지 등 깊이 있는 해석
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  간단한 운의 흐름
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            운세, 재미로만 보기엔 아까운 이유
          </h2>
          <p className="mb-4">
            운세는 단순한 재미를 넘어서, 마음을 다독이거나 한 걸음 물러서서
            생각할 수 있게 해주는 도구가 되기도 합니다.
          </p>
          <p className="mb-4">
            바쁘고 힘든 일상 속에서 운세 하나로 하루의 컨디션을 체크하거나
            스스로를 돌아볼 수 있다면 충분히 의미 있는 활용이라고 생각합니다.
          </p>
          <p className="mb-8">
            최근 AI 운세 시스템이 발전하면서 사주 기반의 보다 정교한 운세 풀이도
            가능해졌습니다. 궁합, 직업운, 연애운 등 다양한 분야에 활용될 수
            있습니다.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">마무리하면서</h2>
          <p className="mb-4">
            사주와 운세는 결국, 자신의 삶을 더 이해하고 더 나은 방향으로 가기
            위한 작은 힌트일 뿐입니다.
          </p>
          <p className="mb-4">
            맹신보다는 참고자료로 받아들이면서 스스로를 더 잘 돌보고 성장하는 데
            활용하신다면 훌륭한 도구가 될 수 있습니다.
          </p>
          <p>
            저희는 누구나 부담 없이 이용할 수 있는 무료 AI 운세 서비스를
            제공하고 있습니다. 매일 나만의 운세를 확인하며 하루를 시작해보세요.
          </p>
        </div>

        {/* 리뷰 */}
        <div className="max-w-xl mx-auto mt-10">
          <h2 className="text-xl font-semibold mb-4 text-center">
            이용자 후기
          </h2>
          <div className="relative h-48 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full flex items-center justify-center"
              >
                <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center w-full">
                  <p className="text-lg text-gray-700 mb-3">
                    "{reviews[index].text}"
                  </p>
                  <p className="text-sm text-gray-500">
                    {reviews[index].author}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={() => paginate(-1)}
              className="text-sm px-3 py-1 border rounded hover:bg-gray-400"
            >
              이전
            </button>
            <button
              onClick={() => paginate(1)}
              className="text-sm px-3 py-1 border rounded hover:bg-gray-400"
            >
              다음
            </button>
          </div>
        </div>

        {/* 📚 FAQ */}
        <FAQ faqs={homeFaqs} />
      </main>
      <Footer />
    </div>
  );
}
