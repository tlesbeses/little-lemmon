import { useState } from "react";
import Logo from "../assets/Logo.svg";

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
            bg-primary md:bg-transparent
            left-0 w-full md:w-auto
            flex flex-col md:flex-row
            items-start md:items-center
            gap-4 md:gap-6
            px-6 md:px-0 py-4 md:py-0
            transition-all duration-300
            ${open ? "top-16 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"}
          `}
        >
          <li>
            <a
              href="/"
              className="text-gray-900 font-medium text-sm md:text-base hover:text-green-700 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-gray-900 font-medium text-sm md:text-base hover:text-green-700 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/menu"
              className="text-gray-900 font-medium text-sm md:text-base hover:text-green-700 transition-colors"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="/reservations"
              className="text-gray-900 font-medium text-sm md:text-base hover:text-green-700 transition-colors"
            >
              Reservations
            </a>
          </li>
          <li>
            <a
              href="/order" className="text-gray-900 font-medium text-sm md:text-base hover:text-green-700 transition-colors">
              Order Online
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="text-gray-900 font-medium text-sm md:text-base hover:text-green-700 transition-colors"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
