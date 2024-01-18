import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
  faCaretDown,
  faCaretUp,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import order from "../assets/images/icons/order.svg";
import whatsapp from "../assets/images/social/whatsapp.svg";
import facebook from "../assets/images/social/facebook.svg";
import instagram from "../assets/images/social/instagram.svg";
const Header = () => {
  // const location = useLocation();
  const [mobile, setMobile] = useState(false);

  const active =
    "text-lg font-bold border-red-600 border-b-2 py-1  text-red-600 text-primary";
  const inActive =
    "text-lg font-medium leading-6 text-primary px-4 hover:text-red-600";

  const [isLangDropdownOpen, setIsLangdropdownOpen] = useState(false);

  const handleLangDropdown = () => {
    setIsLangdropdownOpen(!isLangDropdownOpen);
  };

  return (
    <>
      <header className={`mx-auto  max-w-7xl   hero-section w-full  `}>
        <nav
          className="flex items-center justify-between w-full p-4 md:p-6 lg:px-8"
          aria-label="Global"
        >
          <h1 href="/" className="flex items-center gap-1 text-4xl logo ">
            Logo
          </h1>

          <div className="xl:hidden flex gap-2 items-center">
            <button className="font-bold text-white bg-[#fe0002] py-2 px-4 rounded-[16px] flex items-center gap-2">
              <img src={order} /> Order now
            </button>
            <button
              className="ml-auto rounded-md p-2.5 text-gray-900 text-4xl transition duration-100"
              onClick={() => setMobile(true)}
            >
              <GiHamburgerMenu />
            </button>
          </div>

          <div className="hidden xl:flex md:space-x-16">
            <ul className="flex items-center space-x-8">
              <li className={`${active}`}>
                <a href="/">Home</a>
              </li>
              <li className={`${inActive}`}>
                <a href="/about">About</a>
              </li>
              <li className={`${inActive}`}>
                <a href="/">Services</a>
              </li>
              <li className={`${inActive}`}>
                <a href="/">Blog</a>
              </li>
              <li className={`${inActive}`}>
                <a href="/">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="xl:flex items-center gap-10 hidden">
            <div className="relative  transition-all duration-500 ease-out">
              <button
                className="font-bold text-red-500 flex items-center gap-2  transition-all duration-700 ease-out"
                onClick={handleLangDropdown}
              >
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={`text-red-500  transition-all duration-500 ease-out ${
                    isLangDropdownOpen ? "-rotate-180" : ""
                  }`}
                />
                English
              </button>
              <ul
                className={`${
                  isLangDropdownOpen ? "h-[80px] " : "h-0"
                } overflow-hidden font-bold flex flex-col gap-4 absolute left-3 top-10  transition-all duration-500 ease-out`}
              >
                <li>Arabic</li>
                <li>Kurdish</li>
              </ul>
            </div>
            <a
              className="hidden px-8 py-3 text-sm font-medium text-white bg-red-600 rounded-full shadow xl:block md:justify-end hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/"
            >
              <FontAwesomeIcon icon={faTruck} /> Order it right now
            </a>
          </div>
        </nav>
      </header>

      <div
        className={`hero-section top-0 right-0  bg-white  px-6 py-6 w-screen sm:max-w-sm sm:ring-1 sm:ring-text/10 text-black fixed h-full z-40 transition-transform ease-out duration-1000 ${
          mobile ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-3 ">
          <a href="/" className="flex items-center gap-1 text-5xl  logo">
            Logo
          </a>
          <button
            className="-m-2.5  rounded-md p-2.5 text-gray-900"
            onClick={() => setMobile(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-16 h-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flow-root mt-6">
          <div className="-my-2 divide-y divide-gray-500/50">
            <ul className="flex flex-col items-center py-6 space-y-10 text-2xl">
              <li className="font-bold">
                <a href="/" className="text-red-500">
                  Home
                </a>
              </li>
              <li className="font-bold">
                <a href="/">About</a>
              </li>
              <li className="font-bold">
                <a href="/">Services</a>
              </li>
              <li className="font-bold">
                <a href="/blog">Blog</a>
              </li>
              <li className="font-bold">
                <a href="/">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
        <button className="w-full text-center mt-28">
          <h1 className="mb-8 text-2xl font-bold">Language</h1>
          <p className="flex items-center justify-center gap-2 text-2xl font-medium">
            <span className="text-red-500">EN</span>|<span>KU</span>|
            <span>AR</span>
          </p>
        </button>
        <ul className="flex items-center gap-14 justify-center xl:justify-start mt-16">
          <li>
            <img src={whatsapp} alt="Whatsapp " className="w-[36px] h-[36px]" />
          </li>
          <li>
            <img src={facebook} alt="facebook " className="w-[36px] h-[36px]" />
          </li>
          <li>
            <img
              src={instagram}
              alt="instagram "
              className="w-[36px] h-[36px]"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
