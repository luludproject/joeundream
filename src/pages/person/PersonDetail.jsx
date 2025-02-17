import React, { useEffect, useState } from "react";
import allDatas from "../../data/allDatas";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaCheckSquare } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const PersonDetail = () => {
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
        <meta property="og:url" content="https://joeundream.com" />
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
                    to={`/catep/person?id=${person.id}`}
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

export default PersonDetail;
