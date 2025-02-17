import React from "react";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <div>
      {/* <Link to={`https://booking.naver.com/booking/13/bizes/111623?area=bmp`}>
        <img
          class="ad_img"
          src="/img/ad1.png"
          alt="용산미용실"
          width={`100%`}
          style={{ marginTop: 0 }}
        />
      </Link> */}
      <Link
        to={`https://open.kakao.com/o/swjfRPTg`}
        target={`_blank`}
        className="ad_link"
      >
        <b>[배너 광고문의]</b>
      </Link>
      <Link to={`https://jianhomecare.com`}>
        <img
          class="ad_img"
          src="/img/ad2.png"
          alt="사당동 싱크대막힘"
          width={`100%`}
          style={{ marginTop: 0 }}
        />
      </Link>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default Ads;
