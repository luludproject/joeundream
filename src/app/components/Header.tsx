"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import donateImage from "/public/donate.png";
import Image from "next/image";

const Header = () => {
  const [showDonate, setShowDonate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-950 text-white py-4 shadow-md sticky top-0 z-50">
      <div
        className={`max-w-6xl mx-auto px-4 flex justify-between items-center transition-all duration-200 ${
          menuOpen ? "mb-6" : ""
        }`}
      >
        <h1 className="text-xl font-bold">AI사주선생 🔮</h1>

        {/* 데스크탑용 메뉴 */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <Link href="/" className="hover:text-yellow-400">
            홈
          </Link>
          <Link href="/fortune" className="hover:text-yellow-400">
            띠별 운세
          </Link>
          <Link href="/saju" className="hover:text-yellow-400">
            사주 운세
          </Link>
          <Link href="/#" className="hover:text-yellow-400">
            궁합보기<span className="text-red-500"> (준비중)</span>
          </Link>
          <button
            onClick={() => setShowDonate(true)}
            className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full hover:bg-pink-200 transition"
          >
            후원하기 💝
          </button>
        </nav>

        {/* 모바일용 햄버거 아이콘 */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {menuOpen && (
        <div className="md:hidden bg-indigo-900 px-4 py-4 space-y-3 text-sm font-medium">
          <Link
            href="/"
            className="block text-white hover:text-yellow-400"
            onClick={() => setMenuOpen(false)}
          >
            홈
          </Link>
          <Link
            href="/fortune"
            className="block text-white hover:text-yellow-400"
            onClick={() => setMenuOpen(false)}
          >
            띠별 운세
          </Link>
          <Link
            href="/saju"
            className="block text-white hover:text-yellow-400"
            onClick={() => setMenuOpen(false)}
          >
            사주 운세
          </Link>
          <Link
            href="/#"
            className="block text-white hover:text-yellow-400"
            onClick={() => setMenuOpen(false)}
          >
            궁합보기<span className="text-red-400"> (준비중)</span>
          </Link>
          <button
            onClick={() => {
              setMenuOpen(false);
              setShowDonate(true);
            }}
            className="block w-full text-left text-pink-200 hover:text-pink-400"
          >
            후원하기 💝
          </button>
        </div>
      )}

      {/* 후원 팝업 */}
      {showDonate && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-lg w-80 text-center relative">
            <button
              onClick={() => setShowDonate(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
            >
              ❌
            </button>
            <h2 className="text-xl font-bold mb-3 text-pink-600">
              소소한 후원 💖
            </h2>
            <Image
              src={donateImage}
              width={150}
              height={150}
              className="mx-auto mb-[10px]"
              alt="후원 이미지"
            />
            <p className="text-sm text-gray-800 mb-2">
              이 사이트는 <strong>과금없이 무료</strong>로 운영되고 있어요!
              <br />
              소소한 후원은 사이트 유지와
              <br /> 더 나은 콘텐츠 제작에 큰 힘이 됩니다 😊
            </p>
            <p className="text-sm text-gray-800 mb-2">
              <strong>후원 계좌:</strong>
              <br />
              하나은행 3361-910610-28407 최민수
            </p>
            <p className="text-xs text-gray-500 mt-4">
              후원금의 일부는 도움이 필요한 곳에 <br />
              <span className="text-pink-500">기부</span>되고 있어요 🎁
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
