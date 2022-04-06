import React from "react";
import "./Empty.css"
import {useNavigate} from "react-router-dom"

const Empty = ({page}) => {

  const navigate = useNavigate()

  return (
    <div className="empty-container">
      <div className="empty-wrapper">
        <h1 className="section-heading">Your {page} is Empty.</h1>
        <button className="btn btn-primary" onClick={() => navigate("/allProducts")}>Shop Now</button>
      </div>
    </div>
  );
};

export { Empty };
