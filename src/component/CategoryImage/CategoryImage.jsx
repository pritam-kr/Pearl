import React from "react";
import "./CategoryImage.css";
import {useNavigate} from "react-router-dom"
import { useCategoryContext, useAuthContext, useStateContext} from "../../Context/index";

const CategoryImage = () => {
  const { category } = useCategoryContext();
  const {token} = useAuthContext()
  const navigate = useNavigate()
  const {dispatch} = useStateContext()


  const categoryHandler = (name) => {
       console.log(name)
    if(token){
        dispatch({type: "CHECKED_CATEGORY", payload: name})
        navigate("/allProducts")
    }else{
        navigate("/login")
    }
  }

  return (
    <>
      {category.map((eachCategory) => (
        <div className="category-card" key={eachCategory._id}>
          <img
            src={eachCategory.image}
            className="responsive-images featured-product-image"
            alt="featured-product" onClick={() => categoryHandler(eachCategory.categoryName)}
          />

          <div className="card-content">
            <h2 className="product-title category-title">
              {eachCategory.categoryName}
            </h2>
          </div>
        </div>
      ))}
    </>
  );
};
export { CategoryImage };
