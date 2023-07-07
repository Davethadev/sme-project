import React from "react";
import logo from "../assets/logo.png";
import illustration from "../assets/illustration.png";
import eye from "../assets/eye.png";
import { Link } from "react-router-dom";

const Login = () => {
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
            <p className="font-satoshi font-[500] text-lightblue text-sm text-left pt-4">
              Register your company in minutes. Save time and money.
            </p>
          </div>
          <div className="absolute bottom-0 px-0">
            <img src={illustration} alt="" />
          </div>
        </div>
      </aside>
      <section className="bg-tin w-2/3">
        <div className="w-[708px] h-[449px] mx-auto pt-36">
          <div className="pl-24">
            <h1 className="font-jakarta font-[600] text-xl">Login</h1>
            <p className="font-jakarta font-[500] text-base py-4">
              Welcome back!! Login to your account
            </p>
          </div>
          <form action="">
            <div className="pt-8">
              <label className="font-jakarta" htmlFor="email">
                Email
                <div className="w-[708px] h-[46px] rounded relative top-2 bottom-2 overflow-hidden">
                  <input
                    className="absolute indent-[10px] border-none outline-none w-full h-full"
                    type="email"
                    placeholder=""
                  />
                </div>
              </label>
            </div>
            <div className="pt-8">
              <label className="font-jakarta" htmlFor="password">
                <p>Password</p>

                <div className="w-[708px] h-[46px] rounded relative top-2 overflow-hidden">
                  <input
                    className="absolute indent-[10px] border-none outline-none w-full h-full"
                    type="password"
                    placeholder="**********"
                  />
                  <div className="absolute right-2 top-3">
                    <img src={eye} alt="" />
                  </div>
                </div>
              </label>
            </div>
            <Link to={"profile"}>
              <button className="bg-primary text-white text-center w-[409px] h-[46px] mt-12 ml-24 rounded">
                Login
              </button>
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
