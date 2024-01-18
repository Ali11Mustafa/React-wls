import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import "./App.css";
import Slidebar from "./Components/Slidebar";
import Header from "./Components/Header";
import LatestProducts from "./Components/cardCresousl";
import BrandColaboration from "./Components/BrandColaboration";
import Footer from "./Components/Footer";

function App() {
  const [mobile, setMobile] = useState(false);

  return (
    <div className="flex flex-col w-full mx-auto gap-28 max-w-[90rem] bg-[#f9f9f9]  ">
      <section
        className={`shadow-md  shadow-gray-200/40 md:rounded-b-full  rounded-b-[500px] h-[850px] md:h-[650px] xl:h-[850px] hero-section ${
          mobile ? "filter blur-sm" : ""
        }`}
      >
        <Header />
        <div className="max-w-screen-xl px-4 py-5 mx-auto lg:py-20 lg:flex lg:items-center">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold sm:text-4xl">
              Example company can help you
            </h2>
            <p className="mt-4 text-base leading-relaxed sm:text-sm lg:text-lg">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                className="block px-12 py-3 text-sm font-bold text-white bg-[#fe0002]  rounded-[20px] shadow  focus:outline-none focus:ring  sm:w-auto"
                href="/"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Slidebar />
        </div>
      </section>

      <div className="flex flex-col items-center ">
        <h1
          className="font-bold text-center "
          style={{ color: "#FE0002", fontSize: "36px", lineHeight: "48px" }}
        >
          Latest Product
        </h1>
        <LatestProducts />

        <div className="flex justify-center pt-5 pb-5 mt-5">
          <button
            className="px-20 py-2 font-bold text-white rounded-md md:rounded-[15px] "
            style={{ backgroundColor: "#FE0002" }}
          >
            View All
          </button>
        </div>
      </div>
      <BrandColaboration />
      <Footer />
    </div>
  );
}

export default App;
