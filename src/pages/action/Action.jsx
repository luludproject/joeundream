import React from "react";
import "../person/person.css";
import allDatas from "../../data/allDatas";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Ads from "../../components/ads/Ads";

const Action = () => {
  const uniqueCategories = [
    ...new Set(
      allDatas
        .filter((person) => person.menu === "action")
        .map((person) => person.category)
    ),
  ];

  return (
    <>
      <Helmet>
        <title>
          행동꿈, 웃는꿈, 기뻐하는꿈, 성관계꿈, 싸우는꿈, 공포꿈, 두려움꿈,
          즐거움꿈, 감동하는 꿈
        </title>
        <meta
          name="title"
          content="행동꿈, 웃는꿈, 기뻐하는꿈, 성관계꿈, 싸우는꿈, 공포꿈, 두려움꿈, 즐거움꿈, 감동하는 꿈, 섹스하는꿈, 때리는 꿈, 맞는꿈, 호통치는 꿈, 소리지르는 꿈"
        />
        <meta
          name="description"
          content="무료 꿈해몽 풀이 전문. 돈꿈, 사랑꿈 등 룰루드림에서 알아보세요!"
        />
        <meta
          name="keywords"
          content="행동꿈, 웃는꿈, 기뻐하는꿈, 성관계꿈, 싸우는꿈, 공포꿈, 두려움꿈, 즐거움꿈, 감동하는 꿈, 섹스하는꿈, 때리는 꿈, 맞는꿈, 호통치는 꿈, 소리지르는 꿈"
        />
        <meta name="author" content="조은드림" />
        <link rel="canonical" href="https://joeundream.com/action" />
        <meta property="og:url" content="https://joeundream.com/action" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="행동꿈, 웃는꿈, 기뻐하는꿈, 성관계꿈, 싸우는꿈, 공포꿈, 두려움꿈, 즐거움꿈, 감동하는 꿈"
        />
        <meta
          property="og:description"
          content="행동꿈, 웃는꿈, 기뻐하는꿈, 성관계꿈, 싸우는꿈, 공포꿈, 두려움꿈, 즐거움꿈, 감동하는 꿈, 섹스하는꿈, 때리는 꿈, 맞는꿈, 호통치는 꿈, 소리지르는 꿈"
        />
        <meta property="og:image" content="./img/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="행동꿈, 웃는꿈, 기뻐하는꿈, 성관계꿈, 싸우는꿈, 공포꿈, 두려움꿈, 즐거움꿈, 감동하는 꿈"
        />
        <meta
          name="twitter:description"
          content="행동꿈, 웃는꿈, 기뻐하는꿈, 성관계꿈, 싸우는꿈, 공포꿈, 두려움꿈, 즐거움꿈, 감동하는 꿈, 섹스하는꿈, 때리는 꿈, 맞는꿈, 호통치는 꿈, 소리지르는 꿈"
        />
        <meta name="twitter:image" content="./img/ogimg.png" />
      </Helmet>
      <main>
        <section className="human">
          <article>
            {/* <Ads /> */}

            <h2>행동 꿈해몽</h2>
            <ul className="common-ul">
              {uniqueCategories.map((category, index) => (
                <li key={index} className="common-li">
                  <Link to={`/catea2/?action=${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
};

export default Action;
