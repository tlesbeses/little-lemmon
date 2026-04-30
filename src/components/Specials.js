import lemmonDessert from "../assets/lemonDessert.jpg"
import greekSalad from "../assets/greekSalad.jpg"

export function Specials() {

  const items = [
    {
      title: "Greek salad",
      price: "$12.99",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img : greekSalad
    },
    {
      title: "Kulcha",
      price: "$9.99",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img : greekSalad
    },
    {
      title: "Lemon Dessert",
      price: "$2.99",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img : lemmonDessert
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Specials</h2>

        <button className="bg-[#2c0d0b] text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
          Online Menu
        </button>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </section>
  );
}

function Card({ title, price, desc, img }) {
  return (
    <div className="bg-[#EDEFEE] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
      
     
      <div className="h-40 bg-gray-300">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Contenido */}
      <div className="p-4 space-y-3">
        
        {/* Title + Price */}
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{title}</h3>
          <span className="text-orange-400 font-medium">{price}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">
          {desc}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium">Order a delivery</span>
          <span>🛵</span>
        </div>
      </div>
    </div>
  );
}