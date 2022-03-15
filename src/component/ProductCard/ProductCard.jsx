import * as BiIcons from "react-icons/bi";
import React from "react"
import './ProductCard.css'

const ProductCard = () => {
    return (
        <>
            <div class="images-card badge-card product-card">
                <img class="card-img" src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1647168585/pandant4_yjefn9.png" />

                <div class="card-content">
                    <h2 class="card-title product-title">Platinum Jewelry</h2>
                    <h1 class="card-price product-price">₹ 9999/- <span class="discount-price">₹
                        19999/-</span></h1> 
                    <p className="text-sm">Rating: </p>
                </div>

                <div class="card-footer">
                    <div class="move-cart-buttons">
                        <a href="/Pages/cart.html"> 
                         <button class="btn btn-primary btn-move-cart text-md"><i
                            class="fa-solid fa-cart-shopping cart-icon"></i> <BiIcons.BiCart/> Add to Cart</button>
                             </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export {ProductCard}