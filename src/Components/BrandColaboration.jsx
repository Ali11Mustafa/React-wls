import React from "react";

import nike from "../assets/images/brands/nike.svg";
import github from "../assets/images/brands/github.svg";
import qantas from "../assets/images/brands/qantas.svg";
import cisco from "../assets/images/brands/cisco.svg";

function BrandColaboration() {
  const brands = [
    {
      id: 1,
      name: "qantas",
      imgSrc: qantas,
    },
    {
      id: 2,
      name: "github",
      imgSrc: github,
    },
    {
      id: 3,
      name: "CISCO",
      imgSrc: cisco,
    },
    {
      id: 4,
      name: "Nike",
      imgSrc: nike,
    },
    {
      id: 5,
      name: "qantas",
      imgSrc: qantas,
    },
    {
      id: 6,
      name: "Github",
      imgSrc: github,
    },
    // {
    //   id: 7,
    //   name: "qantas",
    //   imgSrc: qantas,
    // },
    // {
    //   id: 8,
    //   name: "github",
    //   imgSrc: github,
    // },
    // {
    //   id: 9,
    //   name: "CISCO",
    //   imgSrc: cisco,
    // },
    // {
    //   id: 10,
    //   name: "Nike",
    //   imgSrc: nike,
    // },
    // {
    //   id: 11,
    //   name: "qantas",
    //   imgSrc: qantas,
    // },
    // {
    //   id: 12,
    //   name: "Github",
    //   imgSrc: github,
    // },
  ]; // Add more brand names to the array

  return (
    <div>
      <h1 className="text-red-500 font-bold text-5xl md:text-4xl text-center">
        Our Brand Colabration
      </h1>
      <div className="mx-auto ">
        <div className="scrollbar-hide | flex items-center gap-8 md:justify-center justify-start mt-16 pb-10 overflow-scroll scroll-smooth px-10">
          {" "}
          {brands.map((brand) => (
            <img
              src={brand.imgSrc}
              alt={brand.name}
              key={brand.id}
              className="md:w-[120px] md:h-[120px] w-[80px] h-[80px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandColaboration;
