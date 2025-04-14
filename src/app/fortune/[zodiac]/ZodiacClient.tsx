// src/app/fortune/[zodiac]/ZodiacClient.tsx
"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ZodiacClient({
  zodiac,
  content,
}: {
  zodiac: string;
  content: string;
}) {
  const [fortune, setFortune] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFortune = async () => {
      try {
        const res = await fetch("/api/fortune", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sign: zodiac }),
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

    fetchFortune();
  }, [zodiac]);

  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{
        background: "linear-gradient(to bottom right, #4c1d95, #312e81)",
      }}
    >
      {/* 헤더 */}
      <Header />
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{zodiac} 운세</h1>
      <p className="mb-6">{content}</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">오늘의 AI 운세 결과</h2>

      {loading ? (
        <div className="flex items-center gap-2 text-gray-600">
          <Loader2 className="animate-spin" size={18} />
          AI 운세 불러오는 중...
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="bg-gray-100 p-4 rounded text-indigo-900 whitespace-pre-wrap leading-relaxed shadow">
          {fortune}
        </div>
      )}
    </div>

    <Footer />
    </div>
  );
}
