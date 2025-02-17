import React from "react";
import "../person/person.css";
import allDatas from "../../data/allDatas";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Ads from "../../components/ads/Ads";

const body = () => {
  const uniqueCategories = [
    ...new Set(
      allDatas
        .filter((person) => person.menu === "body")
        .map((person) => person.category)
    ),
  ];

  return (
    <>
      <Helmet>
        <title>
          신체꿈, 몸꿈, 성기꿈, 머리꿈, 배꿈, 손꿈, 발꿈, 피꿈, 얼굴꿈, 목꿈,
          머리카락꿈
        </title>
        <meta
          name="title"
          content="신체꿈, 몸꿈, 성기꿈, 머리꿈, 배꿈, 손꿈, 발꿈, 피꿈, 얼굴꿈, 목꿈, 머리카락꿈"
        />
        <meta
          name="description"
          content="무료 꿈해몽 풀이 사이트 돈꿈, 사랑꿈 등 조은드림에서 알아보세요!"
        />
        <meta
          name="keywords"
          content="몸 꿈, 머리 꿈, 손 꿈, 피 꿈, 배 꿈, 얼굴 꿈, 눈 꿈, 목 꿈, 성기 꿈, 모습 꿈, 입 꿈, 알몸 꿈, 털 꿈, 대변 꿈, 귀 꿈, 코 꿈, 머리카락 꿈, 가슴 꿈, 수염 꿈, 발 꿈, 소변 꿈, 손가락 꿈, 어깨 꿈, 혀 꿈, 팔 꿈"
        />
        <meta name="author" content="조은드림" />
        <meta property="og:url" content="https://joeundream.com/body" />
        <link rel="canonical" href="https://joeundream.com/body" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="신체꿈, 몸꿈, 성기꿈, 머리꿈, 배꿈, 손꿈, 발꿈, 피꿈, 얼굴꿈, 목꿈, 머리카락꿈"
        />
        <meta
          property="og:description"
          content="몸 꿈, 머리 꿈, 손 꿈, 피 꿈, 배 꿈, 얼굴 꿈, 눈 꿈, 목 꿈, 성기 꿈, 모습 꿈, 입 꿈, 알몸 꿈, 털 꿈, 대변 꿈, 귀 꿈, 코 꿈, 머리카락 꿈, 가슴 꿈, 수염 꿈, 발 꿈, 소변 꿈, 손가락 꿈, 어깨 꿈, 혀 꿈, 팔 꿈"
        />
        <meta property="og:image" content="./img/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="신체꿈, 몸꿈, 성기꿈, 머리꿈, 배꿈, 손꿈, 발꿈, 피꿈, 얼굴꿈, 목꿈, 머리카락꿈"
        />
        <meta
          name="twitter:description"
          content="몸 꿈, 머리 꿈, 손 꿈, 피 꿈, 배 꿈, 얼굴 꿈, 눈 꿈, 목 꿈, 성기 꿈, 모습 꿈, 입 꿈, 알몸 꿈, 털 꿈, 대변 꿈, 귀 꿈, 코 꿈, 머리카락 꿈, 가슴 꿈, 수염 꿈, 발 꿈, 소변 꿈, 손가락 꿈, 어깨 꿈, 혀 꿈, 팔 꿈"
        />
        <meta name="twitter:image" content="./img/ogimg.png" />
      </Helmet>
      <main>
        <section className="human">
          <article>
            {/* <Ads /> */}

            <h2>신체/몸 꿈해몽</h2>
            <ul className="common-ul">
              {uniqueCategories.map((category, index) => (
                <li key={index} className="common-li">
                  <Link to={`/cateb/?body=${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
};

export default body;
