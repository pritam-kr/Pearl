import React, { useEffect } from "react";
import "./AllProducts.css";
import { Filter, ProductCard } from "../../component/index";
import { useStateContext } from "../../Context/GlobalContext/StateContext";
import { useCartContext } from "../../Context";
import { useState } from "react";
import * as BiIcons from "react-icons/bi";
 

const AllProducts = () => {
  const { filteredProductList, searchTerm } = useStateContext();
  const { loader } = useCartContext();
  const [gettingLoader, setGettingLoader] = useState(loader);
  const [filter, setFilter] = useState(false)


  useEffect(() => {
    setFilter(filter)
  }, [setFilter])


  useEffect(() => {
    setGettingLoader(loader);
  }, [loader]);

  return (
    <div className="all-products-section">

      <div className="products-wrapper">

        <div className={!filter ? "filter-wrapper" : "filter-wrapper active-sidebar-filter"}>
          <Filter />
        </div>

        <div className="all-products">
          <h3 className="large-heading space-between">Showing all Products <span className="filter-icon-wrapper" onClick={() => setFilter(!filter)}><BiIcons.BiFilter className="icons filter-icon" /></span></h3>

          <div className="products-container">
            {filteredProductList.length === 0 ? (
              <h2 className="center">There is no product.</h2>
            ) : (
              filteredProductList.filter((eachProduct) => {
                if(searchTerm === ""){
                  return eachProduct
                }else if(eachProduct.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return eachProduct
                }
              }).map((eachProduct) => {
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
