import React from "react";
import { Link } from "react-router-dom";
import barcode from "../../img/barcode.png";
import paymentImg from "../../img/paymentImg.png";
const Footer = () => {
  return (
    <div className="">
      <footer class="footer md:py-20 bg-gray-600 text-white md:px-28">
        <div className="flex flex-col gap-4">
          <span class="text-xl font-semibold text-white">Quick Access</span>
          <Link to="/" class="link link-hover">
            Home
          </Link>
          <Link to="/products" class="link link-hover">
            Products
          </Link>
          <Link to="/contact" class="link link-hover">
            Contact
          </Link>
          <Link to="/signin" class="link link-hover">
            Login
          </Link>
          <Link to="/signup" class="link link-hover">
            Signup
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <span class="text-xl font-semibold ">Payment Method</span>
          <a class="link link-hover">bKash</a>
          <a class="link link-hover">Nagad</a>
          <a class="link link-hover">Rocket</a>
        </div>
        <div className="flex flex-col gap-4">
          <span class="text-xl font-semibold">Policy</span>
          <a class="link link-hover">Privacy Policy</a>
          <a class="link link-hover">Terms & Condition</a>
        </div>
        <div className="flex items-center gap-2 md:mt-5">
          <div>
            <img className="w-32" src={barcode} alt="" />
          </div>
          <div className="md:ml-3">
            <p className="mb-2">Download Our App</p>
            <img className="w-32" src={paymentImg} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
