import React from "react";
import "../person/person.css";
import allDatas from "../../data/allDatas";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Ads from "../../components/ads/Ads";

const Plant = () => {
  const uniqueCategories = [
    ...new Set(
      allDatas
        .filter((person) => person.menu === "plant")
        .map((person) => person.category)
    ),
  ];

  return (
    <>
      <Helmet>
        <title>
          화분 꿈, 식물 꿈해몽, 초록색 식물 꿈, 초록 식물 꿈해몽, 식물 심는
          꿈해몽, 식물 뿌리 꿈해몽, 꽃 꿈해몽, 장미꽃 꿈
        </title>
        <meta
          name="title"
          content="화분 꿈, 식물 꿈해몽, 초록색 식물 꿈, 초록 식물 꿈해몽, 식물 심는 꿈해몽, 식물 뿌리 꿈해몽, 꽃 꿈해몽, 장미꽃 꿈, 노란꽃 꿈, 국화꽃 꿈, 보라색 꽃 꿈, 하얀꽃 꿈, 매화꽃 꿈, 유채꽃 꿈, 꽃 받는 꿈, 꽃 선물 받는 꿈, 꽃 사는 꿈, 꽃이 피는 꿈, 꽃 보는 꿈, 꽃을 보는 꿈, 꿈 꽃 어린이집, 꽃을 받는 꿈, 꽃 심는 꿈, 꽃 화분 꿈, 꿈 꽃 유치원, 꽃이 만개한 꿈, 마리나 꿈, 벚꽃 꿈, 꽃다발 꿈, 꽃 태몽, 꽃나무 꿈, 꽃 꿈, 꽃 꿈풀이, 방안의 꽃 꿈, 태몽 꽃 꿈"
        />
        <meta
          name="description"
          content="무료 꿈해몽 풀이 사이트 돈꿈, 사랑꿈 등 조은드림에서 알아보세요!"
        />
        <meta
          name="keywords"
          content="화분 꿈, 식물 꿈해몽, 초록색 식물 꿈, 초록 식물 꿈해몽, 식물 심는 꿈해몽, 식물 뿌리 꿈해몽, 꽃 꿈해몽, 장미꽃 꿈, 노란꽃 꿈, 국화꽃 꿈, 보라색 꽃 꿈, 하얀꽃 꿈, 매화꽃 꿈, 유채꽃 꿈, 꽃 받는 꿈, 꽃 선물 받는 꿈, 꽃 사는 꿈, 꽃이 피는 꿈, 꽃 보는 꿈, 꽃을 보는 꿈, 꿈 꽃 어린이집, 꽃을 받는 꿈, 꽃 심는 꿈, 꽃 화분 꿈, 꿈 꽃 유치원, 꽃이 만개한 꿈, 마리나 꿈, 벚꽃 꿈, 꽃다발 꿈, 꽃 태몽, 꽃나무 꿈, 꽃 꿈, 꽃 꿈풀이, 방안의 꽃 꿈, 태몽 꽃 꿈"
        />
        <meta name="author" content="조은드림" />
        <meta property="og:url" content="https://joeundream.com/plant" />
        <link rel="canonical" href="https://joeundream.com/plant" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="화분 꿈, 식물 꿈해몽, 초록색 식물 꿈, 초록 식물 꿈해몽, 식물 심는 꿈해몽, 식물 뿌리 꿈해몽, 꽃 꿈해몽, 장미꽃 꿈"
        />
        <meta
          property="og:description"
          content="화분 꿈, 식물 꿈해몽, 초록색 식물 꿈, 초록 식물 꿈해몽, 식물 심는 꿈해몽, 식물 뿌리 꿈해몽, 꽃 꿈해몽, 장미꽃 꿈, 노란꽃 꿈, 국화꽃 꿈, 보라색 꽃 꿈, 하얀꽃 꿈, 매화꽃 꿈, 유채꽃 꿈, 꽃 받는 꿈, 꽃 선물 받는 꿈, 꽃 사는 꿈, 꽃이 피는 꿈, 꽃 보는 꿈, 꽃을 보는 꿈, 꿈 꽃 어린이집, 꽃을 받는 꿈, 꽃 심는 꿈, 꽃 화분 꿈, 꿈 꽃 유치원, 꽃이 만개한 꿈, 마리나 꿈, 벚꽃 꿈, 꽃다발 꿈, 꽃 태몽, 꽃나무 꿈, 꽃 꿈, 꽃 꿈풀이, 방안의 꽃 꿈, 태몽 꽃 꿈"
        />
        <meta property="og:image" content="./img/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="화분 꿈, 식물 꿈해몽, 초록색 식물 꿈, 초록 식물 꿈해몽, 식물 심는 꿈해몽, 식물 뿌리 꿈해몽, 꽃 꿈해몽, 장미꽃 꿈"
        />
        <meta
          name="twitter:description"
          content="화분 꿈, 식물 꿈해몽, 초록색 식물 꿈, 초록 식물 꿈해몽, 식물 심는 꿈해몽, 식물 뿌리 꿈해몽, 꽃 꿈해몽, 장미꽃 꿈, 노란꽃 꿈, 국화꽃 꿈, 보라색 꽃 꿈, 하얀꽃 꿈, 매화꽃 꿈, 유채꽃 꿈, 꽃 받는 꿈, 꽃 선물 받는 꿈, 꽃 사는 꿈, 꽃이 피는 꿈, 꽃 보는 꿈, 꽃을 보는 꿈, 꿈 꽃 어린이집, 꽃을 받는 꿈, 꽃 심는 꿈, 꽃 화분 꿈, 꿈 꽃 유치원, 꽃이 만개한 꿈, 마리나 꿈, 벚꽃 꿈, 꽃다발 꿈, 꽃 태몽, 꽃나무 꿈, 꽃 꿈, 꽃 꿈풀이, 방안의 꽃 꿈, 태몽 꽃 꿈"
        />
        <meta name="twitter:image" content="./img/ogimg.png" />
      </Helmet>
      <main>
        <section className="human">
          <article>
            {/* <Ads /> */}

            <h2>식물 꿈해몽</h2>
            <ul className="common-ul">
              {uniqueCategories.map((category, index) => (
                <li key={index} className="common-li">
                  <Link to={`/catep2/?plant=${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
};

export default Plant;
