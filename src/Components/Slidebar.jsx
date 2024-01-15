import { useEffect, useState } from "react";
import Slider from "react-slick";
import "../App.css";
import s1 from "../assets/images/S1.png";
import s2 from "../assets/images/s2.png";
import s3 from "../assets/images/s3.png"; // Fix the image import paths

const images = [s1, s2, s3, s2];

function Slidebar() {
  const NextArrow = ({ onClick }) => (
    <div className=" arrow next" onClick={onClick}>
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
    <div className="arrow prev" onClick={onClick}>
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
    speed: 400,
    slidesToShow: numSlides,
    centerMode: true,
    centerPadding: 0,

    beforeChange: (current, next) => setImageIndex(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full slider-container lg:w-2/3">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={` ${
              idx === imageIndex
                ? "xl:w-[410px] xl:h-[197px] slide activeSlide "
                : "slide"
            }`}
          >
            <img
              src={img}
              alt={img}
              className={` xl:w-[305px] xl:h-[256px] transition-all duration-500 ease-in-out w-full h-full`}
              style={{
                transform:
                  idx === imageIndex - 1
                    ? "rotate(25deg) "
                    : idx === imageIndex + 1
                    ? "rotate(-25deg)"
                    : "none",
              }}
            />
            {idx === imageIndex && (
              <p className="absolute xl:right-[50%] right-[40%] xl:bottom-[-55%]   font-bold text-black">
                dumpyy
              </p>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slidebar;
