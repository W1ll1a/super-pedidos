import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Drawer from "./Drawer";
import Avatar from "./Avatar";
import axios from "axios";
import { useRouter } from "next/router";
import { verify } from "jsonwebtoken";

const NavBar = ({
  initialColor = "black",
  finalColor,
  textInitialColor = "white",
  textFinalColor,
}) => {
  const [nav, setNav] = useState(true);
  const [color, setColor] = useState(initialColor);
  const [textColor, setTextColor] = useState(textInitialColor);
  const [openClose, setOpenClose] = useState(false);
  const [visibleTogggle,setVisible]=useState(false)

  const toggleOpenClose = () => {
    setOpenClose(!openClose);
    openDrawer();
  };
  const openDrawer = () => {
    if (openClose === true) {
      <Drawer open={true}></Drawer>;
    } else {
      <Drawer open={false}></Drawer>;
    }
  };
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(initialColor);
        setTextColor(textInitialColor);
      } else {
        setColor(finalColor);
        setTextColor(textFinalColor);
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);
  const router = useRouter()


  const handleHome = async ()=>{ 
    router.push('/')
  }


  return (
    <div
      //Nav bar styling.
      style={{ backgroundColor: `${color}` }}
      className="relative left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className=" flex justify-between items-center p-2 text-white ">
        <Link href="/">
          <h1
            style={{ color: `${textColor}` }}
            className="font-bold text-4xl p-4 "
            onClick={handleHome}
          >
            ZoneDrop
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          
          <li className=" p-4 ">
            {visibleTogggle &&(
            <button onClick={toggleOpenClose} is>
              <svg
                className="h-8 w-8 text-purple-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />{" "}
                <line x1="3" y1="6" x2="21" y2="6" />{" "}
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
              )}
            </li>
          <li className=" p-4">
          {!visibleTogggle &&(
            <button onClick={()=>{router.push('/auth/register')}}>
            Register
            </button>
            )}
          </li>
          <li className=" p-4">
          {!visibleTogggle &&(
            <button onClick={()=>{router.push('/auth/login')}}>Login</button>
            )}
          </li>
           {visibleTogggle &&(
          <li className=" p-4">
            <Link href="/"><Avatar/></Link>
          </li>
           )}
        </ul>
        {/*Mobil button*/}
        <div onClick={handleNav} className="sm:hidden block z-10 absolute">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/*Mobile Menu*/}
        <div
          className={
            nav
              ? "sm:hidden relative top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full  h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden relative top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full  h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-white hover:text-gray-500 text-4xl">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-white hover:text-gray-500 text-4xl">
              <Link href="/#about">About us</Link>
            </li>
            <li className="p-4 text-white hover:text-gray-500 text-4xl">
              <Link href="/categories">Categories</Link>
            </li>
          </ul>
        </div>
      </div>
      {/**Tuve que añadir el Drawer de Carrito aqui, pero tengo que hacer que se habra desde el componente. */}
      <div
        id="cart"
        className={
          openClose
            ? "fixed top-0 right-0 z-40 min-h-screen p-4 bg-white w-96 dark:bg-gray-800 shadow-lg"
            : "fixed top-0 right-[-100%] z-40 min-h-screen p-4 bg-white w-96 dark:bg-gray-800 shadow-lg"
        }
        tabIndex={-1}
        aria-labelledby="drawer-label"
      >
        <div className="flex justify-between">
          <h5
            id="cart-label"
            className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            your cart
          </h5>
          <div id="close cart">
            <button onClick={toggleOpenClose}>
              <svg
                className="h-8 w-8 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <line x1="18" y1="6" x2="6" y2="18" />{" "}
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        <div id="content" className="grid gap-1 grid-cols-1">
          <div id="cart-Details">
            <div id="product-Details">EarBuds</div>
            <div id="price">L.250</div>
            <input
              id="quantity"
              type="number"
              className="border rounded-lg w-9"
            />
          </div>
          <div>
            <div className="text-right m-2 border-t-2 border-black">Total</div>
          </div>
          <div id="eliminate" className="flex justify-end">
            <svg
              className="h-8 w-8 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="3 6 5 6 21 6" />{" "}
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
              <line x1="10" y1="11" x2="10" y2="17" />{" "}
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};



export default NavBar;
