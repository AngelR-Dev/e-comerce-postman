import React from "react";
import { Link, NavLink } from "react-router-dom";
import './styles/header.css'

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link className="header__title" to='/'>e-commerce</Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink className="header__link" to='/login'>
              <i className="fa-solid fa-user"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__link" to='/purchases'>
            <i className="fa-solid fa-box"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__link" to='/cart'>
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

