import React, { useEffect, useState } from "react";
import allDatas from "../../data/allDatas";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaCheckSquare } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const PlantDetail = () => {
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
        <meta property="og:url" content="https://joeundream.com" />
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
                    to={`/catep2/plant?id=${person.id}`}
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

export default PlantDetail;
