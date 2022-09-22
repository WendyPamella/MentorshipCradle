import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = ({ icon, linkDirection, linkText }) => {
  return (
    <Link className="header__nav--link" to={linkDirection}>
      <span className="header__link">{icon}</span>
      <p className="header__link--text">{linkText}</p>
    </Link>
  );
};

export default HeaderLink;
