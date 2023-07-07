import React from "react";
import logo from "../assets/logo.png";
import illustration from "../assets/illustration.png";
import arrow from "../assets/arrow-forward.png";
import { Link } from "react-router-dom";
const Root = () => {
  return (
    <main className="bg-primary landing-page">
      <div className="p-4">
        <img src={logo} alt="" />
      </div>
      <h1 className="font-satoshi italic font-[600] text-5xl text-white text-center pt-4">
        A few clicks away from Empowering your company.
      </h1>
      <p className="font-satoshi font-[500] text-white text-base text-center pt-4">
        Register your company in minutes. Save time and money.
      </p>
      <div className="w-[898px] mx-auto pl-56 pt-16">
        <h2 className="font-satoshi font-[400] text-white text-lg pb-4">
          We provide the following services and many more
        </h2>
        <p className="font-satoshi font-[400] text-white text-base pt-2">
          Onboard your company with ease
        </p>
        <p className="font-satoshi font-[400] text-white text-base pt-2">
          Showcase your products
        </p>
        <p className="font-satoshi font-[400] text-white text-base pt-2">
          Enjoy loan services at the best rate
        </p>
        <p className="font-satoshi font-[400] text-white text-base pt-2">
          ... And track your finances
        </p>
      </div>
      <div className="flex items-center justify-between w-3/5 ml-4 pb-2">
        <div>
          <img src={illustration} alt="" />
        </div>
        <Link to={`getstarted`}>
          <button className="font-satoshi font-[500] text-sm text-blue bg-white rounded flex gap-2 p-2">
            GET STARTED
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Root;
