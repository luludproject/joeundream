export const metadata = {
  title: "무료 사주 운세, 사주팔자 풀이 | AI사주선생",
  description:
    "무료 사주풀이, 인생운세, 오늘의 사주까지! AI사주선생에서 쉽게 확인하는 나만의 사주 운세 🔮",
  keywords: [
    "무료운세",
    "무료운세보기",
    "무료운세사이트",
    "2025년무료운세",
    "오늘의무료운세",
    "오늘무료운세",
    "무료사주",
    "무료사주풀이",
    "무료사주사이트",
    "인터넷무료사주",
    "무료사주팔자",
    "오늘에띠운세",
    "띠별오늘의운세",
    "띠별 운세",
    "2025 띠운세",
    "오늘의 띠별 운세",
    "AI 운세",
    "운세 사이트 추천",
  ],

  authors: [{ name: "AI사주선생", url: "https://joeundream.com/fortune" }],
  creator: "AI사주선생",
  publisher: "AI사주선생",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://joeundream.com/fortune"),
  alternates: {
    canonical: "https://joeundream.com/fortune",
    languages: {
      ko: "https://joeundream.com/fortune",
    },
  },
  openGraph: {
    title: "무료 사주 운세, 사주팔자 풀이 | AI사주선생",
    description:
      "무료 사주풀이, 인생운세, 오늘의 사주까지! AI사주선생에서 쉽게 확인하는 나만의 사주 운세 🔮",
    url: "https://joeundream.com/fortune",
    siteName: "AI사주선생",
    images: [
      {
        url: "https://joeundream.com/graph.png",
        width: 1200,
        height: 630,
        alt: "띠별 운세 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "무료 사주 운세, 사주팔자 풀이 | AI사주선생",
    description:
      "무료 사주풀이, 인생운세, 오늘의 사주까지! AI사주선생에서 쉽게 확인하는 나만의 사주 운세 🔮",
    images: ["https://joeundream.com/graph.png"],
  },
  category: "운세/점성술",
  applicationName: "AI사주선생",
};

export default function FortuneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
