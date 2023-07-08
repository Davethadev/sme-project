import React from "react";
import circle from "../assets/circle.png";
import document from "../assets/document.png";
import logo from "../assets/Logo.svg";
// import Aside from "../components/aside";
import { items } from "../constants/product";

const Products = () => {
  return (
    <main className="relative flex">
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

          <div className="absolute bottom-0 left-32 bottom-20">
            <img src={document} alt="" />
          </div>
        </div>
      </aside>
      <section className="bg-tin w-3/4 h-auto">
        <div className="w-[700px] mx-auto h-auto pt-16 pb-20 relative">
          <h1 className="font-satoshi font-[600] text-xl italic">
            LOREM (BUSINESS NAME)
          </h1>
          <p className="font-satoshi font-[400] text-sm text-gray pt-2">
            Lorem Ipsum. (BUSINESS MOTTO)
          </p>
          <div className="grid grid-cols-3 gap-x-24 gap-y-8 pt-12">
            {items.map((item, index) => {
              const { image, name, rating, price } = item;
              return (
                <article key={index} className="text-center">
                  <div>
                    <img src={`/product-images/${image}`} alt="" />
                  </div>
                  <p className="pt-2 font-lato font-[400] text-gray">{name}</p>
                  <div className="py-2">
                    <img src={`/product-images/${rating}`} alt="" />
                  </div>
                  <p className="font-lato font-[700] text-gray">${price}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
