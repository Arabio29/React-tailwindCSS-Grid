import React from "react";
import { TiWeatherSunny, TiWeatherNight } from "react-icons/ti";



const Header = () => {
  return (
    <>
      <header className="bg-transparet mb-6">
        <nav class="py-4">
          <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between items-center">
              <div>
                <a href="#" class="text-white text-xl font-semibold">
                  Mi Sitio
                </a>
              </div>
              <div class="flex md:hidden">
                <button
                  id="mobile-menu-button"
                  class="text-white focus:outline-none focus:text-white"
                >
                  <svg
                    class="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
              </div>

              <div className="flex">
                <a href="">

                  <i className="text-white">
                    <TiWeatherSunny />
                  </i>
                </a>
                <TiWeatherNight />
                <a href="" className="btn">
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
