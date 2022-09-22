import React from "react";
import { Link } from "react-router-dom";

const UserProfile = ({image,name,  occupation, company, following, followers, linkToFullProfile}) => {
    return(
        <div className="homepage__user-profile">
            <div className="homepage-user-profile--top">
                <div className="homepage-user-profile__image">
                    <img src={image} alt="user _image" className="homepage-user-profile__image--img" />
                </div>
            </div>
                <div className="homepage-user-profile__body">
                    <h2 className="homepage-user-profile__name">{name}</h2>
                    <p className="homepage-user-profile__about-occupation">{occupation} at {company}</p>
                </div>
                <p className="homepage-user-profile__charisma">
                    <span className="homepage-user-profile__meta--text">followers</span>
                    <span className="homepage-user-profile__meta--number">{followers}</span>
                </p>
                <p className="homepage-user-profile__charisma">
                    <span className="homepage-user-profile__meta--text">following</span>
                    <span className="homepage-user-profile__meta--number">{following}</span>
                </p>
                <Link className="homepage-user-profile__link" to={linkToFullProfile}>view profile</Link>
            
        </div>
    )
}
export default UserProfile;