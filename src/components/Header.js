import { useState } from "react";
import Logo from "../assets/svg/Logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-grayLight text-white">
      <div className="max-w-container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src={Logo} alt="Little Lemon Logo" className="h-10 w-auto" />

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        {/* Menu */}
        <ul
          className={`
  absolute md:static
  bg-grayLight md:bg-transparent
  left-0 w-full md:w-auto
  
  flex flex-col md:flex-row
  items-stretch md:items-center
  gap-2 md:gap-6
  
  px-4 md:px-0 py-4 md:py-0 pl-6 md:pl-0

   divide-y divide-gray-300 md:divide-none
  
  rounded-b-xl md:rounded-none
  shadow-md md:shadow-none
  
  transition-all duration-300
  ${open ? "top-16 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"}
`}
        >
          <li>
            <Link
              to="/"
              className="text-gray-900 font-medium text-sm md:text-base font-sans hover:text-green-600 hover:scale-105 transition-all duration-200 ease-in-out inline-block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-900 font-medium text-sm md:text-base font-sans hover:text-green-600 hover:scale-105 transition-all duration-200 ease-in-out inline-block"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-900 font-medium text-sm md:text-base font-sans hover:text-green-600 hover:scale-105 transition-all duration-200 ease-in-out inline-block"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/booking"
              className="text-gray-900 font-medium text-sm md:text-base font-sans hover:text-green-600 hover:scale-105 transition-all duration-200 ease-in-out inline-block"
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-900 font-medium text-sm md:text-base font-sans hover:text-green-600 hover:scale-105 transition-all duration-200 ease-in-out inline-block"
            >
              Order Online
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-900 font-medium text-sm md:text-base font-sans hover:text-green-600 hover:scale-105 transition-all duration-200 ease-in-out inline-block"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
