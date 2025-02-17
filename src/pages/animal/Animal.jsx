import React from "react";
import "../person/person.css";
import allDatas from "../../data/allDatas";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Ads from "../../components/ads/Ads";

const Animal = () => {
  const uniqueCategories = [
    ...new Set(
      allDatas
        .filter((person) => person.menu === "animal")
        .map((person) => person.category)
    ),
  ];

  return (
    <>
      <Helmet>
        <title>
          동물꿈해몽, 반려동물 꿈, 애완동물 꿈, 죽은 동물 꿈, 야생동물 꿈, 죽은
          반려동물 꿈
        </title>
        <meta
          name="title"
          content="동물꿈해몽, 반려동물 꿈, 애완동물 꿈, 죽은 동물 꿈, 야생동물 꿈, 죽은 반려동물 꿈"
        />
        <meta
          name="description"
          content="무료 꿈해몽 풀이 사이트 돈꿈, 사랑꿈 등 조은드림에서 알아보세요!"
        />
        <meta
          name="keywords"
          content="동물꿈해몽, 반려동물 꿈, 애완동물 꿈, 죽은 동물 꿈, 야생동물 꿈, 죽은 반려동물 꿈, 동물 나오는 꿈, 동물에게 쫓기는 꿈, 동물 죽이는 꿈, 반려동물 죽는 꿈, 동물한테 물리는 꿈, 동물이 죽는 꿈, 동물시체 꿈, 동물에게 물리는 꿈, 동물 죽는 꿈, 동물이 나오는 꿈, 동물을 죽이는 꿈, 반려동물이 죽는 꿈, 동물 키우는 꿈, 동물한테 쫓기는 꿈, 동물 사체 꿈, 반려동물 다치는 꿈, 동물 꿈해몽, 동물 꿈풀이, 재물이 들어오는 동물꿈, 흰색 동물 꿈, 동물로또번호로또 꿈, 동물꿈해몽 무료 풀이, 동물 흰동물 꿈해몽, 동물 모양 죽이는 꿈해몽, 죽은 동물 꿈해몽, 동물 시체 꿈해몽, 동물 꿈 로또 꿈해몽, 집안 동물 꿈"
        />
        <meta name="author" content="조은드림" />
        <meta property="og:url" content="https://joeun.com/animal" />
        <link rel="canonical" href="https://joeun.com/animal" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="동물꿈해몽, 반려동물 꿈, 애완동물 꿈, 죽은 동물 꿈, 야생동물 꿈, 죽은 반려동물 꿈"
        />
        <meta
          property="og:description"
          content="동물꿈해몽, 반려동물 꿈, 애완동물 꿈, 죽은 동물 꿈, 야생동물 꿈, 죽은 반려동물 꿈, 동물 나오는 꿈, 동물에게 쫓기는 꿈, 동물 죽이는 꿈, 반려동물 죽는 꿈, 동물한테 물리는 꿈, 동물이 죽는 꿈, 동물시체 꿈, 동물에게 물리는 꿈, 동물 죽는 꿈, 동물이 나오는 꿈, 동물을 죽이는 꿈, 반려동물이 죽는 꿈, 동물 키우는 꿈, 동물한테 쫓기는 꿈, 동물 사체 꿈, 반려동물 다치는 꿈, 동물 꿈해몽, 동물 꿈풀이, 재물이 들어오는 동물꿈, 흰색 동물 꿈, 동물로또번호로또 꿈, 동물꿈해몽 무료 풀이, 동물 흰동물 꿈해몽, 동물 모양 죽이는 꿈해몽, 죽은 동물 꿈해몽, 동물 시체 꿈해몽, 동물 꿈 로또 꿈해몽, 집안 동물 꿈"
        />
        <meta property="og:image" content="./img/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="동물꿈해몽, 반려동물 꿈, 애완동물 꿈, 죽은 동물 꿈, 야생동물 꿈, 죽은 반려동물 꿈"
        />
        <meta
          name="twitter:description"
          content="동물꿈해몽, 반려동물 꿈, 애완동물 꿈, 죽은 동물 꿈, 야생동물 꿈, 죽은 반려동물 꿈, 동물 나오는 꿈, 동물에게 쫓기는 꿈, 동물 죽이는 꿈, 반려동물 죽는 꿈, 동물한테 물리는 꿈, 동물이 죽는 꿈, 동물시체 꿈, 동물에게 물리는 꿈, 동물 죽는 꿈, 동물이 나오는 꿈, 동물을 죽이는 꿈, 반려동물이 죽는 꿈, 동물 키우는 꿈, 동물한테 쫓기는 꿈, 동물 사체 꿈, 반려동물 다치는 꿈, 동물 꿈해몽, 동물 꿈풀이, 재물이 들어오는 동물꿈, 흰색 동물 꿈, 동물로또번호로또 꿈, 동물꿈해몽 무료 풀이, 동물 흰동물 꿈해몽, 동물 모양 죽이는 꿈해몽, 죽은 동물 꿈해몽, 동물 시체 꿈해몽, 동물 꿈 로또 꿈해몽, 집안 동물 꿈"
        />
        <meta name="twitter:image" content="./img/ogimg.png" />
      </Helmet>
      <main>
        <section className="human">
          <article>
            {/* <Ads /> */}

            <h2>동물 꿈해몽</h2>
            <ul className="common-ul">
              {uniqueCategories.map((category, index) => (
                <li key={index} className="common-li">
                  <Link to={`/catea/?animal=${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
};

export default Animal;
