// "use client";

// import { useState } from "react";
// import { Loader2, Copy, Share2, Home } from "lucide-react";
// import Link from "next/link";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { motion } from "framer-motion";

// const defaultInfo = {
//   name: "",
//   gender: "여자",
//   year: "",
//   month: "",
//   day: "",
//   time: "",
//   calendar: "양력",
// };

// export default function CompatibilityPage() {
//   const [person1, setPerson1] = useState({ ...defaultInfo });
//   const [person2, setPerson2] = useState({ ...defaultInfo });
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const [error, setError] = useState("");

//   const updateInfo = (setter: any, field: string, value: string) => {
//     setter((prev: any) => ({ ...prev, [field]: value }));
//   };

//   const fetchCompatibility = async () => {
//     setLoading(true);
//     setCopied(false);
//     setError("");
//     setResult("");

//     try {
//       const res = await fetch("/api/compatibility", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ person1, person2 }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         setResult(data.result);
//       } else {
//         setError(data.error || "궁합 분석 실패 🥲");
//       }
//     } catch (e) {
//       setError("에러 발생! 다시 시도해주세요 💥");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(result);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const shareResult = () => {
//     if (navigator.share) {
//       navigator
//         .share({
//           title: "우리 궁합 운세 💞",
//           text: result,
//         })
//         .catch((e) => console.log("공유 취소됨", e));
//     } else {
//       alert("이 브라우저는 공유를 지원하지 않아요 😢");
//     }
//   };

//   const renderForm = (title: string, info: any, setInfo: any) => (
//     <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md mb-6 text-indigo-900">
//       <h2 className="font-bold mb-2">{title}</h2>
//       <div className="grid grid-cols-2 gap-2">
//         <input
//           placeholder="이름"
//           value={info.name}
//           onChange={(e) => updateInfo(setInfo, "name", e.target.value)}
//           className="p-2 rounded"
//         />
//         <select
//           value={info.gender}
//           onChange={(e) => updateInfo(setInfo, "gender", e.target.value)}
//           className="p-2 rounded"
//         >
//           <option>남자</option>
//           <option>여자</option>
//         </select>
//         <input
//           placeholder="출생 연도 (예: 1994)"
//           value={info.year}
//           onChange={(e) => updateInfo(setInfo, "year", e.target.value)}
//           className="p-2 rounded"
//         />
//         <input
//           placeholder="출생 월"
//           value={info.month}
//           onChange={(e) => updateInfo(setInfo, "month", e.target.value)}
//           className="p-2 rounded"
//         />
//         <input
//           placeholder="출생 일"
//           value={info.day}
//           onChange={(e) => updateInfo(setInfo, "day", e.target.value)}
//           className="p-2 rounded"
//         />
//         <input
//           placeholder="태어난 시간 (예: 13시)"
//           value={info.time}
//           onChange={(e) => updateInfo(setInfo, "time", e.target.value)}
//           className="p-2 rounded"
//         />
//         <select
//           value={info.calendar}
//           onChange={(e) => updateInfo(setInfo, "calendar", e.target.value)}
//           className="p-2 rounded"
//         >
//           <option>양력</option>
//           <option>음력</option>
//         </select>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-200 to-rose-300 text-indigo-900">
//       <Header />

//       <main className="flex-grow px-4 py-10">
//         <h1 className="text-3xl font-bold text-center mb-6">
//           💘 무료 궁합 보기
//         </h1>

//         <div className="max-w-xl mx-auto">
//           {renderForm("✨ 첫 번째 사람 정보", person1, setPerson1)}
//           {renderForm("✨ 두 번째 사람 정보", person2, setPerson2)}

//           <button
//             onClick={fetchCompatibility}
//             disabled={loading}
//             className="w-full bg-white text-pink-600 font-semibold py-2 rounded-lg shadow hover:bg-pink-100 transition"
//           >
//             {loading ? (
//               <span className="flex items-center justify-center gap-2">
//                 <Loader2 className="animate-spin" size={16} />
//                 궁합 보는 중...
//               </span>
//             ) : (
//               "궁합 보기 💑"
//             )}
//           </button>

//           {error && <p className="text-red-600 text-center mt-4">{error}</p>}

//           {result && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-white text-indigo-900 p-6 mt-6 rounded-xl shadow-xl whitespace-pre-wrap leading-relaxed"
//             >
//               {result}
//               <div className="flex gap-3 mt-4">
//                 <button
//                   onClick={copyToClipboard}
//                   className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-2 rounded hover:bg-indigo-200 transition text-sm"
//                 >
//                   <Copy size={16} />
//                   {copied ? "복사됨!" : "복사하기"}
//                 </button>
//                 <button
//                   onClick={shareResult}
//                   className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-2 rounded hover:bg-indigo-200 transition text-sm"
//                 >
//                   <Share2 size={16} />
//                   공유하기
//                 </button>
//                 <Link
//                   href="/"
//                   className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-2 rounded hover:bg-indigo-200 transition text-sm"
//                 >
//                   <Home size={16} />
//                   홈으로
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

const page = () => {
  return <div>준비중</div>;
};

export default page;
