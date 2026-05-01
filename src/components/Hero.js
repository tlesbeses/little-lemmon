// src/components/Hero.jsx
import React from "react";
import HeroImage from "../assets/img/heroimg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-[#495E57] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#F4CE14]">
            Little Lemon
          </h1>
          <h2 className="text-xl md:text-2xl mt-2">Chicago</h2>

          <p className="mt-4 text-gray-200 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/booking">
            <button className="mt-6 bg-[#F4CE14] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Reserve a Table
            </button>
          </Link>
        </div>

        {/* Imagen */}
        <div className="relative">
          <img
            src={HeroImage}
            alt="Restaurant food"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
