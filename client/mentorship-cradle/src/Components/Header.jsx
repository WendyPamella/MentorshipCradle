import React from "react";
import HeaderLink from "./HeaderLink";
import {
  Home,
  Search,
  Company,
  Rocket,
  UserCircle,
  BellCancelled,
  Envelope,
  Badge,
} from "../Icons/Icons";
import ProfileLink from "./ProfileLink";
import userPhoto from "../Assets/Images/user-2.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        {/* logo */}
        <div className="header__logo-box">
          <h2 className="logo-text">MC</h2>
        </div>
        {/* searchbar */}
        <form action="get" className="header__form">
          <input
            type="search"
            placeholder="search..."
            name=""
            id=""
            className="header__form--input"
          />
          <button className="header__form--button">
            <Search />
          </button>
        </form>
        {/* navigation */}
        <nav className="header__nav">
          <ol className="header__nav--list">
            <li className="header__nav--item">
              <HeaderLink linkText="home" linkDirection="/main-page" icon={<Home />} />
            </li>
            <li className="header__nav--item">
              <HeaderLink
                linkText="Events"
                linkDirection="/"
                icon={<Company />}
              />
            </li>
            <li className="header__nav--item">
              <HeaderLink
                linkText="course work"
                linkDirection="/"
                icon={<Rocket />}
              />
            </li>
            <li className="header__nav--item">
              <HeaderLink
                linkText="mentor spotlight"
                linkDirection="/mentor-spotlight"
                icon={<UserCircle />}
              />
            </li>
            <li className="header__nav--item">
              <HeaderLink
                linkText="mentee stories"
                linkDirection="/"
                icon={<Badge />}
              />
            </li>
            <li className="header__nav--item">
              <HeaderLink
                linkText="messages"
                linkDirection="/"
                icon={<Envelope />}
              />
            </li>
            <li className="header__nav--item">
              <HeaderLink
                linkText="notifications"
                linkDirection="/"
                icon={<BellCancelled />}
              />
            </li>
            {/* profile link */}
            <li className="header__nav--item">
              <ProfileLink image={userPhoto} userName="jane" />
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};
export default Header;
