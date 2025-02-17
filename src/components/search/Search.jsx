import React, { useState } from "react";
import "./search.css";
import allDatas from "../../data/allDatas";
import { Link, useLocation } from "react-router-dom";
import NoDatas from "../noDatas/NoDatas";
import { Helmet } from "react-helmet-async";
import Pagination from "@mui/material/Pagination";

const Search = () => {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get("query");

  const getTitles = allDatas.filter((data) => data.title.includes(searchParam));

  const searchData = allDatas.map((data) => data.title.includes(searchParam));
  const isTrueData = searchData.find((data) => data);

  const [currentPage, setCurrentPage] = React.useState(1); // 현재 페이지
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  const ramenPerPage = 5; // 페이지당 리스트 개수
  const currentPageLast = currentPage * ramenPerPage; // 현재 페이지의 처음
  const currentPageFirst = currentPageLast - ramenPerPage; /// 현재 페이지의 끝
  const currentRamens = getTitles.slice(currentPageFirst, currentPageLast);
  const pageNumber = Math.ceil(getTitles.length / ramenPerPage);

  return (
    <>
      <Helmet>
        <title>{searchParam}무료 꿈해몽 풀이 - 조은드림</title>
        <link
          rel="canonical"
          href="https://joeundream.com/search?query=무료꿈해몽"
        />
      </Helmet>
      <main className="search-result">
        {isTrueData === true ? (
          <ul>
            {currentRamens.map((data) => (
              <li key={data.id}>
                <Link
                  to={`/${data.category2}/${data.menu}?id=${data.id}`}
                  className="common-link"
                >
                  <h2 className="common-h2">- {data.title}</h2>
                  <p className="common-p">
                    {data.description.substring(0, 80)}...
                    <span style={{ fontWeight: "bold" }}>[자세히 보기]</span>
                  </p>
                </Link>
              </li>
            ))}
            <Pagination
              style={{ display: "flex", justifyContent: "center" }}
              count={pageNumber}
              shape="rounded"
              onChange={handleChange}
            />
          </ul>
        ) : (
          <div>
            <NoDatas />
          </div>
        )}
      </main>
    </>
  );
};

export default Search;
