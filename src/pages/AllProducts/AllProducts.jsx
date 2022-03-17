import React from "react";
import "./AllProducts.css"
import { Filter } from "../../component/Filter/Filter";
import { ProductCard } from "../../component/ProductCard/ProductCard";
import { useStateContext } from "../../Context/GlobalContext/StateContext"


const AllProducts = () => {

    const { filteredProductList } = useStateContext()

    return (
        <div className="all-products-section">
            <div className="products-wrapper">

                <Filter />

                <div className="all-products">
                    <h3 className="large-heading">Showing all Products</h3>

                    <div className="products-container">

                        {filteredProductList.length === 0 ? <h2 className="center">Loading...</h2> : 
                            filteredProductList.map((eachProduct) => {

                                return (
                                    <ProductCard eachProduct ={eachProduct} />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export { AllProducts };
