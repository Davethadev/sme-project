import React, { useState } from "react";
// import Sidebar from "../components/sidebar";
// import Admin from "../components/admin";
// import aside from "../components/aside";
// import arrow from "../assets/arrow-back.png";
import Aside from "../components/aside";

const GetLoans = () => {
  const [isAmount, setIsAmount] = useState("");
  const [isPurpose, setIsPurpose] = useState("");
  const [isRepayment, setIsRepayment] = useState("");
  return (
    <main className="flex">
      <Aside />
      <section className="w-4/5 px-4 bg-tin">
        <h1 className="font-open font-[600] text-xl pt-16">Loans</h1>
        <div className="w-[904px] pt-24 mx-auto">
          <form className="w-full " action="">
            <div>
              <div className="flex justify-between">
                <div>
                  <label className="block font-open pb-2" htmlFor="amount">
                    Amount
                  </label>
                  <input
                    className="w-[440px] h-[56px] bg-neutral rounded font-open indent-[10px] border-none outline-none"
                    type="tel"
                    placeholder="₦0.00"
                    onChange={(e) => {
                      setIsAmount(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="block font-open pb-2" htmlFor="purpose">
                    Purpose of loan?
                  </label>
                  <select
                    className="w-[440px] h-[56px] bg-neutral rounded font-open indent-[10px] border-none outline-none"
                    name=""
                    id=""
                    onChange={(e) => {
                      setIsPurpose(e.target.value);
                    }}
                  >
                    <option value="Select reason">Select reason</option>
                  </select>
                </div>
              </div>
              <div className="mt-2">
                <label className="block font-open pb-2" htmlFor="repayment">
                  Repayment period
                </label>
                <select
                  className="w-[440px] h-[56px] bg-neutral rounded font-open indent-[10px] border-none outline-none"
                  name=""
                  id=""
                  onChange={(e) => {
                    setIsRepayment(e.target.value);
                  }}
                >
                  <option value="Select period">Select period</option>
                </select>
              </div>
            </div>
            <div
              className={`w-[99px] h-[48px] mx-auto mt-16 ${
                isAmount && isPurpose && isRepayment
                  ? "bg-primary"
                  : "bg-gray20"
              } rounded text-white font-open font-[600]`}
            >
              <button className="w-full h-full rounded">Apply</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default GetLoans;
