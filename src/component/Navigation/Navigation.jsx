import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import {
  useAuthContext,
  useCartContext,
  useWishListContext,
} from "../../Context/index";

const Navigation = () => {
  const [sidebarMenu, activeSidebarMenu] = useState(false);
  const navigate = useNavigate();
  const {
    state: { cart },
  } = useCartContext();

  const {
    state: { wishlist },
  } = useWishListContext();
  const { token, logoutFun} = useAuthContext();

  return (
    <>
      <nav className="nav">
        <div className="nav-wrapper">
          <div className="left-div">
            <div className="logo">
              Pearl <p className="text-xm">The Dark Jewelry</p>
            </div>

            <div className="nav-menu">
              <ul>
                <li className="nav-links">
                  <Link className="Link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-links">
                  <Link className="Link" to="/allProducts">
                    Shop
                  </Link>
                </li>
                <li className="nav-links">
                  <Link className="Link" to="/mockman">
                    Mockman
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="middle-div search-bar-wrapper">
            <input className="input searchbar" placeholder="Search" />
          </div>

          <div
            className={
              sidebarMenu ? "sidebar-Menu active-nav-menu" : "sidebar-Menu"
            }
          >
            <ul className="sidebar">
              <li className="sidebar-link">
                <BiIcons.BiHome className="sidebar-icon" /> Home
              </li>
              <li className="sidebar-link">
                <BiIcons.BiBox className="sidebar-icon" /> Product
              </li>
              <li className="sidebar-link">
                <BiIcons.BiCategory className="sidebar-icon" /> Category
              </li>
              <li className="sidebar-link">
                <BiIcons.BiUser className="sidebar-icon" /> Login
              </li>
              <li className="sidebar-link">
                <BiIcons.BiLogIn className="sidebar-icon" /> Signup
              </li>
            </ul>
          </div>

          <div className="right-div">
            <ul className="nav-ul">
              <li>
                <Link to="/login">
                  {" "}
                  <BiIcons.BiUser className="icons navigation-icon" />{" "}
                </Link>
              </li>
              <li onClick={() => {token ? navigate("/wishlist"): navigate('/login')}} className="icon-badge">
                <BiIcons.BiHeart className="icons navigation-icon" />
                {wishlist?.length > 0 && (
                  <span className="badge-icon-number badge-status">
                    {" "}
                    {wishlist?.length}
                  </span>
                )}
              </li>

              <li onClick={() => {token ? navigate("/cart"): navigate('/login')}} className="icon-badge">
                <BiIcons.BiCart className="icons navigation-icon" />{" "}
                {cart?.length > 0 && (
                  <span className="badge-icon-number badge-status">
                    {cart?.length}{" "}
                  </span>
                )}
              </li>

              <li onClick={() => {logoutFun(), navigate("/logout")}} className="icon-badge">
                {token && (
                  <BiIcons.BiLogOut className="icons navigation-icon" />
                )}
              </li>

              <li className="hamburger-menu">
                <RiIcons.RiBarChartHorizontalLine
                  className="icons navigation-icon"
                  onClick={() => activeSidebarMenu(!sidebarMenu)}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navigation };
