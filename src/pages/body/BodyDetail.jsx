import React, { useEffect, useState } from "react";
import allDatas from "../../data/allDatas";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaCheckSquare } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const BodyDetail = () => {
  const location = useLocation();
  const currentIdUrl = new URLSearchParams(location.search).get("id");

  const filteredPersonData = allDatas.filter(
    (person) => person.id !== parseInt(currentIdUrl)
  );

  const getRandomIndexesWithoutDuplicates = (max, count) => {
    const indexes = [];
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (
        !indexes.includes(randomIndex) &&
        randomIndex !== parseInt(currentIdUrl)
      ) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  };

  const randomIndexes = getRandomIndexesWithoutDuplicates(
    filteredPersonData.length,
    4
  );

  const randomPeople = randomIndexes.map((index) => filteredPersonData[index]);

  return (
    <>
      <Helmet>
        <title>{allDatas[currentIdUrl].title} - 무료꿈해몽 조은드림</title>
        <meta
          name="title"
          content="신체꿈, 몸꿈, 성기꿈, 머리꿈, 배꿈, 손꿈, 발꿈, 피꿈, 얼굴꿈, 목꿈, 머리카락꿈"
        />
        <meta
          name="description"
          content="무료 꿈해몽 풀이 전문. 돈꿈, 사랑꿈 등 조은드림에서 알아보세요!"
        />
        <meta
          name="keywords"
          content="몸 꿈, 머리 꿈, 손 꿈, 피 꿈, 배 꿈, 얼굴 꿈, 눈 꿈, 목 꿈, 성기 꿈, 모습 꿈, 입 꿈, 알몸 꿈, 털 꿈, 대변 꿈, 귀 꿈, 코 꿈, 머리카락 꿈, 가슴 꿈, 수염 꿈, 발 꿈, 소변 꿈, 손가락 꿈, 어깨 꿈, 혀 꿈, 팔 꿈"
        />
        <meta name="author" content="조은드림" />
        <meta property="og:url" content="https://joeundream.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="신체꿈, 몸꿈, 성기꿈, 머리꿈, 배꿈, 손꿈, 발꿈, 피꿈, 얼굴꿈, 목꿈, 머리카락꿈"
        />
        <meta
          property="og:description"
          content="몸 꿈, 머리 꿈, 손 꿈, 피 꿈, 배 꿈, 얼굴 꿈, 눈 꿈, 목 꿈, 성기 꿈, 모습 꿈, 입 꿈, 알몸 꿈, 털 꿈, 대변 꿈, 귀 꿈, 코 꿈, 머리카락 꿈, 가슴 꿈, 수염 꿈, 발 꿈, 소변 꿈, 손가락 꿈, 어깨 꿈, 혀 꿈, 팔 꿈"
        />
        <meta property="og:image" content="./src/assets/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="신체꿈, 몸꿈, 성기꿈, 머리꿈, 배꿈, 손꿈, 발꿈, 피꿈, 얼굴꿈, 목꿈, 머리카락꿈"
        />
        <meta
          name="twitter:description"
          content="몸 꿈, 머리 꿈, 손 꿈, 피 꿈, 배 꿈, 얼굴 꿈, 눈 꿈, 목 꿈, 성기 꿈, 모습 꿈, 입 꿈, 알몸 꿈, 털 꿈, 대변 꿈, 귀 꿈, 코 꿈, 머리카락 꿈, 가슴 꿈, 수염 꿈, 발 꿈, 소변 꿈, 손가락 꿈, 어깨 꿈, 혀 꿈, 팔 꿈"
        />
        <meta name="twitter:image" content="./src/assets/ogimg.png" />
      </Helmet>
      <main>
        <section>
          <article>
            <div>
              <h2 className="common-h2-detail">
                - {allDatas[currentIdUrl].title}
              </h2>
              <p className="common-p-detail">
                {allDatas[currentIdUrl].description}
              </p>
            </div>
            <div>
              <h2 className="common-h2-detail2">- 다른 꿈보기</h2>
              <div className="links">
                {randomPeople.map((person) => (
                  <Link
                    key={person.id}
                    to={`/cateb/body?id=${person.id}`}
                    className="common-link"
                  >
                    <FaCheckSquare />
                    {person.title}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default BodyDetail;
