import React from "react"
import "./Filter.css"

const Filter = () => {
    return (
        <>
        <div className="sidebar-fillers">
                <div className="sidebar-box sidebar-header space-between">
                    <h3 className="large-heading">Filter</h3> <span className="text-sm clear-filler">Clear</span>
                </div>

                <div className="sidebar-box sidebar-sortby">
                    <h3 className="large-heading">Sort By</h3>
                    <form>
                        <ul>
                            <li className="lists">
                                <input type="radio" for="low-high" name="price" / > <label className="label text-md"
                                    id="low-high">Price: Low to High</label>
                            </li>
                            <li className="lists">
                                <input type="radio" for="High-low" name="price" /> <label className="label text-md"
                                    id="High-low">Price: High to Low</label>
                            </li>
                        </ul>
                    </form>
                </div>

                <div className="sidebar-box sidebar-price">
                    <h3 className="large-heading">Price</h3>

                    <h6 className="text-md space-between">
                        <span id="min-price">₹ 200</span> <span id="max-price">₹1000</span>
                    </h6>
                    <input className="input range-input" id="price-range" type="range" min="200" max="1000" step="50" />

                </div>
                <div className="sidebar-box sidebar-category">
                    <h3 className="large-heading">Category</h3>
                    <ul>
                        <li className="lists"><input className="" type="checkbox" /> <label className="label text-md">Platinum
                                Jewelry</label></li>
                        <li className="lists"><input className="" type="checkbox" /> <label className="label text-md">Golden
                                Jewelry</label></li>
                    </ul>
                </div>
                <div className="sidebar-box sidebar-rating">
                    <h3 className="large-heading">Rating</h3>
                    <form>
                        <ul>
                            <li className="lists">
                                <input type="radio" for="four-rate" name="rating" /> <label className="label text-md"
                                    id="four-rate">4 Rating & Above</label>
                            </li>
                            <li className="lists">
                                <input type="radio" for="three-rate" name="rating" /> <label className="label text-md"
                                    id="three-rate">3 Rating & Above</label>
                            </li>
                            <li className="lists">
                                <input type="radio" for="two-rate" name="rating" /> <label className="label text-md"
                                    id="two-rate">2 Rating & Above</label>
                            </li>
                            <li className="lists">
                                <input type="radio" for="one-rate" name="rating" /> <label className="label text-md"
                                    id="one-rate">1 Rating & Above</label>
                            </li>
                        </ul>
                    </form>
                </div>
                
            </div>
        </>
    )
}

 export {Filter}