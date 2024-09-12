import React from "react";
import { Link } from "react-router-dom";

const ProfileLink = ({ image, linkToProfile, userName }) => {
  return (
    <Link className="profile-link" to={linkToProfile}>
      <span className="profile-link__image">
        <img
          src={image}
          alt="user _photo"
          className="profile-link__image--img"
        />
      </span>
      <p className="profile-link__name">{userName}</p>
    </Link>
  );
};
export default ProfileLink;
