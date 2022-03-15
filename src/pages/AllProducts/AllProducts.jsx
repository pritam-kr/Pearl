import React from "react";
import "./AllProducts.css"
import { Filter } from "../../component/Filter/Filter";
import { ProductCard } from "../../component/ProductCard/ProductCard";

const AllProducts = () => {
    return (
        <div class="all-products-section">
            <div class="products-wrapper">

                <Filter />

                <div class="all-products">
                    <h3 class="large-heading">Showing all Products</h3>

                    <div class="products-container">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { AllProducts };
