import React from "react";
import Aside from "../components/aside";
import give from "../assets/give.png";
import { Link } from "react-router-dom";

const Loans = () => {
  return (
    <main className="flex">
      <Aside />
      <section className="bg-tin w-3/4 h-auto">
        <h1 className="font-open font-[600] text-xl pt-16 pl-8">Loans</h1>
        <div className="w-[343px] mx-auto h-auto pt-12 pb-20 relative">
          <div className="text-center pt-8">
            <div className="flex justify-center">
              <img src={give} alt="" />
            </div>
            <div className="pt-12">
              <h2 className="font-open font-[500] text-sm">Get Loans</h2>
              <p className="font-open pt-2">
                Don't let unexpected expenses catch you off <br /> guard - apply
                for a loan
              </p>
            </div>
          </div>
        </div>
        <Link to={"getloans"}>
          <button className="bg-primary w-[127px] h-[48px] rounded text-white font-open font-[500] absolute right-72 bottom-4">
            Continue
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Loans;
