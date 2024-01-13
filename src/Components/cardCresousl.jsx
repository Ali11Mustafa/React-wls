import { useEffect, useState } from "react";
import Slider from "react-slick";
import "../App.css";
import astronaut from "../assets/images/S1.png";
import celebrating from "../assets/images/s2.png";
import education from "../assets/images/s3.png"; // Fix the image import paths
import data from "../data";
import Product from "./product";

const images = [astronaut, celebrating, education, education];

function Slidebar() {
  const NextArrow = ({ onClick }) => (
    <div className="arroww nextt" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arroww prevv" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
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
    // lazyLoad: true,
    speed: 400,
    slidesToShow: numSlides,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full slider-container lg:w-2/3 bg-gray-50">
      <Slider {...settings}>
        {data.map((data, idx) => (
          <div
            key={idx}
            className={idx === imageIndex ? "slidee activeSlidee" : "slide"}
          >
            <Product data={data} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slidebar;
