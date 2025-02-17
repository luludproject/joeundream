import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import allDatas from "../../data/allDatas";
import { Helmet } from "react-helmet-async";
import Pagination from "@mui/material/Pagination";

const AnimalList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("animal");
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
          동물꿈해몽, 반려동물 꿈, 애완동물 꿈, 죽은 동물 꿈, 야생동물 꿈, 죽은
          반려동물 꿈
        </title>
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
        <meta property="og:image" content="./src/assets/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="동물꿈해몽, 반려동물 꿈, 애완동물 꿈, 죽은 동물 꿈, 야생동물 꿈, 죽은 반려동물 꿈"
        />
        <meta
          name="twitter:description"
          content="동물꿈해몽, 반려동물 꿈, 애완동물 꿈, 죽은 동물 꿈, 야생동물 꿈, 죽은 반려동물 꿈, 동물 나오는 꿈, 동물에게 쫓기는 꿈, 동물 죽이는 꿈, 반려동물 죽는 꿈, 동물한테 물리는 꿈, 동물이 죽는 꿈, 동물시체 꿈, 동물에게 물리는 꿈, 동물 죽는 꿈, 동물이 나오는 꿈, 동물을 죽이는 꿈, 반려동물이 죽는 꿈, 동물 키우는 꿈, 동물한테 쫓기는 꿈, 동물 사체 꿈, 반려동물 다치는 꿈, 동물 꿈해몽, 동물 꿈풀이, 재물이 들어오는 동물꿈, 흰색 동물 꿈, 동물로또번호로또 꿈, 동물꿈해몽 무료 풀이, 동물 흰동물 꿈해몽, 동물 모양 죽이는 꿈해몽, 죽은 동물 꿈해몽, 동물 시체 꿈해몽, 동물 꿈 로또 꿈해몽, 집안 동물 꿈"
        />
        <meta name="twitter:image" content="./src/assets/ogimg.png" />
      </Helmet>
      <div className="post-wrapper">
        {currentRamens.length > 0 ? (
          <ul>
            {currentRamens.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/catea/animal?id=${category.id}`}
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

export default AnimalList;
