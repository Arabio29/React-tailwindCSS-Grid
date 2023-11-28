import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-transparet mb-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
          </div>

          <div className="flex items-center justify-between">
            <div className="py-3">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-violet-200 bg-violet-600 hover:bg-violet-700"
              >
                Hire me
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
