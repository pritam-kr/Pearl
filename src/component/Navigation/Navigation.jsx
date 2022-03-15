import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./Navigation.css";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";

const Navigation = () => {
  const [sidebarMenu, activeSidebarMenu] = useState(false);
  return (
    <>
      <nav className="nav">
        <div className="nav-wrapper">


          <div className="left-div">

            <div className="logo">Logo</div>

            <div className="nav-menu">
              <ul>
                <li className="nav-links"> <Link to="/">Home</Link></li>
                <li className="nav-links"><Link to="/allproducts">Shop</Link></li>
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
            <ul className="sidebar-links">
              <li>Home</li>
              <li>Product</li>
              <li>Category</li>
              <li>Shop</li>
              <li>Payal</li>
            </ul>
          </div>

          <div className="right-div">
            <ul className="nav-ul">
              <li>
               <Link to="/login"> <BiIcons.BiUser className="icons navigation-icon" /> </Link>
              </li>
              <li>
               <Link to="/wishlist"> <BiIcons.BiHeart className="icons navigation-icon" /></Link>
              </li>

              <li>
              <Link to="/cart"> <BiIcons.BiCart className="icons navigation-icon" /></Link>
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
