import {
  faBox,
  faBoxOpen,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../App.css";

export default function Product({ data }) {
  return (
    <div className="flex flex-col justify-between mx-auto text-gray-900 bg-white w-[400px] h-[500px] border-red-500 rounded-lg shadow-xl ">
      <div className="overflow-hidden rounded-t-lg">
        <img
          className="object-cover object-top w-full"
          src={data.imageUrl}
          alt="Mountain"
        />
      </div>

      <div className="text-center sm:mt-6">
        <h2 className="text-2xl font-bold md:text-4xl">{data.heading}</h2>
      </div>
      <ul className="flex items-center py-4 mt-4 text-gray-700 justify-evenly sm:mt-8">
        <li className="flex flex-col items-center justify-around text-2xl">
          <FontAwesomeIcon
            icon={faBox}
            style={{ color: "red", fontSize: "32px" }}
          />
          <div> 6*24*60g</div>
        </li>
        <li className="flex flex-col items-center justify-between text-2xl">
          <FontAwesomeIcon
            icon={faBoxOpen}
            style={{ color: "red", fontSize: "32px" }}
          />

          <div>M3 0.05515</div>
        </li>
        <li className="flex flex-col items-center justify-around text-2xl">
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ color: "red", fontSize: "32px" }}
          />

          <div>Jorden</div>
        </li>
      </ul>
      <div className="">
        <button
          className="w-full py-4 mx-auto text-2xl font-semibold text-white cla hover:shadow-lg"
          style={{ backgroundColor: `${data.CustomBaclground}` }}
        >
          52 Weeks
        </button>
      </div>
    </div>
  );
}
