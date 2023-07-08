import React from "react";
import circle from "../assets/circle.png";
import document from "../assets/document.png";
import logo from "../assets/Logo.svg";
import arrow from "../assets/arrow-white.png";
import naira from "../assets/naira.png";
import { Link } from "react-router-dom";

const BusinessDetails = () => {
  return (
    <main className="relative flex">
      <aside className="bg-white w-1/4 px-8 h-[100vh]">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="pl-4">
          <ul className="pt-16">
            <li className="flex items-center gap-2">
              <div className="w-[25px] h-[25px] flex justify-center">
                <img src={circle} alt="" />
              </div>
              <p>COMPANY TYPE</p>
            </li>
            <li className="flex items-center gap-2 pt-8">
              <div className="w-[25px] h-[25px] border-primary border-[1px] rounded-full">
                <p className="text-center">2</p>
              </div>
              <p>BUSINESS DETAILS</p>
            </li>
            <li className="flex items-center gap-2 pt-8">
              <div className="w-[25px] h-[25px] border-[1px] rounded-full">
                <p className="text-center">3</p>
              </div>
              <p>PERSONAL DETAILS</p>
            </li>
          </ul>

          <div className="absolute bottom-0 left-24 bottom-20">
            <img src={document} alt="" />
          </div>
        </div>
      </aside>
      <section className="bg-tin w-3/4">
        <div className="w-[708px] mx-auto">
          <h1 className="font-satoshi italic font-[600] text-3xl text-black text-left pt-4">
            Business details
          </h1>
          <p className="font-satoshi text-sm text-gray pt-2">
            Details about your business corporation.
          </p>
          <form action="">
            <div className="w-[706px] h-[46px]">
              <label
                className="font-satoshi text-sm"
                htmlFor="type-of-business"
              >
                <p className="pt-8 pb-2">Type of Business</p>
                <select
                  name=""
                  id=""
                  className="w-full h-full border-none outline-none rounded"
                >
                  <option value="">Personal Business</option>
                </select>
              </label>
            </div>
            <div className="flex justify-between mt-4">
              <div className="w-[335px] h-[46px] mt-8">
                <label
                  className="font-satoshi text-sm"
                  htmlFor="size-of-company"
                >
                  <p className="pt-8 pb-2">Size of Company</p>
                  <input
                    type="tel"
                    className="w-full h-full border-none outline-none indent-[10px] rounded"
                    placeholder="10,000"
                  />
                </label>
              </div>
              <div className="w-[335px] h-[46px] mt-8 relative">
                <label
                  className="font-satoshi text-sm"
                  htmlFor="monthly-revenue"
                >
                  <p className="pt-8 pb-2">Monthly Revenue</p>
                  <input
                    type="tel"
                    className="w-full h-full border-none outline-none rounded indent-[58px]"
                    placeholder="250,000"
                  />
                  <span className="absolute left-0">
                    <img src={naira} alt="" />
                  </span>
                </label>
              </div>
            </div>
            <div className="w-[335px] h-[46px] mt-12">
              <label className="font-satoshi text-sm" htmlFor="age-of-company">
                <p className="pt-8 pb-2">Age of Company</p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full h-full border-none outline-none indent-[10px] rounded"
                  placeholder="3 Years"
                />
              </label>
            </div>
            <div className="w-[706px] h-[187px] mt-12">
              <label
                className="font-satoshi text-sm"
                htmlFor="business-description"
              >
                <p className="pt-8 pb-2">Business description</p>
                <input
                  type="text"
                  className="w-full h-full border-none outline-none indent-[10px] rounded"
                />
              </label>
            </div>
          </form>
          <div className="mt-24 mb-8 flex items-center justify-between">
            <Link to={"../getstarted"}>
              <button className="font-satoshi font-[500] text-gray">
                Back
              </button>
            </Link>
            <Link to={"personaldetails"}>
              <button className="flex items-center justify-center gap-8 font-satoshi font-[500] bg-primary text-white w-[133px] h-[48px] rounded">
                Next
                <div>
                  <img src={arrow} alt="" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BusinessDetails;
