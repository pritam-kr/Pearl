import React from "react";
import "./Filter.css";
import { useStateContext } from "../../Context/GlobalContext/StateContext";

const Filter = () => {

    const  {state, getUniqueCategory, dispatch} = useStateContext();

     

  return (
    <>
      <div className="sidebar-fillers">
        <div className="sidebar-box sidebar-header space-between">
          <h3 className="large-heading">Filter</h3> 
          <span className="text-sm clear-filler">Clear</span>
        </div>

        <div className="sidebar-box sidebar-sortby">
          <h3 className="large-heading">Sort By</h3>
          <form>
            <ul>
              <li className="lists">
                <label className="label text-md" id="low-high">
                <input type="radio" for="sortby" name="price" onChange={() =>  dispatch({type: "LOW_TO_HIGH", payload: "LOW_TO_HIGH"})}/>  Price: Low to High 
                </label>
              </li>

              <li className="lists">
                <label className="label text-md" id="High-low">
                <input type="radio" for="sortby" name="price"  onChange={() =>  dispatch({type: "HIGH_TO_LOW", payload: "HIGH_TO_LOW"})}/>  Price: High to Low
                </label>
              </li>
            </ul>
          </form>
        </div>

        <div className="sidebar-box sidebar-price">
          <h3 className="large-heading">Price</h3>

          <h6 className="text-md space-between">
            <span id="min-price">₹ 200</span> <span id="max-price">₹1000</span>
          </h6>
          <input
            className="input range-input"
            id="price-range"
            type="range"
            min="200"
            max="1000"
            step="50"
          />
        </div>
        <div className="sidebar-box sidebar-category">
          <h3 className="large-heading">Category</h3>
          <ul>
            <li className="lists">
              {
              getUniqueCategory.map((eachCategory, i) => <label className="label text-md category-label" key={i}> <input type="checkbox" className="category-checkbox" onChange={() => dispatch({type:"GET_CATEGORY", payload: eachCategory})}/>{eachCategory}</label>)
              }
            </li>
             
          </ul>
        </div>
        <div className="sidebar-box sidebar-rating">
          <h3 className="large-heading">Rating</h3>
          <form>
            <ul>
              <li className="lists">
                
                <label className="label text-md" id="four-rate">
                  <input type="radio" for="four-rate" name="rating" /> 4 Rating & Above 
                </label>
              </li>
              <li className="lists">
                
                <label className="label text-md" id="three-rate">
                  <input type="radio" for="three-rate" name="rating" /> 3 Rating & Above 
                </label>
              </li>
              <li className="lists">
                 
                <label className="label text-md" id="two-rate">
                  <input type="radio" for="two-rate" name="rating" /> 2 Rating & Above 
                </label>
              </li>
              <li className="lists">
                
                <label className="label text-md" id="one-rate">
                  <input type="radio" for="one-rate" name="rating" /> 1 Rating & Above 
                </label>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export { Filter };
