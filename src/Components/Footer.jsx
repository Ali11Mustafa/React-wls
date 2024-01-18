import React from "react";

import whatsapp from "../assets/images/social/whatsapp.svg";
import facebook from "../assets/images/social/facebook.svg";
import instagram from "../assets/images/social/instagram.svg";
import phone from "../assets/images/icons/phone.svg";
import logo from "../assets/images/logo.svg";

function Footer() {
  return (
    <div className="px-10 flex flex-col gap-16 xl:gap-20 xl:flex-row relative xl:pb-20">
      <div className="text-center flex flex-col gap-4 xl:text-left xl:w-[400px]">
        <h1 className="text-4xl">Logo</h1>
        <h2 className="font-bold text-3xl">Example NNNN</h2>
        <p className="font-semibold">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <ul className="flex items-center gap-14 justify-center xl:justify-start mt-5">
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
      <div className="text-center xl:text-left flex flex-col gap-5">
        <h1 className="text-3xl font-bold ">Contact Phone</h1>
        <div>
          <span className="text-gray-300 mb-2 block">Inside</span>
          <ul className="flex flex-col gap-4 items-center xl:items-start">
            <li className="flex items-center gap-6">
              <img src={phone} alt="" className="w-[24px] h-[24px]" />
              <span>+964 755 121 2323</span>
            </li>
            <li className="flex items-center gap-6">
              <img src={phone} alt="" className="w-[24px] h-[24px]" />
              <span>+964 755 121 2323</span>
            </li>
            <li className="flex items-center gap-6">
              <img src={phone} alt="" className="w-[24px] h-[24px]" />
              <span>+964 755 121 2323</span>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-gray-300 mb-2 block">Outside</span>
          <ul className="flex flex-col gap-4 items-center  xl:items-start">
            <li className="flex items-center gap-6">
              <img src={phone} alt="" className="w-[24px] h-[24px]" />
              <span>+964 755 121 2323</span>
            </li>
            <li className="flex items-center gap-6">
              <img src={phone} alt="" className="w-[24px] h-[24px]" />
              <span>+964 755 121 2323</span>
            </li>
            <li className="flex items-center gap-6">
              <img src={phone} alt="" className="w-[24px] h-[24px]" />
              <span>+964 755 121 2323</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="ml-auto hidden xl:block">
        <h1 className="text-3xl font-bold mb-14">Contact Us</h1>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col items-start gap-2 text-gray-400 text-sm w-[250px]">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-b-2 border-gray-300 bg-transparent pb-2 w-full"
            />
          </div>
          <div className="flex flex-col items-start gap-2 text-gray-400 text-sm w-[250px]">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Write your message"
              className="border-b-2 border-gray-300 bg-transparent pb-2 w-full"
            />
          </div>
          <button className="bg-[#000000] rounded-[20px] text-white mt-10 h-[45px] w-[150px]">
            Send
          </button>
        </form>
      </div>
      <div className="text-center mb-5">
        <img
          src={logo}
          alt="logo"
          className="w-[100px] h-[100px] mx-auto xl:absolute right-0 bottom-0"
        />
        <p className="text-sm xl:hidden">
          @2023 Powered by White Label Solutions
        </p>
      </div>
    </div>
  );
}

export default Footer;
