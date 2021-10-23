import React from "react";

import "./HeaderBanner.scss";

const HeaderBanner = (props) => {
  const { data } = props;
  return (
    <div className="HeaderBanner">
      <h1 className="HeaderBanner__title">{data?.attributes?.title}</h1>
      <div
        className="HeaderBanner__description"
        dangerouslySetInnerHTML={{ __html: data?.attributes?.description }}
      ></div>
    </div>
  );
};

export default HeaderBanner;
