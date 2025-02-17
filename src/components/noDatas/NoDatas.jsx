import React from "react";
import "./noDatas.css";

const NoDatas = () => {
  return (
    <div className="nodata-wrapper">
      <img
        src="/img/no-post.png"
        alt="게시물이 없습니다"
        className="no-post-img"
      />
      <h2>해당 게시물이 존재하지 않습니다.</h2>
    </div>
  );
};

export default NoDatas;
