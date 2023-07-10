import React, { useState } from "react";
import Aside from "../components/aside";
import arrow from "../assets/arrow-white.png";
import products from "../constants/product";
import { Link } from "react-router-dom";
const CreateProduct = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [isInfo, setIsInfo] = useState(true);
  const [isAddProducts, setIsAddProducts] = useState(false);
  return (
    <main className="relative flex">
      <Aside />
      <section className="bg-tin w-3/4 h-auto">
        <div className="w-[700px] mx-auto h-auto pt-24 pb-20 relative">
          <h1 className="font-satoshi font-[600] text-xl italic">
            Create Product
          </h1>
          <p className="font-satoshi font-[400] text-sm text-gray pt-4">
            Details about your Product.
          </p>
          <div className="relative">
            <div className="flex items-center justify-between absolute z-10 top-[-16px] w-full">
              <h4 className="font-inter font-[500]">General info*</h4>
              <span
                onClick={() => setIsInfo(false)}
                className={`absolute right-0 hover:cursor-pointer ${
                  isInfo ? "" : "hidden"
                }`}
              >
                -
              </span>
              <span
                onClick={() => setIsInfo(true)}
                className={`absolute right-0 hover:cursor-pointer ${
                  isInfo ? "hidden" : ""
                }`}
              >
                +
              </span>
            </div>
            <form
              className={`${isInfo ? "" : "hidden"} absolute top-4`}
              action=""
            >
              <div className="w-[700px] h-[72px] mt-2 relative">
                <p className="font-inter font-[500] text-[12px] absolute left-3 top-2">
                  Title*
                </p>
                <label className="font-satoshi text-sm" htmlFor="title">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none indent-[12px] rounded font-inter font-[500] bg-grey"
                    placeholder="Lorem"
                  />
                </label>
              </div>
              <div className="w-[700px] h-[72px] mt-4 relative">
                <p className="font-inter font-[500] text-[12px] absolute left-3 top-2">
                  Description
                </p>
                <label className="font-satoshi text-sm" htmlFor="title">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none indent-[12px] rounded font-inter font-[500] bg-grey"
                    placeholder="Lorem"
                  />
                </label>
              </div>
            </form>
            <div className="mt-16 relative">
              <div className="absolute top-60">
                <div className="w-[700px] h-[1px] bg-gray"></div>
                <div className="flex items-center justify-between pt-2 font-inter font-[500]">
                  <h4>Products</h4>
                  <span
                    className={`absolute right-0 hover:cursor-pointer ${
                      !isAdd ? "" : "hidden"
                    }`}
                    onClick={() => setIsAdd(true)}
                  >
                    +
                  </span>
                  <span
                    onClick={() => setIsAdd(false)}
                    className={`absolute right-0 hover:cursor-pointer ${
                      isAdd ? "z-20" : "hidden"
                    }`}
                  >
                    -
                  </span>
                </div>
                <div className={`${isAdd ? "" : "hidden"} absolute`}>
                  <p className="font-inter text-[14px] text-darkgrey">
                    Select products that will be available via this channel. You
                    can assign products to multiple channels.
                  </p>
                  <button
                    onClick={() => setIsAddProducts(true)}
                    className="flex items-center justify-center gap-4 w-[700px] h-[40px] border-[1px] border-grey20 rounded mt-8"
                  >
                    <span>+</span>
                    <p className="font-inter font-[500] text-[12px]">
                      Add Products
                    </p>
                  </button>
                </div>
                <div
                  className={`${
                    isAdd ? "hidden" : "w-[700px] h-[1px] bg-gray mt-2"
                  }`}
                ></div>
              </div>
              <Link to={"loans"}>
                <div className="absolute right-0 top-[400px]">
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
        </div>
      </section>
      <div
        className={`${
          isAddProducts ? "" : "hidden"
        } w-[764px] h-[596px] bg-white rounded absolute left-[440px] top-[48px] z-30 rounded`}
      >
        <div className="w-[90%] mx-auto py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-inter font-[500] text-lg">Add products</h1>
            <span
              onClick={() => setIsAddProducts(false)}
              className="text-lg hover:cursor-pointer"
            >
              x
            </span>
          </div>
          <ul className="pt-8">
            {products.map((product, index) => {
              const { image, name, type } = product;
              return (
                <div key={index}>
                  <div className="w-[700px] h-[1px] bg-grey20"></div>
                  <li className="flex items-center justify-between w-[70%] py-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <img src={`/product-images/${image}`} alt="" />
                      </div>
                      <p>{name}</p>
                    </div>
                    <p>{type}</p>
                  </li>
                  <div className="w-[700px] h-[1px] bg-grey20 absolute"></div>
                </div>
              );
            })}
          </ul>
          <div className="flex items-center justify-end mt-4 gap-2">
            <button
              onClick={() => setIsAddProducts(false)}
              className="font-inter font-[500] text-[12px] w-[128px] h-[32px] text-center"
            >
              Cancel
            </button>
            <Link to={"products"}>
              <button className="font-inter font-[500] text-[12px] w-[128px] h-[32px] text-center text-grey40 bg-grey20 rounded">
                Add and save
              </button>
            </Link>
          </div>
          {/* <div>
            <Outlet />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default CreateProduct;
