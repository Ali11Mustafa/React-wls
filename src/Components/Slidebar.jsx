import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../App.css";
import astronaut from "../assets/images/S1.png";
import celebrating from "../assets/images/s2.png";
import education from "../assets/images/s3.png";
import kitkat from "../assets/images/s4.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [education, astronaut, celebrating, kitkat, celebrating];

function Slidebar() {
  const imageSliderRef = useRef();
  const indexSliderRef = useRef();

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute cursor-pointer w-[40px] h-[40px] xl:w-[60px] xl:h-[60px]  md:-bottom-[40%] xl:-bottom-[70%] -bottom-16 md:right-[35%] right-[20%] bg-white shadow-md rounded-full flex items-center justify-center"
      onClick={() => {
        onClick();
        indexSliderRef.current.slickNext();
      }}
    >
      <FaChevronRight className="text-red-600 xl:text-2xl pointer-events-none" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute cursor-pointer w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] md:-bottom-[40%] xl:-bottom-[70%] -bottom-16 md:left-[35%] left-[20%]  bg-white shadow-md rounded-full  flex items-center justify-center"
      onClick={() => {
        onClick();
        indexSliderRef.current.slickPrev();
      }}
    >
      <FaChevronLeft className="text-red-600 xl:text-2xl pointer-events-none" />
    </button>
  );

  const [imageIndex, setImageIndex] = useState(0);
  const [numSlides, setNumSlides] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setNumSlides(windowWidth < 768 ? 1 : 3);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 900,
    slidesToShow: numSlides,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => {
      setImageIndex(next);
      indexSliderRef.current.slickGoTo(next);
    },

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const indexSettings = {
    infinite: true,
    lazyLoad: true,
    speed: 900,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <div />, // Disable arrows for the index slider
    prevArrow: <div />,
  };

  return (
    <div className="relative w-full slider-container mt-20 md:mt-0 lg:w-2/3 ">
      <Slider ref={imageSliderRef} {...settings}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`transition-all duration-700 ease-out ${
              idx === imageIndex ? "" : "scale-75"
            }`}
          >
            <img
              src={img}
              alt={img}
              className={`"w-[300px] h-[200px] mx-auto transition-all duration-700 ease-out `}
              style={{
                transform:
                  idx !== imageIndex
                    ? idx > imageIndex
                      ? "rotate(-25deg)"
                      : "rotate(25deg)"
                    : "rotate(0)",
              }}
            />
          </div>
        ))}
      </Slider>
      <div className="absolute left-[32%]    xl:left-[41%] md:left-[40%] -bottom-[28%] md:-bottom-[35%] ml-1 xl:-bottom-[60%] text-center text-sm md:text-base h-6  xl:w-[170px] md:w-[150px] w-[140px] overflow-hidden">
        <Slider ref={indexSliderRef} {...indexSettings}>
          {images.map((_, idx) => (
            <div key={idx} className="slide">
              <p className="">Dumppy</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Slidebar;
