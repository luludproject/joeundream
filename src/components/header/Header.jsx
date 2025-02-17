import React, { useEffect, useState } from "react";
import "./header.css";
import { FaSearch } from "react-icons/fa";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Search from "../search/Search";
import allDatas from "../../data/allDatas";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim() !== "") {
      const cleanedQuery = query.trim().replace(/\s+/g, " ");
      navigate(`/search?query=${cleanedQuery}`);
    }
    setQuery("");
  };

  return (
    <div className="header">
      <header>
        <Link to={`/tarot`} className="tarot">
          타로카드 뽑기🃏
        </Link>
        <h1>
          <Link to={`/`}>무료 꿈해몽</Link>
        </h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="꿈을 한 단어로 검색해주세요"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-icon" title="꿈검색">
            <FaSearch />
          </button>
        </form>
        <ul className="second-ul">
          <li>
            <Link to={`/nature`}>자연</Link>
          </li>
          <li>
            <Link to={`/food`}>음식</Link>
          </li>
          <li>
            <Link to={`/action`}>행동</Link>
          </li>
          <li>
            <Link to={`/etc`}>기타</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={`/person`}>사람</Link>
          </li>
          <li>
            <Link to={`/body`}>신체</Link>
          </li>
          <li>
            <Link to={`/animal`}>동물</Link>
          </li>
          <li>
            <Link to={`/plant`}>식물</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
