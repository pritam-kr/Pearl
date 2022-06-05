import React, {useEffect} from "react";
import "./Sp.css";
import { useParams, useNavigate } from "react-router-dom";
import { useStateContext, useCartContext, useAuthContext, useWishListContext } from "../../Context/index";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import { priceFormatter } from "../../utils/priceFormatter"
import { Gif } from "../../component/index"

const SingleProduct = () => {
    useEffect(() => document.title = "Product", [])

    const navigate = useNavigate()

    const {addToWishlist, state: {wishlist}, removeFromWishlist} = useWishListContext()

    const {token} = useAuthContext()
     
    const { addToCart, state } = useCartContext()
    const { cart } = state


    const { productID } = useParams();
    const {
        state: { products },
    } = useStateContext();

    // Finding product for single product
    const isProduct = products?.find(
        (eachProduct) => eachProduct._id === productID
    );

    return (
        isProduct === undefined ? <h1 style={{ marginTop: "10rem" }}><Gif /></h1> : <div className="single-product-container">
            <div className="single-product-wrapper">
                <div className="product-single-image">
                    <img
                        src={isProduct?.image}
                        alt={isProduct?.title}
                        className="responsive-images"
                    />
                </div>

                <div className="single-product-info">

                    <header>
                        <h1 className="product-title">{isProduct?.title}</h1>
                        <ul className="basic-info">
                            <li className="lists">#{isProduct?.categoryName}</li>
                            <li className="lists"> <BiIcons.BiStar className="rating-start" />  {isProduct?.rating}/5</li>
                            <li className="lists">karat: {isProduct?.karat} </li>
                        </ul>
                        <h1 className="card-price product-price"> ₹ {isProduct?.currentPrice} <span className="discount-price">₹ {priceFormatter(isProduct?.originalPrice)}/-</span></h1>
                        <p className="product-description">{isProduct?.description}</p>
                    </header>


                    <div className="card-footer">
                         {cart?.find((eachProduct) => eachProduct._id === isProduct._id) ? <button className="btn btn-primary btn-move-cart text-sm center" onClick={() => navigate('/cart')}>Go to cart</button> : <button className="btn btn-primary btn-move-cart text-sm center" onClick={() => token ?  addToCart(isProduct) : navigate("/login ")}>Add to cart</button>}
                    </div>

                    {wishlist?.find((eachProduct) => eachProduct._id === isProduct._id) ? <button className="btn-wishlist" ><FaIcons.FaHeart  className="wishlist-icon"  style={{ color: "red" }} onClick={() => {removeFromWishlist(isProduct)}}/></button> : <button className="btn-wishlist" onClick={() =>  token ? addToWishlist(isProduct) : navigate("/login")}>
                        <FaIcons.FaHeart className="wishlist-icon" />
                    </button>}
                </div>
            </div>
        </div>
    );
};

 
export { SingleProduct };
