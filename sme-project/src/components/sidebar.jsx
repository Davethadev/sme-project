import React from "react";
import logo from "../assets/sidebar-icons/logo.png";
import dashboard from "../assets/sidebar-icons/dashboard.png";
import savings from "../assets/sidebar-icons/savings.png";
import add from "../assets/sidebar-icons/add.png";
import cash from "../assets/sidebar-icons/cash.png";
import money from "../assets/sidebar-icons/receive-money.png";
import target from "../assets/sidebar-icons/target-fill.png";
import setting from "../assets/sidebar-icons/setting.png";

const Sidebar = () => {
  return (
    <aside className="w-1/6 bg-dark pt-4 h-[100vh]">
      <div className="w-[80%] mx-auto">
        <div className="flex items-center gap-2">
          <div>
            <img src={logo} alt="" />
          </div>
          <h1 className="font-open font-[700] text-lg text-white">Koins</h1>
        </div>
        <ul className="pt-8">
          <li className="flex items-center gap-2">
            <div>
              <img src={dashboard} alt="" />
            </div>
            <p className="font-open text-darkgray">Dashboard</p>
          </li>
          <li className="flex items-center gap-2 pt-4">
            <div>
              <img src={savings} alt="" />
            </div>
            <p className="font-open text-darkgray">Savings</p>
          </li>
          <li className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-2">
              <div>
                <img src={cash} alt="" />
              </div>
              <p className="font-open text-darkgray">Pay bills</p>
            </div>
            <div>
              <img src={add} alt="" />
            </div>
          </li>
          <li className="flex items-center gap-2 pt-4">
            <div>
              <img src={target} alt="" />
            </div>
            <p className="font-open text-darkgray">Investment</p>
          </li>
          <li className="flex items-center gap-2 pt-4">
            <div>
              <img src={money} alt="" />
            </div>
            <p className="font-open text-darkgray">Loans</p>
          </li>
          <li className="flex items-center gap-2 pt-4">
            <div>
              <img src={setting} alt="" />
            </div>
            <p className="font-open text-darkgray">Settings</p>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
