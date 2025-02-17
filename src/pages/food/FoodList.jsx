import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import allDatas from "../../data/allDatas";
import { Helmet } from "react-helmet-async";
import Pagination from "@mui/material/Pagination";

const FoodList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("food");
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
          제사음식꿈, 음식 꾸미기 꿈, 음식먹는 꿈, 음식만드는 꿈, 음식하는 꿈,
          음식대접하는 꿈, 음식을 먹는 꿈, 음식 받는 꿈, 음식대접받는 꿈
        </title>
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
        <meta name="author" content="룰루프로젝트" />
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
      <div className="post-wrapper">
        {currentRamens.length > 0 ? (
          <ul>
            {currentRamens.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/catef/food?id=${category.id}`}
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

export default FoodList;
