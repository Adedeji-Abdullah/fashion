"use client";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { blob } from "stream/consumers";
import { useCartStore } from "../cartStore";

const page = () => {
  const [everyone, setEveryone] = useState(false);
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [cart, setCart] = useState(false)
  const [img1, setImg1] = useState(0)
  const [img2, setImg2] = useState(0)
  const [img3, setImg3] = useState(0)
  const [imgcart, setImgcart] = useState<string[]>([])

  console.log(`${img1}`)

  const cartStore = useCartStore((state: { cart: string[] }) => state.cart);
  const addToCart = useCartStore((state: { addToCart: (item: string) => void }) => state.addToCart);
  return (
    <>
      <div className="mb-20 relative overflow-auto">
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
          <p>
            Home/{everyone ? "everyone" : men ? "Men" : women ? "Women" : ""}
          </p>
          <p>
            {everyone ? (
              <p className="text-sm md:text-3xl text-center font-semibold">
                All gender Clothing & Apparel - New Arrivals
              </p>
            ) : men ? (
              <p className="text-sm md:text-3xl text-center font-semibold py-2">
                Men's Clothing & Apparel - New Arrivals
              </p>
            ) : women ? (
              <p className="text-sm md:text-3xl text-center font-semibold">
                Women's Clothing & Apparel - New Arrivals
              </p>
            ) : (
              ""
            )}
          </p>
          <p className="pb-4 font-semibold">Featured</p>
          {everyone ? (
            <div className="flex justify-around gap-6">
              <div className=" hidden md:block">
                <img
                  src="everyone1.jpg"
                  className="md:w-120 w-70 md:h-110 h-60"
                  alt=""
                  onClick={() => (addToCart("everyone1.jpg"))}
                />
                <button onClick={() => setCart(true)} className="text-red-500 border my-3">30% off</button>
                <div className="block">
                  <p className="flex justify-between">
                    <span>the beloved shirt</span>
                    <span>$153.00</span>
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="everyone2.jpg"
                  className="md:w-120 w-70 md:h-110 h-60"
                  alt=""
                  onClick={() => (addToCart("everyone2.jpg"))}
                />
                <button onClick={() => setCart(true)} className="text-red-500 border my-3">30% off</button>
                <div className="block">
                  <p className="flex justify-between">
                    <span>the beloved shirt</span>
                    <span>$153.00</span>
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="everyone3.jpg"
                  className="md:w-120 w-70 md:h-110 h-60"
                  alt=""
                  onClick={() => (addToCart("everyone3.jpg"))}
                />
                <button onClick={() => setCart(true)} className="text-red-500 border my-3">30% off</button>
                <div className="block">
                  <p className="flex justify-between">
                    <span>the beloved shirt</span>
                    <span>$153.00</span>
                  </p>
                </div>
              </div>
            </div>
          ) : men ? (
            <div className="flex justify-around gap-6">
              <div className=" hidden md:block">
                {" "}
                <img
                  src="man1.jpg"
                  className="md:w-120 w-70 md:h-110 h-60"
                  alt=""
                  onClick={() => (addToCart("man1.jpg"))}
                />
                <button onClick={() => setCart(true)} className="text-red-500 border my-3">30% off</button>
                <div className="block">
                  <p className="flex justify-between">
                    <span>the beloved shirt</span>
                    <span>$153.00</span>
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <img
                  src="man2.jpg"
                  className="md:w-120 w-70 md:h-110 h-60"
                  alt=""
                  onClick={() => (addToCart("man2.jpg"))}
                />
                <button onClick={() => setCart(true)} className="text-red-500 border my-3">30% off</button>
                <div className="block">
                  <p className="flex justify-between">
                    <span>the beloved shirt</span>
                    <span>$153.00</span>
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <img
                  src="man3.jpg"
                  className="md:w-120 w-70 md:h-110 h-60"
                  alt=""
                  onClick={() => (addToCart("man3.jpg"))}
                />
                <button onClick={() => setCart(true)} className="text-red-500 border my-3">30% off</button>
                <div className="block">
                  <p className="flex justify-between">
                    <span>the beloved shirt</span>
                    <span>$153.00</span>
                  </p>
                </div>
              </div>
            </div>
          ) : women ? (
            <div className="flex justify-around gap-6">
              <div className=" hidden md:block">
                {" "}
                <img
                  src="woman1.jpg"
                  className="md:w-120 w-70 md:h-110 h-60"
                  alt=""
                  onClick={() => (addToCart("woman1.jpg"))}
                />
                <button onClick={() => setCart(true)} className="text-red-500 border my-3">30% off</button>
                <div className="block">
                  <p className="flex justify-between">
                    <span>the beloved shirt</span>
                    <span>$153.00</span>
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <img
                  src="woman2.jpg"
                  className="md:w-120 w-70 md:h-110 h-60"
                  alt=""
                  onClick={() => (addToCart("woman2.jpg"))}
                />
                <button onClick={() => setCart(true)} className="text-red-500 border my-3">30% off</button>
                <div className="block">
                  <p className="flex justify-between">
                    <span>the beloved shirt</span>
                    <span>$153.00</span>
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <img
                  src="woman4.jpg"
                  className="md:w-120 w-70 md:h-110 h-60"
                  alt=""
                  onClick={() => (addToCart("woman4.jpg"))}
                />
                <button onClick={() => setCart(true)} className="text-red-500 border my-3">30% off</button>
                <div className="block">
                  <p className="flex justify-between">
                    <span>the beloved shirt</span>
                    <span>$153.00</span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div id="cart" className={`fixed top-10 overflow-auto bg-gray-300 z-[99] right-0 h-full w-30 md:w-80 translate-x-0 -translate-x-full  ${cart ? 'block' : 'hidden'}`}>
        <div>
          <p className="text-3xl text-white font-semibold text-center pt-6">Your Cart</p>
          {/* <img className="w-20 absolute" src={`everyone${img1}.jpg`} alt="" />
          <img className="w-20 absolute" src={`man${img2}.jpg`} alt="" />
          <img className="w-20 absolute" src={`woman${img3}.jpg`} alt="" /> */}

          {cartStore.map((image: string, index: number) => (
            <div className="pl-5 py-5" key={index}>
              <img src={image} className="md:w-40 w-20" alt="" /><span className="text-gray-600">$150</span>
            </div>
          ))}

          <button className="text-white bg-gray-600 hover:bg-gray-800 py-1 px-3 rounded-xl ml-2">Buy</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
