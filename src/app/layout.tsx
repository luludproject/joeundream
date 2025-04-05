import "./globals.css";

export const metadata = {
  title:
    "AI사주선생 | 무료운세보기, 무료사주보기, 무료운세사이트, 오늘의운세, 오늘에띠운세",
  description:
    "AI가 알려주는 정확한 오늘의 운세! 띠별 운세, 사주 풀이까지 모두 무료로 제공하는 AI사주선생에서 올해의 운명을 확인해보세요 🔮",
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

  authors: [{ name: "AI사주선생", url: "https://joeundream.com" }],
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
  metadataBase: new URL("https://joeundream.com"),
  alternates: {
    canonical: "https://joeundream.com",
    languages: {
      ko: "https://joeundream.com",
    },
  },
  openGraph: {
    title:
      "AI사주선생 | 무료운세보기, 무료사주보기, 무료운세사이트, 오늘의운세, 오늘에띠운세",
    description:
      "AI가 알려주는 정확한 오늘의 운세! 띠별 운세, 사주 풀이까지 모두 무료로 제공하는 AI사주선생에서 올해의 운명을 확인해보세요 🔮",
    url: "https://joeundream.com",
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
    title:
      "AI사주선생 | 무료운세보기, 무료사주보기, 무료운세사이트, 오늘의운세, 오늘에띠운세",
    description:
      "AI가 알려주는 정확한 오늘의 운세! 띠별 운세, 사주 풀이까지 모두 무료로 제공하는 AI사주선생에서 올해의 운명을 확인해보세요 🔮",
    images: ["https://joeundream.com/graph.png"],
  },
  category: "운세/점성술",
  applicationName: "AI사주선생",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9755454846573489"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="naver-site-verification"
          content="d89dfab68636aba53b20ae4dea88a0558bed2660"
        />
        <meta
          name="google-site-verification"
          content="OPxfuUutjFgq7BCQjOMmelgCFMTo1kEPa7v6xHU0rCc"
        />
      </head>
      <body className="font-sans">
        {children}

        <script type="text/javascript">
          var sc_project=13112529; var sc_invisible=1; var
          sc_security="71d34e9d";
        </script>
        <script
          type="text/javascript"
          src="https://www.statcounter.com/counter/counter.js"
          async
        ></script>
        <noscript>
          <div className="statcounter">
            <a
              title="Web Analytics"
              href="https://statcounter.com/"
              target="_blank"
            >
              <img
                className="statcounter"
                src="https://c.statcounter.com/13112529/0/71d34e9d/1/"
                alt="Web Analytics"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
      </body>
    </html>
  );
}
