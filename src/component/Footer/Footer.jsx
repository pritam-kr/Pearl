import React from "react";
import "./Footer.css";
import * as RiIcons from "react-icons/ri";
import {useStateContext} from "../../Context/GlobalContext/StateContext"

 
const Footer = () => {

  const {getUniqueCategory} = useStateContext()


  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-content footer-left">
          <h1 className="large-heading footer-heading ">Pearl</h1>
          <p className="text-sm">
             Pearl is for Platinum Jewelry.
          </p>

          <h1 className="large-heading footer-heading ">Payment Acceptable</h1>
          <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg" className="responsive-images"/>
        </div>
        <div className="footer-content footer-middle">
          <h1 className="large-heading footer-heading">Category</h1>

          <ul>
            
            {getUniqueCategory.map((eachCategory, i) => <li className="lists text-sm category-list" key={i}>{eachCategory}</li>)}

          </ul>

        </div>
        <div className="footer-content footer-right">
          <h1 className="large-heading footer-heading">Contact us</h1>

          <ul>
            <li className="lists text-md"><RiIcons.RiGithubLine /></li>
            <li className="lists text-md"><RiIcons.RiTwitterLine /></li>
            <li className="lists text-md"><RiIcons.RiLinkedinBoxLine /></li>
            <li className="lists text-md"><RiIcons.RiInstagramLine /></li>
          </ul>

        </div>
      </div>

      <div className="Copyright space-between">
        <p className="text-xm">Privacy and Policy</p> <p className="text-xm">Code By Pritam</p>
      </div>
    </footer>
  );
};

export { Footer };
