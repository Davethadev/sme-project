import React, { useState } from "react";
import adminAvatar from "../assets/admin-avatar.png";
import sunny from "../assets/sunny-new.png";
import notification from "../assets/notification.png";
import search from "../assets/search.png";

const Admin = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section className="font-open w-full h-[80px] flex justify-end items-center gap-48 px-4 w-full">
      <div className="relative w-[351px] h-[40px] rounded-lg bg-pastel2">
        <div className="absolute left-2 top-2">
          <img src={search} alt="" />
        </div>
        <div className="indent-[40px] rounded-lg w-full h-full">
          <input
            className="border-none outline-none text-4 text-black bg-pastel2 rounded-lg w-full h-full"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div
          onClick={() => setToggle(!toggle)}
          className="h-[24px] w-[57px] bg-pastel rounded-full py-3 px-6 relative hover:cursor-pointer"
        >
          <div className={`absolute top-0 ${toggle ? "left-0" : "right-0"}`}>
            <img src={sunny} alt="" />
          </div>
        </div>
        <div>
          <img src={notification} alt="" />
        </div>

        <div className="w-[1px] h-[52px] bg-pastel"></div>
        <div className="flex items-center gap-2">
          <div>
            <img src={adminAvatar} alt="" />
          </div>
          <div>
            <h1 className="font-open font-[500]">Chudi_Victor</h1>
            <p className="font-open text-grey60 text-[12px]">
              chudivictor9@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
