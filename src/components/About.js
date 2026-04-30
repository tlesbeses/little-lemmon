import React from 'react';
import RestaurantA from "../assets/img/restaurantA.jpg";
import RestaurantB from "../assets/img/restaurantB.jpg";
export function About() {
  return (
    <section className="bg-white py-22 px-4 overflow-hidden">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="flex-1">
          <h1 className="font-serif text-secondary text-display">Little Lemon</h1>
          <h2 className="font-serif text-primary text-title -mt-2 mb-6">Chicago</h2>
          <p className="font-sans text-grayDark text-lead max-w-md">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam 
            consequat sunt nostrud amet.
          </p>
        </div>

        {/* Imágenes Superpuestas */}
        <div className="flex-1 relative h-[400px] w-full max-w-[400px]">
          <img 
            src={RestaurantA} 
            alt="Chef preparing food" 
            className="absolute right-0 top-0 w-3/4 h-3/4 object-cover rounded-lg z-10 border-4 border-white"
          />
          <img 
            src={RestaurantB} 
            alt="Restaurant patio" 
            className="absolute left-0 bottom-0 w-3/4 h-3/4 object-cover rounded-lg z-0"
          />
        </div>
      </div>
    </section>
  );
};

