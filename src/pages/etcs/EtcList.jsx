import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import allDatas from "../../data/allDatas";
import { Helmet } from "react-helmet-async";
import Pagination from "@mui/material/Pagination";

const EtcList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("etc");
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
          전쟁꿈, 숫자꿈, 로또번호꿈, 복권꿈, 예지몽, 교육꿈, 통장꿈, 돈꿈,
          쫓기는꿈, 도망꿈, 길몽, 흉몽, 돼지꿈
        </title>
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
        <meta property="og:image" content="./img/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="행동꿈, 웃는꿈, 기뻐하는꿈, 성관계꿈, 싸우는꿈, 공포꿈, 두려움꿈, 즐거움꿈, 감동하는 꿈"
        />
        <meta
          name="twitter:description"
          content="전쟁꿈, 숫자꿈, 로또번호꿈, 복권꿈, 예지몽, 교육꿈, 통장꿈, 돈꿈, 쫓기는꿈, 도망꿈, 길몽, 흉몽, 돼지꿈 등 기타 꿈해몽"
        />
        <meta name="twitter:image" content="./img/ogimg.png" />
      </Helmet>
      <div className="post-wrapper">
        {currentRamens.length > 0 ? (
          <ul>
            {currentRamens.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/catee/etc?id=${category.id}`}
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

export default EtcList;
