import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-content footer-left">
          <h1 className="footer-heading">Pearl</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            aliquid unde error distinctio, odio corporis fuga magni ad cum
            blanditiis!
          </p>
        </div>
        <div className="footer-content footer-middle">
          <h1 className="footer-heading">Category</h1>
        </div>
        <div className="footer-content foooter-right">
          <h1 className="footer-heading">Contact us</h1>
        </div>
      </div>

      <div className="Copyright">
        <p>@Copyright</p>
      </div>
    </footer>
  );
};

export { Footer };
