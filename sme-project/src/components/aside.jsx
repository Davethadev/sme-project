import React from "react";
import circle from "../assets/circle.png";
import document from "../assets/document.png";
import logo from "../assets/Logo.svg";

const Aside = () => {
  return (
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
            <p className="font-satoshi font-[500] text-sm">PROFILE</p>
          </li>
          <li className="flex items-center gap-2 pt-8">
            <div className="w-[25px] h-[25px] border-[1px] border-gray rounded-full">
              <p className="text-center text-gray">2</p>
            </div>
            <p className="font-satoshi font-[500] text-sm text-gray">
              BUSINESS DETAILS
            </p>
          </li>
          <li className="flex items-center gap-2 pt-8">
            <div className="w-[25px] h-[25px] border-[1px] border-gray rounded-full">
              <p className="text-center text-gray">3</p>
            </div>
            <p className="font-satoshi font-[500] text-sm text-gray">
              PERSONAL DETAILS
            </p>
          </li>
        </ul>

        <div className="absolute bottom-0 left-24 bottom-20">
          <img src={document} alt="" />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
