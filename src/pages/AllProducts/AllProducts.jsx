import React, { useEffect } from "react";
import "./AllProducts.css";
import { Filter, ProductCard } from "../../component/index";
import { useStateContext } from "../../Context/GlobalContext/StateContext";
import { useCartContext } from "../../Context";
import { useState } from "react";

const AllProducts = () => {
  const { filteredProductList } = useStateContext();
  const { loader } = useCartContext();
  const [gettingLoader, setGettingLoader] = useState(loader);

  useEffect(() => {
    setGettingLoader(loader);
  }, [loader]);

  return (
    <div className="all-products-section">
      <div className="products-wrapper">
        <Filter />

        <div className="all-products">
          <h3 className="large-heading">Showing all Products</h3>

          <div className="products-container">
            {filteredProductList.length === 0 ? (
              <h2 className="center">Loading...</h2>
            ) : (
              filteredProductList.map((eachProduct) => {
                return (
                  <ProductCard
                    eachProduct={eachProduct}
                    key={eachProduct._id}
                    gettingLoader={gettingLoader}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { AllProducts };
