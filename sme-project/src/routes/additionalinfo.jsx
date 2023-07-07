import React from "react";
import Aside from "../components/aside";
import arrow from "../assets/arrow-white.png";
import { Link } from "react-router-dom";

const AdditionalInfo = () => {
  return (
    <main className="relative flex">
      <Aside />
      <section className="bg-tin w-2/3 h-auto">
        <div className="w-[708px] mx-auto pt-24 pb-20 relative">
          <h1 className="font-satoshi font-[600] text-xl italic">Profile</h1>
          <p className="font-satoshi font-[400] text-sm text-gray pt-4">
            Details about your business corporation.
          </p>

          <div className="flex items-center gap-8 pt-4">
            <Link
              to={
                "../getstarted/businessdetails/personaldetails/mailsent/login/profile"
              }
            >
              <p className="font-satoshi font-[400] text-sm hover:cursor-pointer">
                Personal Information
              </p>
            </Link>

            <p className="font-satoshi font-[400] text-sm text-primary border-b-[1px] hover:cursor-pointer">
              Additional Information
            </p>
          </div>
          <h2 className="font-jakarta font-[500] text-sm pt-8">BANK DETAILS</h2>
          <form action="">
            <div className="flex justify-between">
              <div className="w-[335px] h-[46px]">
                <label
                  className="font-satoshi text-sm"
                  htmlFor="account-number"
                >
                  <p className="font-satoshi font-[500] pt-4 pb-2">
                    Account Number
                  </p>
                  <input
                    type="tel"
                    className="w-full h-full border-none outline-none indent-[10px] rounded active:border-primary active:border-[1px]"
                    placeholder=""
                  />
                </label>
              </div>
              <div className="w-[335px] h-[46px] relative">
                <label className="font-satoshi text-sm" htmlFor="account-name">
                  <p className="font-satoshi font-[500] pt-4 pb-2">
                    Account Name
                  </p>
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none rounded indent-[10px]"
                    placeholder=""
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="w-[335px] h-[46px] mt-8">
                <label className="font-satoshi text-sm" htmlFor="bank">
                  <p className="font-satoshi font-[500] pt-8 pb-2">Bank</p>
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none indent-[10px] rounded"
                    placeholder=""
                  />
                </label>
              </div>
              <div className="w-[335px] h-[46px] mt-8 relative">
                <label className="font-satoshi text-sm" htmlFor="branch">
                  <p className="font-satoshi font-[500] pt-8 pb-2">Branch</p>
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none rounded indent-[10px]"
                    placeholder=""
                  />
                </label>
              </div>
            </div>
            <h2 className="font-jakarta font-[500] text-sm mt-24">
              CAC REGISTRATION
            </h2>
            <div className="font-satoshi flex gap-4 mt-4">
              <p>Are you registered?</p>
              <div className="flex gap-6">
                <label
                  className="flex items-center gap-2 font-jakarta"
                  htmlFor="yes"
                >
                  <div>
                    <input type="checkbox" />
                  </div>
                  YES
                </label>
                <label
                  className="flex items-center gap-2 font-jakarta"
                  htmlFor="no"
                >
                  <div>
                    <input type="checkbox" />
                  </div>
                  NO
                </label>
              </div>
            </div>
            <div className="w-[335px] h-[46px] mt-4 relative">
              <label className="font-satoshi text-sm" htmlFor="cac-number">
                <p className="font-satoshi font-[500] pt-2 pb-2">CAC Number</p>
                <input
                  type="tel"
                  className="w-full h-full border-none outline-none rounded indent-[10px]"
                  placeholder=""
                />
              </label>
            </div>
            <div className="mt-[148px] flex justify-end">
              <button className="flex items-center justify-center gap-8 font-satoshi font-[500] bg-primary text-white w-[134px] h-[48px] rounded">
                Save
                <div>
                  <img src={arrow} alt="" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AdditionalInfo;
