import React from "react";
import "./notFound.css";

const NotFound = () => {
  return (
    <main className="not-found">
      <img src="/img/404img.png" alt="페이지를 찾을 수 없습니다." />
      <h1>404 - 페이지를 찾을 수 없음</h1>
      <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
    </main>
  );
};

export default NotFound;
