import React from "react";
import { ProductCard } from "../../component/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { CategoryImage } from "../../component/CategoryImage/CategoryImage";
import { CoupleCategory } from "../../component/CoupleCategory/CoupleCategory";

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
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetue adipisicing elit.
                  Impedit perspiciatis
                </p>
                <a href="">
                  <Link to="/allproducts">
                    {" "}
                    <button className="btn btn-primary-outline btn-shop">
                      Shop Now
                    </button>
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="section product-section">
          <h1 class="center section-heading">New Arrivals</h1>

          <div className="product-container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        <div class="section category-section">
          <h1 class="center section-heading">Category</h1>

          <div className="category-image-wrapper">
            <CategoryImage />
            <CategoryImage />
            <CategoryImage />
            <CategoryImage />
            <CategoryImage />
            <CategoryImage />
          </div>

          <div class="category-wrapper">
            <div class="category add-box-one">
              <img
                src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1647265604/21_sskl2v.jpg"
                class="responsive-images"
              />
              <div class="category-content center" id="category-content">
                <h1 class="category-title">Platinum Necklace</h1>
                <a href="./Pages/products.html">
                  {" "}
                  <Link to="/allproducts">
                    <button class="btn btn-buy">Shop Now</button>{" "}
                  </Link>{" "}
                </a>
              </div>
            </div>
            <div class="category add-box-two">
              <img
                src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1647265605/22_vnj51r.jpg"
                class="responsive-images"
              />

              <div class="category-content center" id="category-content">
                <h1 class="category-title">Platinum Rings</h1>
                <a href="./Pages/products.html">
                  {" "}
                  <Link to="/allproducts">
                    {" "}
                    <button class="btn btn-buy">Shop Now</button>
                  </Link>{" "}
                </a>
              </div>
            </div>
            <div class="category add-box-three" id="add-box-three">
              <img
                src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1647266147/19_zwqhmg.jpg"
                class="responsive-images"
                id="mouse-hover"
              />

              <div class="category-content center" id="category-content">
                <h1 class="category-title">Platinum Earrings</h1>
                <a href="./Pages/products.html">
                  {" "}
                  <Link to="/allproducts">
                    {" "}
                    <button class="btn btn-buy">Shop Now</button>{" "}
                  </Link>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export { Home };
