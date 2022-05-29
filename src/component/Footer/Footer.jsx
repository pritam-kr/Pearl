import React from "react";
import "./Footer.css";
import * as RiIcons from "react-icons/ri";
import { useStateContext } from "../../Context/GlobalContext/StateContext";

const Footer = () => {
  const { getUniqueCategory } = useStateContext();

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-content footer-left">
          <h1 className="large-heading footer-heading ">Pearl</h1>
          <p className="text-sm">Pearl is for Platinum Jewelry.</p>

          <h1 className="large-heading footer-heading ">Payment Acceptable</h1>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
            className="responsive-images"
          />
        </div>
        <div className="footer-content footer-middle">
          <h1 className="large-heading footer-heading">Phone</h1>

          <ul>
                <li className="lists text-sm category-list">
            +91 123456789
              </li>
          </ul>
        </div>
        <div className="footer-content footer-right">
          <h1 className="large-heading footer-heading">Contact us</h1>


          <ul>
                <li className="lists">
                    <a href="https://twitter.com/Pritamkr_" target="_blank" rel="noreferrer" className="links"> <RiIcons.RiTwitterLine className="icons" /> </a> </li>

                <li className="lists">
                    <a href="https://www.linkedin.com/in/pritam-kumar-0ab3431bb/" rel="noreferrer" target="_blank" className="links"> <RiIcons.RiLinkedinLine className="icons"/></a></li>

                <li className="lists">
                    <a href="https://www.instagram.com/pritam_kr30/" target="_blank" rel="noreferrer" className="links"> <RiIcons.RiInstagramLine className="icons"/></a>
                </li>
                <li className="lists">
                    <a href="https://github.com/pritam-kr/playme" target="_blank " rel="noreferrer" className="links "> <RiIcons.RiGithubLine className="icons" /></a>
                </li>
            </ul>
          
        </div>
      </div>

      <div className="Copyright space-between">
        <p className="text-xm">Privacy and Policy</p>{" "}
        <p className="text-xm">Code By Pritam</p>
      </div>
    </footer>
  );
};

export { Footer };
