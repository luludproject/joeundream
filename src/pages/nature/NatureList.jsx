import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import allDatas from "../../data/allDatas";
import { Helmet } from "react-helmet-async";
import Pagination from "@mui/material/Pagination";

const NatureList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("nature");
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
        <title>자연꿈, 우주꿈, 별꿈, 바다꿈, 태양꿈, 해꿈, 달꿈</title>
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
        <meta name="author" content="조은드림" />
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
      <div className="post-wrapper">
        {currentRamens.length > 0 ? (
          <ul>
            {currentRamens.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/caten/nature?id=${category.id}`}
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

export default NatureList;
