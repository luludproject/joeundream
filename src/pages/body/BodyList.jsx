import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import allDatas from "../../data/allDatas";
import { Helmet } from "react-helmet-async";
import Pagination from "@mui/material/Pagination";

const BodyList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("body");
  const [categories, setCategories] = useState([]);

  const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  const ramenPerPage = 5; // 페이지당 리스트 개수
  const currentPageLast = currentPage * ramenPerPage; // 현재 페이지의 처음
  const currentPageFirst = currentPageLast - ramenPerPage; /// 현재 페이지의 끝
  const currentRamens = categories.slice(currentPageFirst, currentPageLast);
  const pageNumber = Math.ceil(categories.length / ramenPerPage);

  useEffect(() => {
    // URL 쿼리 문자열에서 category를 가져와서 해당하는 카테고리를 찾습니다.
    const filteredCategories = allDatas.filter(
      (category) => category.category === categoryParam
    );
    setCategories(filteredCategories);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          신체꿈, 몸꿈, 성기꿈, 머리꿈, 배꿈, 손꿈, 발꿈, 피꿈, 얼굴꿈, 목꿈,
          머리카락꿈
        </title>
        <meta
          name="title"
          content="신체꿈, 몸꿈, 성기꿈, 머리꿈, 배꿈, 손꿈, 발꿈, 피꿈, 얼굴꿈, 목꿈, 머리카락꿈"
        />
        <meta
          name="description"
          content="무료 꿈해몽 풀이 사이트 돈꿈, 사랑꿈 등 조은드림에서 알아보세요!"
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
        <meta property="og:image" content="./img/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="신체꿈, 몸꿈, 성기꿈, 머리꿈, 배꿈, 손꿈, 발꿈, 피꿈, 얼굴꿈, 목꿈, 머리카락꿈"
        />
        <meta
          name="twitter:description"
          content="몸 꿈, 머리 꿈, 손 꿈, 피 꿈, 배 꿈, 얼굴 꿈, 눈 꿈, 목 꿈, 성기 꿈, 모습 꿈, 입 꿈, 알몸 꿈, 털 꿈, 대변 꿈, 귀 꿈, 코 꿈, 머리카락 꿈, 가슴 꿈, 수염 꿈, 발 꿈, 소변 꿈, 손가락 꿈, 어깨 꿈, 혀 꿈, 팔 꿈"
        />
        <meta name="twitter:image" content="./img/ogimg.png" />
      </Helmet>
      <div className="post-wrapper">
        {currentRamens.length > 0 ? (
          <ul>
            {currentRamens.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/cateb/body?id=${category.id}`}
                  className="common-link"
                >
                  <h2 className="common-h2">- {category.title}</h2>
                  <p className="common-p">
                    {category.description.substring(0, 80)}...
                    <span style={{ fontWeight: "bold" }}>[자세히 보기]</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <img
              src="../src/assets/no-post.png"
              alt="게시물이 없습니다"
              className="no-post-img"
            />
            <h2>게시물이 존재하지 않습니다.</h2>
          </>
        )}
        <Pagination
          style={{ display: "flex", justifyContent: "center" }}
          count={pageNumber}
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default BodyList;
