import React from "react";
import { Link } from "react-router-dom";

import "./SuccessPage.scss";

function SuccessPage() {
  return (
    <div className="SuccessPage">
      <div className="SuccessPage__container">
        <img
          src="https://i.ibb.co/Jmr8z84/heart.png"
          alt="heart"
          className="SuccessPage__heart"
        />
        <h1 className="SuccessPage__title">Success!</h1>
        <p>Thank you for your film review.</p>
        <p>If you like to review more films, please do so here</p>
        <Link to="/">
          <div className="SuccessPage__button">Review Film</div>
        </Link>
      </div>
      <div className="SuccessPage__text"></div>
    </div>
  );
}

export default SuccessPage;
