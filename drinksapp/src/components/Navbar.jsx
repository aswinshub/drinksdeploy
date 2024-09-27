import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#121618] h-[100px]">
      <div className="container mx-auto flex justify-between  items-end h-full">
    
          <div className=" relative container mx-auto flex justify-between  items-end h-full">
            <div className="flex absolute top-[68px] left-[45%] sm:left-[100px]   h-[60px] w-[200px] gap-3">
              <img
                src="src/assets/logo.png"
                alt="drink"
                className="object-cover h-[60px] w-[60px] "
              />

              <div className="hidden sm:flex sm:flex-col   ">
              <h1 href="#" className=" text-[#0796EF]  font-oswald "> DEEP NET </h1>
              <h1 href="#" className=" text-white  font-oswald "> SOFT </h1>
              </div>
            </div>
          </div>
        

        <div className="hidden md:flex space-x-6 ml-auto">
          <a href="#" className="text-white hover:text-[#0796EF] font-oswald">
            HOME
          </a>
          <a href="#" className="text-[#0796EF] font-oswald">
            MENU
          </a>
          <a href="#" className="text-white hover:text-[#0796EF] font-oswald">
            MAKE A RESERVATION
          </a>
          <a href="#" className="text-white hover:text-[#0796EF] font-oswald">
            CONTACT US
          </a>
        </div>

      
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 text-white hover:bg-blue-500">
            Home
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-blue-500">
            Menu
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-blue-500">
            Make a Reservation
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-blue-500">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
