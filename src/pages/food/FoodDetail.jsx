import React, { useEffect, useState } from "react";
import allDatas from "../../data/allDatas";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaCheckSquare } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const FoodDetail = () => {
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
        <meta property="og:url" content="https://joeundream.com" />
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
                    to={`/catef/food?id=${person.id}`}
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

export default FoodDetail;
