import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";
const data = [
  {
    label: "HOME",
    to: "/portfolio-website",
  },
  {
    label: "ABOUT ME",
    to: "/portfolio-website/about",
  },
  {
    label: "SKILLS",
    to: "/portfolio-website/skills",
  },
  {
    label: "RESUME",
    to: "/portfolio-website/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio-website/projects",
  },
  {
    label: "CONTACT",
    to: "/portfolio-website/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleNavItemClick = () => {
    // Close the navbar when a navigation item is clicked
    setToggleIcon(false);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul
          className={`navbar__container__menu ${toggleIcon ? "active" : ""} `}
        >
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={handleNavItemClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
