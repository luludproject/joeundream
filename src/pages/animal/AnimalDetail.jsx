import React, { useEffect, useState } from "react";
import allDatas from "../../data/allDatas";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaCheckSquare } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const AnimalDetail = () => {
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
        <meta property="og:url" content="https://joeundream.com" />
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
                    to={`/catea/animal?id=${person.id}`}
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

export default AnimalDetail;
