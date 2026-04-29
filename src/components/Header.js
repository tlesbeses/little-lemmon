import { useState } from "react";

export  function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="font-bold text-lg">MyApp</h1>

        {/* Botón Hamburger */}
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
            bg-gray-800
            left-0 w-full md:w-auto
            flex flex-col md:flex-row
            items-start gap-4
            transition-all duration-300
            align-initial
            pl-6
            ${open ? "top-16 opacity-100" : "top-[-300px] opacity-0 md:opacity-100"}
          `}
        >
          <li>
            <a href="/" className="block p-2 hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="block p-2 hover:text-yellow-400">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="block p-2 hover:text-yellow-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}