import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import "./Navigation.css";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import {useAuthContext} from "../../Context/index"
 

const Navigation = () => {
  const [sidebarMenu, activeSidebarMenu] = useState(false);
  const {token} = useAuthContext()
  const navigate = useNavigate()

  return (
    <>
      <nav className="nav">
        <div className="nav-wrapper">
          <div className="left-div">

             <div className="logo">Pearl <p className="text-xm">The Dark Jewelry</p></div>

            <div className="nav-menu">
              <ul>
                <li className="nav-links"><Link to="/">Home</Link></li>
                <li className="nav-links"><Link to= "/allProducts" >Shop</Link></li>
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
              <li onClick={() => token ? navigate("/wishlist"): navigate("/login")}>
                 <BiIcons.BiHeart className="icons navigation-icon" /> 
              </li>

              <li onClick={() => token ? navigate("/cart"): navigate("/login")}>
              <BiIcons.BiCart className="icons navigation-icon" />
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
