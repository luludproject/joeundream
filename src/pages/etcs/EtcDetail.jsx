import React, { useEffect, useState } from "react";
import allDatas from "../../data/allDatas";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaCheckSquare } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const EtcDetail = () => {
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
          content="전쟁꿈, 숫자꿈, 로또번호꿈, 복권꿈, 예지몽, 교육꿈, 통장꿈, 돈꿈, 쫓기는꿈, 도망꿈, 길몽, 흉몽, 돼지꿈"
        />
        <meta
          name="description"
          content="무료 꿈해몽 풀이 사이트 돈꿈, 사랑꿈 등 조은드림에서 알아보세요!"
        />
        <meta
          name="keywords"
          content="전쟁꿈, 숫자꿈, 로또번호꿈, 복권꿈, 예지몽, 교육꿈, 통장꿈, 돈꿈, 쫓기는꿈, 도망꿈, 길몽, 흉몽, 돼지꿈"
        />
        <meta name="author" content="조은드림" />
        <meta property="og:url" content="https://joeundream.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="행동꿈, 웃는꿈, 기뻐하는꿈, 성관계꿈, 싸우는꿈, 공포꿈, 두려움꿈, 즐거움꿈, 감동하는 꿈"
        />
        <meta
          property="og:description"
          content="전쟁꿈, 숫자꿈, 로또번호꿈, 복권꿈, 예지몽, 교육꿈, 통장꿈, 돈꿈, 쫓기는꿈, 도망꿈, 길몽, 흉몽, 돼지꿈 등 기타 꿈해몽"
        />
        <meta property="og:image" content="./src/assets/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="행동꿈, 웃는꿈, 기뻐하는꿈, 성관계꿈, 싸우는꿈, 공포꿈, 두려움꿈, 즐거움꿈, 감동하는 꿈"
        />
        <meta
          name="twitter:description"
          content="전쟁꿈, 숫자꿈, 로또번호꿈, 복권꿈, 예지몽, 교육꿈, 통장꿈, 돈꿈, 쫓기는꿈, 도망꿈, 길몽, 흉몽, 돼지꿈 등 기타 꿈해몽"
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
                    to={`/catee/etc?id=${person.id}`}
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

export default EtcDetail;
