import React from "react";
import "../person/person.css";
import allDatas from "../../data/allDatas";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Ads from "../../components/ads/Ads";

const Food = () => {
  const uniqueCategories = [
    ...new Set(
      allDatas
        .filter((person) => person.menu === "food")
        .map((person) => person.category)
    ),
  ];

  return (
    <>
      <Helmet>
        <title>
          제사음식꿈, 음식 꾸미기 꿈, 음식먹는 꿈, 음식만드는 꿈, 음식하는 꿈,
          음식대접하는 꿈, 음식을 먹는 꿈, 음식 받는 꿈, 음식대접받는 꿈
        </title>
        <meta
          name="title"
          content="제사음식꿈, 음식 꾸미기 꿈, 음식먹는 꿈, 음식만드는 꿈, 음식하는 꿈, 음식대접하는 꿈, 음식을 먹는 꿈, 음식 받는 꿈, 음식대접받는 꿈"
        />
        <meta
          name="description"
          content="무료 꿈해몽 풀이 사이트 돈꿈, 사랑꿈 등 조은드림에서 알아보세요!"
        />
        <meta
          name="keywords"
          content="제사음식꿈, 음식 꾸미기 꿈, 음식먹는 꿈, 음식만드는 꿈, 음식하는 꿈, 음식대접하는 꿈, 음식을 먹는 꿈, 음식 받는 꿈, 음식대접받는 꿈, 음식 나눠주는 꿈, 상한음식 먹는 꿈, 음식 뺏기는 꿈, 음식 선물받는 꿈, 음식 버리는 꿈, 음식 차리는 꿈, 음식 사는 꿈, 음식을 주는 꿈, 음식 먹는 꿈해몽, 잘 차려진 음식 꿈, 음식 만드는 꿈해몽, 제사음식 꿈해몽, 음식 받는 꿈해몽, 음식하는 꿈해몽, 죽은 사람과 음식 먹는 꿈해몽, 냉장고 음식 꿈, 결혼식 음식 꿈해몽, 조상꿈 음식, 많은 음식 꿈해몽, 음식 담는 꿈해몽, 음식 뱉는 꿈해몽, 맛있는 음식 꿈, 음식 꿈해몽, 고급음식 꿈해몽, 제사음식 꿈해몽, 잔치음식 꿈"
        />
        <meta name="author" content="조은드림" />
        <meta property="og:url" content="https://joeundream.com/food" />
        <link rel="canonical" href="https://joeundream.com/food" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="제사음식꿈, 음식 꾸미기 꿈, 음식먹는 꿈, 음식만드는 꿈, 음식하는 꿈, 음식대접하는 꿈, 음식을 먹는 꿈, 음식 받는 꿈, 음식대접받는 꿈"
        />
        <meta
          property="og:description"
          content="제사음식꿈, 음식 꾸미기 꿈, 음식먹는 꿈, 음식만드는 꿈, 음식하는 꿈, 음식대접하는 꿈, 음식을 먹는 꿈, 음식 받는 꿈, 음식대접받는 꿈, 음식 나눠주는 꿈, 상한음식 먹는 꿈, 음식 뺏기는 꿈, 음식 선물받는 꿈, 음식 버리는 꿈, 음식 차리는 꿈, 음식 사는 꿈, 음식을 주는 꿈, 음식 먹는 꿈해몽, 잘 차려진 음식 꿈, 음식 만드는 꿈해몽, 제사음식 꿈해몽, 음식 받는 꿈해몽, 음식하는 꿈해몽, 죽은 사람과 음식 먹는 꿈해몽, 냉장고 음식 꿈, 결혼식 음식 꿈해몽, 조상꿈 음식, 많은 음식 꿈해몽, 음식 담는 꿈해몽, 음식 뱉는 꿈해몽, 맛있는 음식 꿈, 음식 꿈해몽, 고급음식 꿈해몽, 제사음식 꿈해몽, 잔치음식 꿈"
        />
        <meta property="og:image" content="./src/assets/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="제사음식꿈, 음식 꾸미기 꿈, 음식먹는 꿈, 음식만드는 꿈, 음식하는 꿈, 음식대접하는 꿈, 음식을 먹는 꿈, 음식 받는 꿈, 음식대접받는 꿈"
        />
        <meta
          name="twitter:description"
          content="제사음식꿈, 음식 꾸미기 꿈, 음식먹는 꿈, 음식만드는 꿈, 음식하는 꿈, 음식대접하는 꿈, 음식을 먹는 꿈, 음식 받는 꿈, 음식대접받는 꿈, 음식 나눠주는 꿈, 상한음식 먹는 꿈, 음식 뺏기는 꿈, 음식 선물받는 꿈, 음식 버리는 꿈, 음식 차리는 꿈, 음식 사는 꿈, 음식을 주는 꿈, 음식 먹는 꿈해몽, 잘 차려진 음식 꿈, 음식 만드는 꿈해몽, 제사음식 꿈해몽, 음식 받는 꿈해몽, 음식하는 꿈해몽, 죽은 사람과 음식 먹는 꿈해몽, 냉장고 음식 꿈, 결혼식 음식 꿈해몽, 조상꿈 음식, 많은 음식 꿈해몽, 음식 담는 꿈해몽, 음식 뱉는 꿈해몽, 맛있는 음식 꿈, 음식 꿈해몽, 고급음식 꿈해몽, 제사음식 꿈해몽, 잔치음식 꿈"
        />
        <meta name="twitter:image" content="./src/assets/ogimg.png" />
      </Helmet>
      <main>
        <section className="human">
          <article>
            <Ads />

            <h2>음식 꿈해몽</h2>
            <ul className="common-ul">
              {uniqueCategories.map((category, index) => (
                <li key={index} className="common-li">
                  <Link to={`/catef/?food=${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
};

export default Food;
