import React from "react";
import { useCartContext } from "../../Context";
import "./style.css";
import * as RiIcons from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const {
    state: { orderDetails },
  } = useCartContext();

  const { amountPaid, paymentId, paymentMode, quantity } = orderDetails || {};

  const navigate = useNavigate();

  const shopNowHandler = () => {
    navigate("/allProducts")
    window.location.reload();
  }

  return (
    <div className="empty-container">
      <div className="empty-wrapper">
        <div class="card-box text-cardbox">
          <div class="text-card-header">
            <RiIcons.RiCheckboxCircleFill className="icons check-icons" />
            <h2 class="card-title"> Payment Successful </h2>
          </div>

          <ul className="payment-details">
            <li className="lists text-md">
              <span>Payment Mode: </span> <span>{paymentMode}</span>
            </li>
            <li className="lists text-md">
              <span>Transaction ID: </span> <span>{paymentId}</span>
            </li>
            <li className="lists text-md">
              <span>
                <b>Amount Paid:</b>{" "}
              </span>{" "}
              <span>
                <b> ₹ {amountPaid} /-</b>
              </span>
            </li>
          </ul>

          <button
            className="btn btn-primary"
            onClick={() => shopNowHandler()}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export { Payment };
