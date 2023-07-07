import React from "react";
import arrow from "../assets/arrow-white.png";
import { Link } from "react-router-dom";
import user from "../assets/user.png";
import Aside from "../components/aside";
const Profile = () => {
  return (
    <main className="relative flex">
      <Aside />
      <section className="bg-tin w-2/3 h-auto">
        <div className="w-[708px] mx-auto pt-24 pb-20 relative">
          <h1 className="font-satoshi font-[600] text-xl italic">Profile</h1>
          <p className="font-satoshi font-[400] text-sm text-gray pt-4">
            Details about your business corporation.
          </p>

          <div>
            <div className="flex items-center gap-8 pt-4">
              <p className="font-satoshi font-[400] text-sm text-primary border-b-[1px] hover:cursor-pointer">
                Personal Information
              </p>

              <Link to={"additionalinfo"}>
                <p className="font-satoshi font-[400] text-sm">
                  Additional Information
                </p>
              </Link>
            </div>
            <div>
              <div className="w-[256px] h-[183px] mx-auto mt-12">
                <div className="w-full h-full">
                  <img src={user} alt="" />
                </div>
                <p className="font-jakarta font-[500] w-full text-primary text-center bg-white py-2 rounded">
                  Profile Picture
                </p>
              </div>
            </div>
            <form action="">
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
                  <label
                    className="font-satoshi text-sm"
                    htmlFor="phone-number"
                  >
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
            <Link to={"additionalinfo"}>
              <div className="mt-[148px] flex justify-end">
                <button className="flex items-center justify-center gap-8 font-satoshi font-[500] bg-primary text-white w-[217px] h-[48px] rounded">
                  Save Changes
                  <div>
                    <img src={arrow} alt="" />
                  </div>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
