import React, { useEffect, useState } from "react";
import allDatas from "../../data/allDatas";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaCheckSquare } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const NatureDetail = () => {
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
        <meta name="author" content="룰루프로젝트" />
        <meta property="og:url" content="https://joeundream.com" />
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
                    to={`/caten/nature?id=${person.id}`}
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

export default NatureDetail;
