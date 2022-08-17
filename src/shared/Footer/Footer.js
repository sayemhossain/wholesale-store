import React from "react";
import barcode from "../../img/barcode.png";
import paymentImg from "../../img/paymentImg.png";
const Footer = () => {
  return (
    <div className="">
      <footer class="footer md:py-20 bg-gray-600 text-white md:px-28">
        <div className="flex flex-col gap-4">
          <span class="text-xl font-semibold text-white">Customer Care</span>
          <a class="link link-hover">Help Center</a>
          <a class="link link-hover">How to Buy</a>
          <a class="link link-hover">Returns & Refunds</a>
          <a class="link link-hover">Contact Us</a>
          <a class="link link-hover">Terms & Conditions</a>
        </div>
        <div className="flex flex-col gap-4">
          <span class="text-xl font-semibold ">About Us</span>
          <a class="link link-hover">Digital Payments</a>
          <a class="link link-hover">Careers</a>
          <a class="link link-hover">Blog</a>
          <a class="link link-hover">Privacy Policy</a>
          <a class="link link-hover">App</a>
        </div>
        <div className="flex flex-col gap-4">
          <span class="text-xl font-semibold">Earn</span>
          <a class="link link-hover">Earn With Us</a>
          <a class="link link-hover">University Privacy policy</a>
          <a class="link link-hover">Blog</a>
          <a class="link link-hover">Code of Conduct</a>
          <a class="link link-hover">Join the Out Affiliate Program</a>
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
