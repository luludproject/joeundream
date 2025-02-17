import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { tarotBackImage, tarotImage } from "../../data/tarotImage";
import "./tarot.css";
import { Link } from "react-router-dom";

const Tarot = () => {
  const [isChoiced, setIsChoiced] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const clickHandler = (imageData) => {
    setIsChoiced((prevChoice) => !prevChoice);
    setSelectedCard(imageData);
    window.scrollTo({ top: 0 });
  };
  const handleGoBack = () => {
    location.reload("/tarot");
    window.scrollTo({ top: 0 });
  };

  const randomCard = tarotImage[Math.floor(Math.random() * tarotImage.length)];

  return (
    <>
      <Helmet>
        <title>오늘의 타로카드, 타로카드 뽑기, 타로카드 사이트</title>
        <link rel="canonical" href="https://joeundream.com/tarot" />
        <meta name="title" content="무료꿈해몽풀이 조은드림" />
        <meta
          name="description"
          content="오늘의 타로카드를 선택하여 하루가 어떻게 펼쳐질지 알아보세요!"
        />
        <meta
          name="keywords"
          content="타로카드, 타로카드뽑기, 타로카드뽑는사이트, 타로카드무료, 타로카드점, 타로카드보는법"
        />
        <meta name="author" content="조은드림" />
        <meta property="og:url" content="https://joeundream.com/tarot" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="무료꿈해몽풀이 조은드림" />
        <meta
          property="og:description"
          content="오늘의 타로카드를 선택하여 하루가 어떻게 펼쳐질지 알아보세요!"
        />
        <meta property="og:image" content="/img/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="무료꿈해몽풀이 조은드림" />
        <meta
          name="twitter:description"
          content="오늘의 타로카드를 선택하여 하루가 어떻게 펼쳐질지 알아보세요!"
        />
        <meta name="twitter:image" content="/img/ogimg.png" />
      </Helmet>
      <main>
        {!isChoiced ? (
          <h2 className="title-text">
            잘 섞인 아래의 카드 중 1장을 선택하여 오늘을 대비해보세요.
          </h2>
        ) : (
          ""
        )}
        <div className={`back-img ${isChoiced ? "back-img2" : ""}`}>
          {!isChoiced ? (
            tarotBackImage.map((imageData) => (
              <button
                key={imageData.id}
                onClick={() => clickHandler(imageData)}
                className="tarot-button"
              >
                <img
                  src={imageData.imageUrl}
                  alt="타로카드 뒷면"
                  className="back-img-image"
                />
              </button>
            ))
          ) : (
            <div className="tarot-result">
              <img
                key={randomCard.id}
                src={randomCard.imageUrl}
                alt={randomCard.alt}
                className="back-img-image2"
              />
              <h2>{randomCard.alt}</h2>
              <h3>키워드: {randomCard.keyword}</h3>
              <p>
                <b>{randomCard.alt}카드의 해석:</b> {randomCard.description}
              </p>
              <button onClick={handleGoBack}>다시하기</button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Tarot;
