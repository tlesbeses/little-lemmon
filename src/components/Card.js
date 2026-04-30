export  function Card({ title, price, desc, img }) {
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