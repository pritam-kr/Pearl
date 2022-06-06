import React from "react";
import { useCartContext } from "../../Context/index";
import { CartCard, Empty } from "../../component/index";
import "./MyCart.css";
import { productQuantity, totalPrice, totalMRP } from "./PriceDetails";
import { priceFormatter } from "../../utils/priceFormatter";
import { usePayment } from "../../Hooks/usePayment";
 


const MyCart = () => {
  const {state: { cart }} = useCartContext();

 

  //get total Product quantity
  const getTotalQuantity = cart.reduce(productQuantity, 0);

  // get total price
  const getTotalPrice = cart.reduce(totalPrice, 0);

  // get total MRP
  const getTotalMRP = cart.reduce(totalMRP, 0);

  //total discount from MRP
  const totalDiscount = (MRP, currentPrice) => MRP - currentPrice;
  const getTotalDiscount = totalDiscount(getTotalMRP, getTotalPrice);

  // Get delivery charges
  const deliveryCharge = (totalPrice) => (totalPrice >= 25000 ? 1000 : 0);
  const getDeliveryCharge = deliveryCharge(getTotalPrice);

  //get tax price
  const taxPrice = (totalPrice, tax) => (totalPrice * tax) / 100;

  const getTaxPrice = taxPrice(getTotalPrice, 20);

  //get final price
  const finalPrice = (totalPrice, deliveryCharge, tax) =>
    totalPrice + tax + deliveryCharge;
  const getFinalPrice = finalPrice(
    getTotalPrice,
    getDeliveryCharge,
    getTaxPrice
  );

  const orderDetails = {
    quantity: getTotalQuantity,
    totalPrice: getFinalPrice,
    cartItem: cart,
  }


  const { displayRazorpay } = usePayment()



  return (
    <>
      {cart?.length === 0 ? <Empty page={"cart"}/> : <div className="section cart-section">
        <h3 className="large-heading page-title center">My Cart </h3>

        <div className="cart-wrapper">
          <div className="product-list-wrapper">
            <CartCard getTotalQuantity={getTotalQuantity}/>
          </div>

          <div className="price-details">
            <h1 className="large-heading">Price Details</h1>

            <div className="price-info">
              <ul>
                <li className="lists space-between">
                  <span>Total Quantity</span>
                  <span>{getTotalQuantity}</span>
                </li>
                <li className="lists space-between">
                  <span>Total Price</span>{" "}
                  <span>₹ {priceFormatter(getTotalPrice)}</span>
                </li>
                <li className="lists space-between">
                  <span>Delivery Charge</span>{" "}
                  <span>₹ {priceFormatter(getDeliveryCharge)} </span>
                </li>
                <li className="lists space-between">
                  <span>Total MRP</span>{" "}
                  <span>₹ {priceFormatter(getTotalMRP)} </span>
                </li>
                <li className="lists space-between">
                  <span>Total Discount</span>{" "}
                  <span>₹ {priceFormatter(getTotalDiscount)} </span>
                </li>
                <li className="lists space-between">
                  <span>GST</span> <span>₹ {priceFormatter(getTaxPrice)} </span>
                </li>
                <li className="lists space-between">
                  <span>
                    <b>Final Price</b>
                  </span>{" "}
                  <span>₹ {priceFormatter(getFinalPrice)} </span>
                </li>
              </ul>

              <button className="btn btn-primary" onClick={() => displayRazorpay({orderDetails : orderDetails })}>Pay Now</button>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export { MyCart };
