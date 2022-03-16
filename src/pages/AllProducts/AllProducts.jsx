import React from "react";
import "./AllProducts.css"
import { Filter } from "../../component/Filter/Filter";
import { ProductCard } from "../../component/ProductCard/ProductCard";

const AllProducts = () => {
    return (
        <div className="all-products-section">
            <div className="products-wrapper">

                <Filter />

                <div className="all-products">
                    <h3 className="large-heading">Showing all Products</h3>

                    <div className="products-container">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { AllProducts };
