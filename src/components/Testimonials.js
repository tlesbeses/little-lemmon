import React from 'react';

const testimonials = [
  { id: 1, rating: "5/5", name: "Alex P.", review: "Great food!", img: "https://via.placeholder.com/100" },
  { id: 2, rating: "4/5", name: "Maria R.", review: "Loved the atmosphere.", img: "https://via.placeholder.com/100" },
  { id: 3, rating: "5/5", name: "John D.", review: "Best lemon pasta ever.", img: "https://via.placeholder.com/100" },
  { id: 4, rating: "5/5", name: "Sara L.", review: "Highly recommended!", img: "https://via.placeholder.com/100" },
];

const Testimonials = () => {
  return (
    <section className="bg-primary py-18 px-4">
      <div className="max-w-container mx-auto">
        <h2 className="font-serif text-white text-title text-center mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-lg shadow-card">
              <p className="text-secondary font-bold mb-2">{t.rating}</p>
              <div className="flex items-center gap-4 mb-3">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <p className="font-sans font-bold text-grayDark">{t.name}</p>
              </div>
              <p className="text-grayDark text-small italic">"{t.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;