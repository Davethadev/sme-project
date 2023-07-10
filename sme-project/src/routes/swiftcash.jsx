import React from "react";
import Admin from "../components/admin";
import Sidebar from "../components/sidebar";
import give from "../assets/give-money.png";
import { Link } from "react-router-dom";

const SwiftCash = () => {
  return (
    <main className="flex">
      <Sidebar />
      <div className="w-5/6 bg-white">
        <Admin />
        <h1 className="font-open font-[600] text-lg pt-4 pl-4">Loans</h1>
        <div className="w-[343px] mx-auto text-center pt-24">
          <div className="flex justify-center">
            <img src={give} alt="" />
          </div>
          <div className="pt-12">
            <h2 className="font-open font-[500] text-sm">Get Loans on Koins</h2>
            <p className="font-open text-text80 pt-4">
              Don't let unexpected expenses catch you off <br /> guard - apply
              for a loan
            </p>
            <Link to="swiftcash">
              <button className="bg-primary h-[56px] w-[343px] rounded text-white text-center font-open font-[500] mt-8">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SwiftCash;
