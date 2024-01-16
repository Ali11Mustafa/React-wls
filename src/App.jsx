import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import "./App.css";
import Slidebar from "./Components/Slidebar";
import CardCreousk from "./Components/cardCresousl";
import Header from "./Components/Header";

function App() {
  const [mobile, setMobile] = useState(false);

  return (
    <div className="bg-gray-50">
      <section
        className={`shadow-md shadow-gray-200/40 rounded-bl-full rounded-br-full h-[600px] md:h-[650px] xl:h-[850px] hero-section ${
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
                className="block px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto "
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

      <div className="flex justify-center bg-gray-50">
        <h1
          className="font-bold "
          style={{ color: "#FE0002", fontSize: "36px", lineHeight: "48px" }}
        >
          Latest Product
        </h1>
      </div>
      <div className="flex justify-center bg-gray-50">
          <CardCreousk />
        </div>
      <div>
        

        <div className="flex justify-center pt-5 pb-5 mt-5">
          <button
            className="px-8 py-2 font-bold text-white rounded-full "
            style={{ backgroundColor: "#FE0002" }}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
