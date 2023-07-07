import React, { useState } from "react";
import logo from "../assets/logo.png";
import illustration from "../assets/illustration.png";
import peopleIcon from "../assets/icons-people.png";
import groupIcon from "../assets/icons-group.png";
import arrow from "../assets/arrow-forward.png";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hovered, setHovered] = useState(null);
  function show(id) {
    setIsHovered(true);
    setHovered(id);
  }
  function hide(id) {
    setIsHovered(false);
    setHovered(id);
  }
  return (
    <main className="relative flex">
      <aside className="bg-primary w-1/3 px-8 h-[100vh] ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <div>
            <h1 className="font-satoshi italic font-[600] text-3xl text-white text-left pt-4">
              A few clicks away from Empowering your company.
            </h1>
            <p className="font-satoshi font-[500] text-white text-sm text-left pt-4">
              Register your company in minutes. Save time and money.
            </p>
          </div>
          <div className="absolute bottom-0 px-0">
            <img src={illustration} alt="" />
          </div>
        </div>
      </aside>
      <section className="bg-tin w-2/3">
        <div className="w-[596px] mx-auto">
          <h1 className="font-satoshi font-[600] text-3xl italic py-24">
            Choose the type of company
          </h1>
          <div>
            <Link to={"businessdetails"}>
              <div
                onMouseEnter={() => show(1)}
                onMouseLeave={() => hide(1)}
                className={`flex items-center justify-between w-[404px] bg-white rounded gap-4 p-4 ${
                  isHovered && hovered === 1
                    ? "border-[1px] border-primary"
                    : ""
                } `}
              >
                <div className="flex items-center gap-4">
                  <div>
                    <img src={peopleIcon} alt="" />
                  </div>
                  <div>
                    <h4>LLC</h4>
                    <p>Owned by Individuals</p>
                  </div>
                </div>
                <div
                  className={`${isHovered && hovered === 1 ? "" : "hidden"}`}
                >
                  <img src={arrow} alt="" />
                </div>
              </div>
            </Link>
            <Link to={""}>
              <div
                onMouseEnter={() => show(2)}
                onMouseLeave={() => hide(2)}
                className={`flex items-center justify-between w-[404px] bg-white rounded gap-4 p-4 mt-4 ${
                  isHovered && hovered === 2
                    ? "border-[1px] border-primary"
                    : ""
                } `}
              >
                <div className="flex items-center gap-4">
                  <div>
                    <img src={groupIcon} alt="" />
                  </div>
                  <div>
                    <h4>CORPORATION</h4>
                    <p>Owned by Stackholders</p>
                  </div>
                </div>
                <div
                  className={`${isHovered && hovered === 2 ? "" : "hidden"}`}
                >
                  <img src={arrow} alt="" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GetStarted;
