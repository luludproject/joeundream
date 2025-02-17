import React from "react";
import "./person.css";
import allDatas from "../../data/allDatas";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Ads from "../../components/ads/Ads";

const person = () => {
  const uniqueCategories = [
    ...new Set(
      allDatas
        .filter((person) => person.menu === "person")
        .map((person) => person.category)
    ),
  ];

  return (
    <>
      <Helmet>
        <title>
          죽은사람꿈, 모르는사람꿈, 좋아하는사람꿈, 유명한사람꿈, 많은사람꿈해몽
        </title>
        <meta
          name="title"
          content="죽은사람꿈, 모르는사람꿈, 좋아하는사람꿈, 유명한사람꿈, 많은사람꿈해몽"
        />
        <meta
          name="description"
          content="무료 꿈해몽 풀이 사이트 돈꿈, 사랑꿈 등 조은드림에서 알아보세요!"
        />
        <meta
          name="keywords"
          content="죽은 사람 꿈, 좋아하는 사람 꿈, 모르는 사람 꿈, 싫어하는 사람 꿈, 많은 사람 꿈, 죽은 사람 꿈 해몽, 유명한 사람 꿈, 아는 사람 꿈, 아픈 사람 꿈, 사람이 많은 꿈, 사람 꿈 해몽, 사람 꿈 총들고 있는 사람 꿈, 피묻은 사람 꿈, 사람 꿈 풀이, 흰 옷을 입은 사람 꿈, 죽은 사람 보는 꿈 해몽, 사람 죽는 꿈 해몽, 꿈 해몽 무료 풀이 사람, 죽은 사람 꿈 해몽 모르는 사람 꿈 해몽, 검은 옷을 입은 사람 꿈, 죽은 사람 꿈에 나타난 꿈, 술 취한 사람 꿈 해몽, 사람 많은 꿈 해몽, 사람 꾸미기, 사람 꾸미기 게임, 소복 입은 사람 꿈, 죽은 사람 꿈, 많은 사람 꿈, 아는 사람 꿈, 모르는 사람 꿈, 싫어하는 사람 꿈, 사람 꿈 해몽, 사람 꾸미기 께임, 많은 사람 꿈 해몽, 모르는 사람 꿈 해몽, 싫어하는 사람 꿈 해몽, 벌거벗은 사람 꿈, 처음 보는 사람 꿈, 흰 옷을 입은 사람 꿈, 상복 입은 사람 꿈, 아픈 사람 꿈, 발가벗은 사람 꿈 해몽, 죽은 사람 꿈을 자주 꾸는 이유, 불에 타 죽는 사람 꿈 해몽"
        />
        <meta name="author" content="조은드림" />
        <meta property="og:url" content="https://joeundream.com/person" />
        <link rel="canonical" href="https://joeundream.com/person" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="죽은사람꿈, 모르는사람꿈, 좋아하는사람꿈, 유명한사람꿈, 많은사람꿈해몽"
        />
        <meta
          property="og:description"
          content="죽은 사람 꿈, 좋아하는 사람 꿈, 모르는 사람 꿈, 싫어하는 사람 꿈, 많은 사람 꿈, 죽은 사람 꿈 해몽, 유명한 사람 꿈, 아는 사람 꿈, 아픈 사람 꿈, 사람이 많은 꿈, 사람 꿈 해몽, 사람 꿈 총들고 있는 사람 꿈, 피묻은 사람 꿈, 사람 꿈 풀이, 흰 옷을 입은 사람 꿈, 죽은 사람 보는 꿈 해몽, 사람 죽는 꿈 해몽, 꿈 해몽 무료 풀이 사람, 죽은 사람 꿈 해몽 모르는 사람 꿈 해몽, 검은 옷을 입은 사람 꿈, 죽은 사람 꿈에 나타난 꿈, 술 취한 사람 꿈 해몽, 사람 많은 꿈 해몽, 사람 꾸미기, 사람 꾸미기 게임, 소복 입은 사람 꿈, 죽은 사람 꿈, 많은 사람 꿈, 아는 사람 꿈, 모르는 사람 꿈, 싫어하는 사람 꿈, 사람 꿈 해몽, 사람 꾸미기 께임, 많은 사람 꿈 해몽, 모르는 사람 꿈 해몽, 싫어하는 사람 꿈 해몽, 벌거벗은 사람 꿈, 처음 보는 사람 꿈, 흰 옷을 입은 사람 꿈, 상복 입은 사람 꿈, 아픈 사람 꿈, 발가벗은 사람 꿈 해몽, 죽은 사람 꿈을 자주 꾸는 이유, 불에 타 죽는 사람 꿈 해몽"
        />
        <meta property="og:image" content="./src/assets/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="죽은사람꿈, 모르는사람꿈, 좋아하는사람꿈, 유명한사람꿈, 많은사람꿈해몽"
        />
        <meta
          name="twitter:description"
          content="죽은 사람 꿈, 좋아하는 사람 꿈, 모르는 사람 꿈, 싫어하는 사람 꿈, 많은 사람 꿈, 죽은 사람 꿈 해몽, 유명한 사람 꿈, 아는 사람 꿈, 아픈 사람 꿈, 사람이 많은 꿈, 사람 꿈 해몽, 사람 꿈 총들고 있는 사람 꿈, 피묻은 사람 꿈, 사람 꿈 풀이, 흰 옷을 입은 사람 꿈, 죽은 사람 보는 꿈 해몽, 사람 죽는 꿈 해몽, 꿈 해몽 무료 풀이 사람, 죽은 사람 꿈 해몽 모르는 사람 꿈 해몽, 검은 옷을 입은 사람 꿈, 죽은 사람 꿈에 나타난 꿈, 술 취한 사람 꿈 해몽, 사람 많은 꿈 해몽, 사람 꾸미기, 사람 꾸미기 게임, 소복 입은 사람 꿈, 죽은 사람 꿈, 많은 사람 꿈, 아는 사람 꿈, 모르는 사람 꿈, 싫어하는 사람 꿈, 사람 꿈 해몽, 사람 꾸미기 께임, 많은 사람 꿈 해몽, 모르는 사람 꿈 해몽, 싫어하는 사람 꿈 해몽, 벌거벗은 사람 꿈, 처음 보는 사람 꿈, 흰 옷을 입은 사람 꿈, 상복 입은 사람 꿈, 아픈 사람 꿈, 발가벗은 사람 꿈 해몽, 죽은 사람 꿈을 자주 꾸는 이유, 불에 타 죽는 사람 꿈 해몽"
        />
        <meta name="twitter:image" content="./src/assets/ogimg.png" />
      </Helmet>
      <main>
        <section className="human">
          <article>
            <Ads />

            <h2>사람/인물 꿈해몽</h2>
            <ul className="common-ul">
              {uniqueCategories.map((category, index) => (
                <li key={index} className="common-li">
                  <Link to={`/catep/?person=${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
};

export default person;
