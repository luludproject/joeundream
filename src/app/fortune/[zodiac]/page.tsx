// src/app/fortune/[zodiac]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { zodiacInfo } from "@/app/lib/zodiacData";
import { zodiacMeta } from "@/app/lib/zodiacMeta";
import ZodiacClient from "./ZodiacClient"; // 👈 클라이언트 컴포넌트 import

type Props = {
  params: { zodiac: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const zodiac = decodeURIComponent(params.zodiac);
  const meta = zodiacMeta[zodiac];
  if (!meta) return notFound();

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  };
}

export default function ZodiacPage({ params }: Props) {
  const decodedZodiac = decodeURIComponent(params.zodiac);
  const content = zodiacInfo[decodedZodiac];
  if (!content) return notFound();

  return <ZodiacClient zodiac={decodedZodiac} content={content} />;
}
