import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useStateContext } from "../../Context/GlobalContext/StateContext";
import { FeaturedCardProduct, CategoryImage } from "../../component/index";
import { CategoryContextProvider } from "../../Context";

const Home = () => {
  useEffect(() => (document.title = "PEARL - HOME"), []);

  const {
    state: { featured },
  } = useStateContext();

  return (
    <>
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-img-wrapper">
            <video
              loop
              muted
              autoPlay="autoPlay"
              className="hero-img responsive-images"
              style={{ objectFit: "cover" }}
            >
              <source
                src="https://res.cloudinary.com/dhqxln7zi/video/upload/v1647254881/Jewellery_-_34590_1_yhaper.mp4"
                type="video/mp4"
              />
            </video>

            <div className="hero-content-wrapper">
              <div className="hero-content">
                <h2 className="large-heading hero-title">
                  Welcome to Dark Jewelry
                </h2>
                <p className="text-lg">
                  Pearl is an Indian platinum Jewelry brand.
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
        <div className="product-section">
          <h1 className="center section-heading">New Arrivals</h1>

          <div className="product-container">
            {featured.slice(0, 5).map((eachProduct) => {
              return (
                <FeaturedCardProduct
                  eachProduct={eachProduct}
                  key={eachProduct._id}
                />
              );
            })}
          </div>
        </div>

        <div className="category-section">
          <h1 className="center section-heading">Category</h1>

          <div className="product-container category-container">
            <CategoryContextProvider>
              <CategoryImage />
            </CategoryContextProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };
