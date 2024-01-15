import { Dialog } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretDown, faTruck } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { Transition } from "@headlessui/react";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const active =
    "text-lg font-bold border-red-600 border-b-2 py-1  text-red-600 text-primary";
  const inActive =
    "text-lg font-medium leading-6 text-primary px-4 hover:text-red-600";

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

          <button
            className="xl:hidden ml-auto rounded-md p-2.5 text-gray-900 hover:text-red-600 transition duration-100"
            onClick={() => {
              setMobile(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

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
          <div className="flex items-center gap-10">
            <button className="hidden xl:block">
              <FontAwesomeIcon icon={faCaretDown} className="text-black" />{" "}
              English
            </button>
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
        className={`hero-section top-0 right-0  bg-white  px-6 py-6 w-screen sm:max-w-sm sm:ring-1 sm:ring-text/10 text-black fixed h-full z-40  ease-out duration-1000 ${
          mobile ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-3 ">
          <a href="/" className="flex items-center gap-1 text-lg logo">
            Logo
          </a>
          <button
            className="-m-2.5 rounded-md p-2.5 text-gray-900"
            onClick={() => setMobile(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
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
            <ul className="flex flex-col items-center py-6 space-y-10">
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
          <h1 className="mb-8 text-xl font-bold">Language</h1>
          <p className="flex items-center justify-center gap-2 text-xl font-medium">
            <span className="text-red-500">EN</span>|<span>KU</span>|
            <span>AR</span>
          </p>
        </button>
        <p className="w-full mt-5 text-center">
          <p className="flex items-center justify-center gap-2 text-xl font-medium ">
            <span className="p-5 text-red-500">
              {" "}
              <FontAwesomeIcon icon={faFacebook} className="text-black" />{" "}
            </span>
            <span className="p-5">
              {" "}
              <FontAwesomeIcon icon={faInstagram} className="text-black" />
            </span>
            <span className="p-5">
              <FontAwesomeIcon icon={faWhatsapp} className="text-black" />
            </span>
          </p>
        </p>
      </div>
    </>
  );
};

export default Header;
