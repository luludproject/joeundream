import React from "react";
import "../person/person.css";
import allDatas from "../../data/allDatas";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Ads from "../../components/ads/Ads";

const Etc = () => {
  const uniqueCategories = [
    ...new Set(
      allDatas
        .filter((person) => person.menu === "etc")
        .map((person) => person.category)
    ),
  ];

  return (
    <>
      <Helmet>
        <title>
          전쟁꿈, 숫자꿈, 로또번호꿈, 복권꿈, 예지몽, 교육꿈, 통장꿈, 돈꿈,
          쫓기는꿈, 도망꿈, 길몽, 흉몽, 돼지꿈
        </title>
        <meta
          name="title"
          content="전쟁꿈, 숫자꿈, 로또번호꿈, 복권꿈, 예지몽, 교육꿈, 통장꿈, 돈꿈, 쫓기는꿈, 도망꿈, 길몽, 흉몽, 돼지꿈"
        />
        <meta
          name="description"
          content="무료 꿈해몽 풀이 사이트 돈꿈, 사랑꿈 등 조은드림에서 알아보세요!"
        />
        <meta
          name="keywords"
          content="전쟁꿈, 숫자꿈, 로또번호꿈, 복권꿈, 예지몽, 교육꿈, 통장꿈, 돈꿈, 쫓기는꿈, 도망꿈, 길몽, 흉몽, 돼지꿈"
        />
        <meta name="author" content="조은드림" />
        <meta property="og:url" content="https://joeundream.com/etc" />
        <link rel="canonical" href="https://joeundream.com/etc" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="행동꿈, 웃는꿈, 기뻐하는꿈, 성관계꿈, 싸우는꿈, 공포꿈, 두려움꿈, 즐거움꿈, 감동하는 꿈"
        />
        <meta
          property="og:description"
          content="전쟁꿈, 숫자꿈, 로또번호꿈, 복권꿈, 예지몽, 교육꿈, 통장꿈, 돈꿈, 쫓기는꿈, 도망꿈, 길몽, 흉몽, 돼지꿈 등 기타 꿈해몽"
        />
        <meta property="og:image" content="./src/assets/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="행동꿈, 웃는꿈, 기뻐하는꿈, 성관계꿈, 싸우는꿈, 공포꿈, 두려움꿈, 즐거움꿈, 감동하는 꿈"
        />
        <meta
          name="twitter:description"
          content="전쟁꿈, 숫자꿈, 로또번호꿈, 복권꿈, 예지몽, 교육꿈, 통장꿈, 돈꿈, 쫓기는꿈, 도망꿈, 길몽, 흉몽, 돼지꿈 등 기타 꿈해몽"
        />
        <meta name="twitter:image" content="./src/assets/ogimg.png" />
      </Helmet>
      <main>
        <section className="human">
          <article>
            <Ads />

            <h2>기타 꿈해몽</h2>
            <ul className="common-ul">
              {uniqueCategories.map((category, index) => (
                <li key={index} className="common-li">
                  <Link to={`/catee/?etc=${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
};

export default Etc;
