import { useEffect, useState } from "react";
import Slider from "react-slick";
import "../App.css";
import astronaut from "../assets/images/S1.png";
import celebrating from "../assets/images/s2.png";
import education from "../assets/images/s3.png"; // Fix the image import paths
import data from "../data";
import Product from "./product";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [astronaut, celebrating, education, education];

function LatestProducts() {
  const NextArrow = ({ onClick }) => (
    <div
      className="hidden  absolute cursor-pointer w-[60px] h-[60px] -right-32 ml-4 top-[40%] bg-white shadow-md rounded-full xl:flex items-center justify-center"
      onClick={onClick}
    >
      <FaChevronRight className="text-red-600 text-2xl" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="hidden  absolute cursor-pointer w-[60px] h-[60px] -left-20 top-[40%] bg-white shadow-md rounded-full xl:flex items-center justify-center"
      onClick={onClick}
    >
      <FaChevronLeft className="text-red-600 text-2xl" />
    </div>
  );

  const [imageIndex, setImageIndex] = useState(0);

  const [numSlides, setNumSlides] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setNumSlides(
        windowWidth < 768
          ? 1
          : windowWidth < 1200
          ? windowWidth < 992
            ? 2
            : 3
          : 4
      );
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    centerMode: true,
    // lazyLoad: true,
    speed: 400,
    slidesToShow: numSlides,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full slider-container  xl:-translate-x-10">
      <Slider {...settings}>
        {data.map((data, idx) => (
          <div key={idx}>
            <Product data={data} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LatestProducts;
