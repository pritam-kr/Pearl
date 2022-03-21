import React from "react";
import { useCartContext } from "../../Context/index";
import { CartCard } from "../../component/index";
import "./MyCart.css";

const MyCart = () => {
  const {
    state: { cart },
  } = useCartContext();

  return (
    <>
      <div className="section cart-section">
        <h3 className="large-heading page-title center">My Cart </h3>

        <div className="cart-wrapper">
          <div className="product-list-wrapper">
            <CartCard />
          </div>

          <div className="price-details">
            <h1 className="large-heading">Price Details</h1>

            <div className="price-info">
              <ul>
                <li className="lists space-between"><span>Total Quantity</span><span>10</span></li>
                <li className="lists space-between"><span>Price</span> <span>20000</span></li>
                <li className="lists space-between"><span>Delivery Charge</span> <span>500</span></li>
                <li className="lists space-between"><span>Discount</span> <span>500</span></li>
                <li className="lists space-between"><span><b>Final Price</b></span> <span>19523</span></li>
              </ul>

              <button className="btn btn-primary">Checkout</button>
            </div>

          </div>
          
        </div>
      </div>
    </>
  );
};

export { MyCart };
