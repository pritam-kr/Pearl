import React from "react";
import "./Filter.css";
import { useStateContext } from "../../Context/GlobalContext/StateContext";

const Filter = () => {
  const { state, getUniqueCategory, dispatch } = useStateContext();
  const {
    filters: { priceRange, maxPrice },
  } = state;

  return (
    <>
      <div className="sidebar-fillers">
        <div className="sidebar-box sidebar-header space-between">
          <h3 className="large-heading">Filter</h3>
          <span
            className="text-sm clear-filler"
            onClick={() => dispatch({ type: "CLEAR_FILTER" })}
          >
            Clear
          </span>
        </div>

        <div className="sidebar-box sidebar-sortby">
          <h3 className="large-heading">Sort By</h3>
          <form>
            <ul>
              <li className="lists">
                <label className="label text-sm" id="low-high">
                  <input
                    type="radio"
                    htmlFor="sortBy"
                    name="price"
                    checked={
                      state.filters.sortBy &&
                      state.filters.sortBy === "LOW_TO_HIGH"
                    }
                    onChange={() =>
                      dispatch({ type: "LOW_TO_HIGH", payload: "LOW_TO_HIGH" })
                    }
                  />{" "}
                  Price: Low to High
                </label>
              </li>

              <li className="lists">
                <label className="label text-sm" id="High-low">
                  <input
                    type="radio"
                    htmlFor="sortBy"
                    name="price"
                    checked={
                      state.filters.sortBy &&
                      state.filters.sortBy === "HIGH_TO_LOW"
                    }
                    onChange={() =>
                      dispatch({ type: "HIGH_TO_LOW", payload: "HIGH_TO_LOW" })
                    }
                  />{" "}
                  Price: High to Low
                </label>
              </li>
            </ul>
          </form>
        </div>

        <div className="sidebar-box sidebar-price">
          <h3 className="large-heading">Price</h3>

          <h6 className="text-md space-between">
            <span id="min-price">₹ {priceRange}</span>{" "}
            <span id="max-price">₹ {maxPrice}</span>
          </h6>
          <input
            className="input range-input"

            type="range"
            
            max={maxPrice}
            onMouseUp={(event) =>
              dispatch({ type: "PRICE_RANGE", payload: event.target.value })
            }
          />
        </div>
        <div className="sidebar-box sidebar-category">
          <h3 className="large-heading">Category</h3>
          <ul>
            <li className="lists">
              {getUniqueCategory.map((eachCategory, i) => (
                <label className="label text-sm category-label" key={i}>
                  {" "}
                  <input
                    type="checkbox"
                    className="category-checkbox"
                    checked={state.filters.categoryName.includes(eachCategory)}
                    onChange={() =>
                      dispatch({ type: "GET_CATEGORY", payload: eachCategory })
                    }
                  />
                  {eachCategory}
                </label>
              ))}
            </li>
          </ul>
        </div>
        <div className="sidebar-box sidebar-rating">
          <h3 className="large-heading">Rating</h3>
          <form>
            <ul>
              <li className="lists">
                <label className="label text-sm" id="four-rate">
                  <input
                    type="radio"
                    htmlFor="four-rate"
                    name="rating"
                    checked={state.filters.rating && state.filters.rating === 4}
                    onChange={() =>
                      dispatch({ type: "STAR_RATING", payload: 4 })
                    }
                  />{" "}
                  4 Rating & Above
                </label>
              </li>
              <li className="lists">
                <label className="label text-sm" id="three-rate">
                  <input
                    type="radio"
                    htmlFor="three-rate"
                    name="rating"
                    checked={state.filters.rating && state.filters.rating === 3}
                    onChange={() =>
                      dispatch({ type: "STAR_RATING", payload: 3 })
                    }
                  />{" "}
                  3 Rating & Above
                </label>
              </li>
              <li className="lists">
                <label className="label text-sm" id="two-rate">
                  <input
                    type="radio"
                    htmlFor="two-rate"
                    name="rating"
                    checked={state.filters.rating && state.filters.rating === 2}
                    onChange={() =>
                      dispatch({ type: "STAR_RATING", payload: 2 })
                    }
                  />{" "}
                  2 Rating & Above
                </label>
              </li>
              <li className="lists">
                <label className="label text-sm" id="one-rate">
                  <input
                    type="radio"
                    htmlFor="one-rate"
                    name="rating"
                    checked={state.filters.rating && state.filters.rating === 1}
                    onChange={() =>
                      dispatch({ type: "STAR_RATING", payload: 1 })
                    }
                  />{" "}
                  1 Rating & Above
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
