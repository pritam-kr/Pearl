import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "./Navigation.css";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import {
  useAuthContext,
  useCartContext,
  useWishListContext,
  useStateContext,
} from "../../Context/index";

const Navigation = () => {
  const [sidebarMenu, activeSidebarMenu] = useState(false);

  
  //Search Term handler
  const { setSearchTerm } = useStateContext();
  const [inputKey, setInputKey] = useState("");

  const searchHandler = () => {
    if (setSearchTerm === "") {
      return;
    } else {
      setSearchTerm(inputKey);
      if (inputKey === "") {
        return;
      } else {
        setInputKey("");
        navigate("/allProducts");
      }
    }
  };

  const navigate = useNavigate();
  const {
    state: { cart },
  } = useCartContext();

  const {
    state: { wishlist },
  } = useWishListContext();
  const { token, logoutFun } = useAuthContext();

  const activeLinkHandler = ({isActive}) => ({
    color: isActive ? "var(--primary-color)" : "#201e28e5",
    fontWeight: isActive ? "700" : "500"
  })

  return (
    <>
      <nav className="nav">
        <div className="nav-wrapper">
          <div className="left-div">
            <Link to="/" className="logo">
              Pearl <p className="text-xm">The Dark Jewelry</p>
            </Link>

            <div className="nav-menu">
              <ul>
                <li className="nav-links">
                  <NavLink to="/" style={activeLinkHandler} className="Link" >
                    Home
                  </NavLink>
                </li>
                <li  className="nav-links">
                  <NavLink style={activeLinkHandler} className="Link" to="/allProducts">
                    Shop
                  </NavLink>
                </li>
                <li className="nav-links">
                  <NavLink style={activeLinkHandler} className="Link" to="/mockman">
                    Mockman
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="middle-div search-bar-wrapper">
            <input
              className="input"
              placeholder="Search"
              value={inputKey}
              onChange={(event) => setInputKey(event.target.value)}
            />
            <button className="btn-search" onClick={() => searchHandler()}>
              <BiIcons.BiSearch className="icons" />
            </button>
          </div>

          <div
            className={
              sidebarMenu ? "sidebar-Menu active-nav-menu" : "sidebar-Menu"
            }
          >
            <ul className="sidebar">
              <NavLink to="/" style={activeLinkHandler} className="sidebar-link">
                <BiIcons.BiHome className="sidebar-icon" /> Home
              </NavLink>
              <NavLink to="/allProducts" style={activeLinkHandler} className="sidebar-link">
                <BiIcons.BiBox className="sidebar-icon" /> Product
              </NavLink>
              {token ? <NavLink to="/"  className="sidebar-link" onClick={() => logoutFun()}>
                <BiIcons.BiLogIn className="sidebar-icon" /> Logout
              </NavLink>: <NavLink style={activeLinkHandler} to="/login" className="sidebar-link">
                <BiIcons.BiUser className="sidebar-icon" /> Login
              </NavLink>}
              
            </ul>
          </div>

          <div className="right-div">
            <ul className="nav-ul">
              <li>
                <Link to="/login">
                  <BiIcons.BiUser className="icons navigation-icon" />
                </Link>
              </li>
              <li
                onClick={() => {
                  token ? navigate("/wishlist") : navigate("/login");
                }}
                className="icon-badge"
              >
                <BiIcons.BiHeart className="icons navigation-icon" />
                {token && (
                  <span className="badge-icon-number badge-status">
                    {wishlist?.length}
                  </span>
                )}
              </li>

              <li
                onClick={() => {
                  token ? navigate("/cart") : navigate("/login");
                }}
                className="icon-badge"
              >
                <BiIcons.BiCart className="icons navigation-icon" />
                {token && (
                  <span className="badge-icon-number badge-status">
                    {cart?.length}
                  </span>
                )}
              </li>

              <li
                onClick={() => {
                  logoutFun(), navigate("/logout");
                }}
                className="icon-badge"
              >
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
