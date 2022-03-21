import React from "react";
import { WishListCard } from "../../component/index"
import { useWishListContext } from "../../Context/index"
import "./Wishlist.css"

const WishList = () => {

    const {state: {wishlist}} = useWishListContext()

    return (
        <div className="section wishlist-section">
            <div className="product-list-wrapper">
                <h3 className="large-heading page-title">WishList</h3>
            </div>
            <div className="wishlist-wrapper">

                {wishlist.map((eachProduct) => {
                    return <WishListCard eachProduct={eachProduct} />
                })}
               
            </div>
        </div>
    );
};

export { WishList };
