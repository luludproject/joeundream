import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import allDatas from "../../data/allDatas";
import { Helmet } from "react-helmet-async";
import Pagination from "@mui/material/Pagination";

const PersonList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("person");
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
          죽은사람꿈, 모르는사람꿈, 좋아하는사람꿈, 유명한사람꿈, 많은사람꿈해몽
        </title>
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
        <meta property="og:image" content="./img/ogimg.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="죽은사람꿈, 모르는사람꿈, 좋아하는사람꿈, 유명한사람꿈, 많은사람꿈해몽"
        />
        <meta
          name="twitter:description"
          content="죽은 사람 꿈, 좋아하는 사람 꿈, 모르는 사람 꿈, 싫어하는 사람 꿈, 많은 사람 꿈, 죽은 사람 꿈 해몽, 유명한 사람 꿈, 아는 사람 꿈, 아픈 사람 꿈, 사람이 많은 꿈, 사람 꿈 해몽, 사람 꿈 총들고 있는 사람 꿈, 피묻은 사람 꿈, 사람 꿈 풀이, 흰 옷을 입은 사람 꿈, 죽은 사람 보는 꿈 해몽, 사람 죽는 꿈 해몽, 꿈 해몽 무료 풀이 사람, 죽은 사람 꿈 해몽 모르는 사람 꿈 해몽, 검은 옷을 입은 사람 꿈, 죽은 사람 꿈에 나타난 꿈, 술 취한 사람 꿈 해몽, 사람 많은 꿈 해몽, 사람 꾸미기, 사람 꾸미기 게임, 소복 입은 사람 꿈, 죽은 사람 꿈, 많은 사람 꿈, 아는 사람 꿈, 모르는 사람 꿈, 싫어하는 사람 꿈, 사람 꿈 해몽, 사람 꾸미기 께임, 많은 사람 꿈 해몽, 모르는 사람 꿈 해몽, 싫어하는 사람 꿈 해몽, 벌거벗은 사람 꿈, 처음 보는 사람 꿈, 흰 옷을 입은 사람 꿈, 상복 입은 사람 꿈, 아픈 사람 꿈, 발가벗은 사람 꿈 해몽, 죽은 사람 꿈을 자주 꾸는 이유, 불에 타 죽는 사람 꿈 해몽"
        />
        <meta name="twitter:image" content="./img/ogimg.png" />
      </Helmet>
      <div className="post-wrapper">
        {currentRamens.length > 0 ? (
          <ul>
            {currentRamens.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/catep/person?id=${category.id}`}
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
              src="../img/no-post.png"
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

export default PersonList;
