import React from "react";
import circle from "../assets/circle.png";
import document from "../assets/document.png";
import logo from "../assets/Logo.svg";
import arrow from "../assets/arrow-white.png";
import { Link } from "react-router-dom";
import cloud from "../assets/cloud.png";
import error from "../assets/error.png";

const PersonalDetails = () => {
  return (
    <main className="relative flex">
      <aside className="bg-white w-1/3 px-8 h-[100vh]">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="pl-4">
          <ul className="pt-16">
            <li className="flex items-center gap-2">
              <div className="w-[25px] h-[25px] flex justify-center">
                <img src={circle} alt="" />
              </div>
              <p className="font-satoshi font-[500]">COMPANY TYPE</p>
            </li>
            <li className="flex items-center gap-2 pt-8">
              <div className="w-[25px] h-[25px] flex justify-center">
                <img src={circle} alt="" />
              </div>
              <p className="font-satoshi font-[500]">BUSINESS DETAILS</p>
            </li>
            <li className="flex items-center gap-2 pt-8">
              <div className="w-[25px] h-[25px] border-[1px] border-primary rounded-full">
                <p className="text-center">3</p>
              </div>
              <p className="font-satoshi font-[500]">PERSONAL DETAILS</p>
            </li>
          </ul>

          <div className="absolute bottom-0 left-32 bottom-20">
            <img src={document} alt="" />
          </div>
        </div>
      </aside>
      <section className="bg-tin w-2/3">
        <div className="w-[708px] mx-auto">
          <h1 className="font-satoshi italic font-[600] text-3xl text-black text-left pt-4">
            Personal Details
          </h1>
          <p className="font-satoshi text-sm text-gray pt-2">
            Details about your company’s name and description.
          </p>
          <form action="">
            <div className="w-[256px] h-[224px] mx-auto mt-12 border-[1px] border-dashed border-primary rounded relative z-20">
              <label htmlFor="upload-image">
                <input type="file" className="w-full h-full opacity-0" />
              </label>
              <div className="w-[108px] h-[52px] mx-auto absolute top-[35%] right-0 left-0 text-center z-10">
                <div className="flex justify-center">
                  <img src={cloud} alt="" />
                </div>
                <p className="font-jakarta font-[500] text-primary border-b-[1px] border-primary border-dashed relative z-10">
                  Upload Image
                </p>
              </div>
              <div className="border-t-[1px] border-dashed border-primary h-[1px] w-[256px] mt-[-30px]"></div>
              <p className="font-jakarta font-[500] text-center text-primary">
                Profile Picture
              </p>
            </div>
            <div className="flex justify-between mt-4">
              <div className="w-[335px] h-[46px] mt-8">
                <label className="font-satoshi text-sm" htmlFor="first-name">
                  <p className="pt-8 pb-2">First Name</p>
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none indent-[10px] rounded"
                    placeholder=""
                  />
                </label>
              </div>
              <div className="w-[335px] h-[46px] mt-8 relative">
                <label className="font-satoshi text-sm" htmlFor="last-name">
                  <p className="pt-8 pb-2">Last Name</p>
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
                <label className="font-satoshi text-sm" htmlFor="email">
                  <p className="pt-8 pb-2">Email</p>
                  <input
                    type="email"
                    className="w-full h-full border-none outline-none indent-[10px] rounded"
                    placeholder=""
                  />
                </label>
              </div>
              <div className="w-[335px] h-[46px] mt-8 relative">
                <label className="font-satoshi text-sm" htmlFor="phone-number">
                  <p className="pt-8 pb-2">Phone Number</p>
                  <input
                    type="tel"
                    className="w-full h-full border-none outline-none rounded indent-[10px]"
                    placeholder=""
                  />
                </label>
              </div>
            </div>
          </form>
          <div className="h-[46px] w-[708px] mx-auto bg-softblue rounded flex items-center gap-4 mt-28 pl-2">
            <div>
              <img src={error} alt="" />
            </div>
            <p className="font-satoshi font-[400] text-sm text-gray">
              An email will be sent to you to verify your account before logging
              in.
            </p>
          </div>
          <div className="mt-24 mb-8 flex items-center justify-between">
            <Link to={"../getstarted/businessdetails"}>
              <button className="font-satoshi font-[500] text-gray">
                Back
              </button>
            </Link>
            <Link to={"mailsent"}>
              <button className="flex items-center justify-center gap-8 font-satoshi font-[500] bg-primary text-white w-[217px] h-[48px] rounded">
                Verify Account
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

export default PersonalDetails;
