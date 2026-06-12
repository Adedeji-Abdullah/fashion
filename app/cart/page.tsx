"use client";
import React, { useState } from "react";
import Footer from "../components/Footer";

const page = () => {
  const [everyone, setEveryone] = useState(false);
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  return (
    <>
    <div className="mb-20">
      <div className="mt-10 ml-16 float-left">
        <p className="text-black font-semibold">249 Products</p>
        <hr className=" my-4" color="red" />
        <h3 className="font-bold mb-4">
          Category<span className="flex justify-end -mt-6">📩</span>
        </h3>
        <input
          type="checkbox"
          required
          onClick={() => setEveryone(true) < setMen(false) && setWomen(false)}
          className="w-8"
          width={20}
          height={100}
        />
        <span>
          Everyone - All Gender <span className="block pl-8">Collection</span>
        </span>
        <input
          type="checkbox"
          onClick={() => setMen(true) < setEveryone(false) && setWomen(false)}
          className="w-8"
          width={20}
          height={100}
        />
        <span>
          Men <span className="block pl-8">Clothes</span>
        </span>
        <input
          type="checkbox"
          onClick={() => setWomen(true) < setMen(false) && setEveryone(false)}
          className="w-8"
          width={20}
          height={100}
        />
        <span>
          Women <span className="block pl-8">Clothes</span>
        </span>
      </div>
      <div className="mt-10 md:mx-16 ml-16 mr-4 float-right">
        <p>Home/{everyone ? "everyone" : men ? "Men" : women ? "Women" : ""}</p>
        <p>
          {everyone ?  <p className="text-sm md:text-3xl text-center font-semibold">All gender Clothing & Apparel - New Arrivals</p> : men ? <p className="text-sm md:text-3xl text-center font-semibold py-2">Men's Clothing & Apparel - New Arrivals</p> : women ?  <p className="text-sm md:text-3xl text-center font-semibold">Women's Clothing & Apparel - New Arrivals</p> : ""}
        </p>
        <p className="pb-4 font-semibold">Featured</p>
        {everyone ? (
          <div className="flex justify-around gap-6">
            <div className=" hidden md:block"><img src="everyone1.jpg" className="md:w-120 w-70 md:h-110 h-60" alt="" /><p className="text-red-500 border my-3">30% off</p><div className="block"><p className="flex justify-between"><span>the beloved shirt</span><span>$153.00</span></p></div></div>
            <div><img src="everyone2.jpg" className="md:w-120 w-70 md:h-110 h-60" alt="" /><p className="text-red-500 border my-3">30% off</p><div className="block"><p className="flex justify-between"><span>the beloved shirt</span><span>$153.00</span></p></div></div>
            <div><img src="everyone3.jpg" className="md:w-120 w-70 md:h-110 h-60" alt="" /><p className="text-red-500 border my-3">30% off</p><div className="block"><p className="flex justify-between"><span>the beloved shirt</span><span>$153.00</span></p></div></div>
          </div>
        ) : men ? (
          <div className="flex justify-around gap-6">
       <div className=" hidden md:block">     <img src="man1.jpg" className="md:w-120 w-70 md:h-110 h-60" alt="" /><p className="text-red-500 border my-3">30% off</p><div className="block"><p className="flex justify-between"><span>the beloved shirt</span><span>$153.00</span></p></div></div>
       <div>     <img src="man2.jpg" className="md:w-120 w-70 md:h-110 h-60" alt="" /><p className="text-red-500 border my-3">30% off</p><div className="block"><p className="flex justify-between"><span>the beloved shirt</span><span>$153.00</span></p></div></div>
       <div>     <img src="man3.jpg" className="md:w-120 w-70 md:h-110 h-60" alt="" /><p className="text-red-500 border my-3">30% off</p><div className="block"><p className="flex justify-between"><span>the beloved shirt</span><span>$153.00</span></p></div></div>
          </div>
        ) : women ? (
          <div className="flex justify-around gap-6">
         <div className=" hidden md:block">   <img src="woman1.jpg" className="md:w-120 w-70 md:h-110 h-60" alt="" /><p className="text-red-500 border my-3">30% off</p><div className="block"><p className="flex justify-between"><span>the beloved shirt</span><span>$153.00</span></p></div></div>
         <div>   <img src="woman2.jpg" className="md:w-120 w-70 md:h-110 h-60" alt="" /><p className="text-red-500 border my-3">30% off</p><div className="block"><p className="flex justify-between"><span>the beloved shirt</span><span>$153.00</span></p></div></div>
         <div>   <img src="woman4.jpg" className="md:w-120 w-70 md:h-110 h-60" alt="" /><p className="text-red-500 border my-3">30% off</p><div className="block"><p className="flex justify-between"><span>the beloved shirt</span><span>$153.00</span></p></div></div>
          </div>
        ) : (
          ""
        )}
      </div>
      
    </div>
    <Footer />
    </>
  );
};

export default page;
