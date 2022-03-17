import React from "react";
import { ProductCard } from "../../component/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { CategoryImage } from "../../component/CategoryImage/CategoryImage";
 

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-img-wrapper">
            <video
              loop
              muted
              autoplay="autoplay"
              class="hero-img responsive-images"
              style={{ objectFit: "cover" }}
            >
              <source
                src="https://res.cloudinary.com/dhqxln7zi/video/upload/v1647254881/Jewellery_-_34590_1_yhaper.mp4"
                type="video/mp4"
              />
            </video>

            {/* <img
              src="./heroimg.jpg"
              alt=""
              class="hero-img responsive-images"
            /> */}
            <div className="hero-content-wrapper">
              <div className="hero-content">
                <h2 className="large-heading hero-title">
                  Welcome to Dark Jewelry
                </h2>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetue adipisicing elit.
                  Impedit perspiciatis
                </p>
                  <Link to="/allproducts">
                    {" "}
                    <button className="btn btn-primary-outline btn-shop">
                      Shop Now
                    </button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="section product-section">
          <h1 className="center section-heading">New Arrivals</h1>

          <div className="product-container">
          {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
        </div>

        <div className="section category-section">
          <h1 className="center section-heading">Category</h1>

          <div className="category-image-wrapper">
            <CategoryImage />
            <CategoryImage />
            <CategoryImage />
            <CategoryImage />
            <CategoryImage />
            <CategoryImage />
          </div>

          <div className="category-wrapper">
            <div className="category add-box-one">
              <img
                src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1647265604/21_sskl2v.jpg"
                className="responsive-images"
              />
              <div className="category-content center" id="category-content">
                <h1 className="category-title">Platinum Necklace</h1>
                 
                  {" "}
                  <Link to="/allproducts">
                    <button className="btn btn-buy">Shop Now</button>{" "}
                  </Link>{" "}
               
              </div>
            </div>
            <div className="category add-box-two">
              <img
                src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1647265605/22_vnj51r.jpg"
                className="responsive-images"
              />

              <div className="category-content center" id="category-content">
                <h1 className="category-title">Platinum Rings</h1>
                 
                  {" "}
                  <Link to="/allproducts">
                    {" "}
                    <button className="btn btn-buy">Shop Now</button>
                  </Link>{" "}
                 
              </div>
            </div>
            <div className="category add-box-three" id="add-box-three">
              <img
                src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1647266147/19_zwqhmg.jpg"
                className="responsive-images"
                id="mouse-hover"
              />

              <div className="category-content center" id="category-content">
                <h1 className="category-title">Platinum Earrings</h1>
                 
                  {" "}
                  <Link to="/allproducts">
                    {" "}
                    <button className="btn btn-buy">Shop Now</button>{" "}
                  </Link>{" "}
               
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export { Home };
