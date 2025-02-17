import React from "react";
import "../person/person.css";
import allDatas from "../../data/allDatas";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Ads from "../../components/ads/Ads";

const Nature = () => {
  const uniqueCategories = [
    ...new Set(
      allDatas
        .filter((person) => person.menu === "nature")
        .map((person) => person.category)
    ),
  ];

  return (
    <>
      <Helmet>
        <title>자연꿈, 우주꿈, 별꿈, 바다꿈, 태양꿈, 해꿈, 달꿈</title>
        <meta
          name="title"
          content="자연꿈, 산꿈, 하늘꿈, 바다꿈, 나무꿈, 강꿈, 풍경꿈, 동산꿈, 폭포꿈, 해변꿈, 섬꿈, 하늘꿈, 별꿈, 무지개꿈, 꽃밭꿈, 숲꿈, 해꿈, 바람꿈, 구름꿈, 땅꿈, 풀숲꿈"
        />
        <meta
          name="description"
          content="무료 꿈해몽 풀이 사이트 돈꿈, 사랑꿈 등 조은드림에서 알아보세요!"
        />
        <meta
          name="keywords"
          content="자연꿈, 산꿈, 하늘꿈, 바다꿈, 나무꿈, 강꿈, 풍경꿈, 동산꿈, 폭포꿈, 해변꿈, 섬꿈, 하늘꿈, 별꿈, 무지개꿈, 꽃밭꿈, 숲꿈, 해꿈, 바람꿈, 구름꿈, 땅꿈, 풀숲꿈"
        />
        <meta name="author" content="조은드림" />
        <meta property="og:url" content="https://joeundream.com/nature" />
        <link rel="canonical" href="https://joeundream.com/nature" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="화분 꿈, 식물 꿈해몽, 초록색 식물 꿈, 초록 식물 꿈해몽, 식물 심는 꿈해몽, 식물 뿌리 꿈해몽, 꽃 꿈해몽, 장미꽃 꿈"
        />
        <meta
          property="og:description"
          content="자연꿈, 산꿈, 하늘꿈, 바다꿈, 나무꿈, 강꿈, 풍경꿈, 동산꿈, 폭포꿈, 해변꿈, 섬꿈, 하늘꿈, 별꿈, 무지개꿈, 꽃밭꿈, 숲꿈, 해꿈, 바람꿈, 구름꿈, 땅꿈, 풀숲꿈"
        />
        <meta property="og:image" content="./src/assets/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="화분 꿈, 식물 꿈해몽, 초록색 식물 꿈, 초록 식물 꿈해몽, 식물 심는 꿈해몽, 식물 뿌리 꿈해몽, 꽃 꿈해몽, 장미꽃 꿈"
        />
        <meta
          name="twitter:description"
          content="자연꿈, 산꿈, 하늘꿈, 바다꿈, 나무꿈, 강꿈, 풍경꿈, 동산꿈, 폭포꿈, 해변꿈, 섬꿈, 하늘꿈, 별꿈, 무지개꿈, 꽃밭꿈, 숲꿈, 해꿈, 바람꿈, 구름꿈, 땅꿈, 풀숲꿈"
        />
        <meta name="twitter:image" content="./src/assets/ogimg.png" />
      </Helmet>
      <main>
        <section className="human">
          <article>
            <Ads />

            <h2>자연 꿈해몽</h2>
            <ul className="common-ul">
              {uniqueCategories.map((category, index) => (
                <li key={index} className="common-li">
                  <Link to={`/caten/?nature=${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
};

export default Nature;
