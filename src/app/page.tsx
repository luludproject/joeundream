import Link from "next/link";
import Image from "next/image";
import fortuneImage from "/public/banner_img.png"; // 퍼블릭 폴더에 이미지 하나 넣어두세요
import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

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
              사주로 보는 궁합 💕[준비중]
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

        {/* 📚 FAQ */}
        <FAQ faqs={homeFaqs} />
      </main>
      <Footer />
    </div>
  );
}
