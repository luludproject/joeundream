"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function ZodiacFortune({ zodiac }: { zodiac: string }) {
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

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-white">
        <Loader2 className="animate-spin" size={18} />
        AI 운세 불러오는 중...
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-gray-100 p-4 rounded text-indigo-900 whitespace-pre-wrap leading-relaxed shadow">
      {fortune}
    </div>
  );
}
