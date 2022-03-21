import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import { useCartContext, useWishListContext } from "../../Context/index";

const Navigation = () => {
  const [sidebarMenu, activeSidebarMenu] = useState(false);
  const navigate = useNavigate();
  const {
    state: { cart },
  } = useCartContext();



  const {state: {wishlist}} = useWishListContext() 

  console.log(cart)
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
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-links">
                  <Link to="/allProducts">Shop</Link>
                </li>
                <li className="nav-links"><Link to="/mockman">Mockman</Link></li>
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
                <Link to="/login">
                  {" "}
                  <BiIcons.BiUser className="icons navigation-icon" />{" "}
                </Link>
              </li>
              <li onClick={() => navigate("/wishlist")} className="icon-badge">
              <BiIcons.BiHeart className="icons navigation-icon" /> 
                {wishlist.length !== 0 && <span className="badge-icon-number badge-status">{wishlist.length}</span>}
              </li>

              <li onClick={() => navigate("/cart")} className="icon-badge">
                <BiIcons.BiCart className="icons navigation-icon" />{" "}
               {cart.length !== 0 && <span className="badge-icon-number badge-status">{cart.length}</span>}
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
