import * as BiIcons from "react-icons/bi";
import React from "react"
import './ProductCard.css'

const ProductCard = () => {
    return (
        <>
            <div className="images-card badge-card product-card">
                <img className="card-img" src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1647168585/pandant4_yjefn9.png" />

                <div className="card-content">
                    <h2 className="card-title product-title">Platinum Jewelry</h2>
                    <h1 className="card-price product-price">₹ 9999/- <span className="discount-price">₹
                        19999/-</span></h1>
                    <p className="text-sm">Rating: </p>
                </div>

                <div className="card-footer">
                    <div className="move-cart-buttons">

                        <button className="btn btn-primary btn-move-cart text-md"><i
                            className="fa-solid fa-cart-shopping cart-icon"></i> <BiIcons.BiCart /> Add to Cart</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export { ProductCard }