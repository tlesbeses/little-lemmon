import Logo from "../assets/svg/Logo.svg";
export function Footer() {
  return (
    <footer className="bg-accentLight py-12 px-4">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo / Imagen */}
        <div>
          <img 
            src={Logo} 
            alt="Footer Logo" 
            className="rounded-lg h-auto w-auto mx-auto md:mx-0 object-cover"
          />
        </div>

        {/* Navegación */}
        <div>
          <h4 className="font-bold text-grayDark mb-4">Doormat Navigation</h4>
          <ul className="space-y-2 text-small text-grayDark font-sans">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/about" className="hover:text-primary">About</a></li>
            <li><a href="/menu" className="hover:text-primary">Menu</a></li>
            <li><a href="/reservations" className="hover:text-primary">Reservations</a></li>
            <li><a href="/order" className="hover:text-primary">Order Online</a></li>
            <li><a href="/login" className="hover:text-primary">Login</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-bold text-grayDark mb-4">Contact</h4>
          <ul className="space-y-2 text-small text-grayDark font-sans">
            <li>234 Lemon St, Chicago</li>
            <li>+1 (312) 555-0123</li>
            <li>contact@littlelemon.com</li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h4 className="font-bold text-grayDark mb-4">Social Media Links</h4>
          <ul className="space-y-2 text-small text-grayDark font-sans">
            <li><a href="#" className="hover:text-primary">Facebook</a></li>
            <li><a href="#" className="hover:text-primary">Instagram</a></li>
            <li><a href="#" className="hover:text-primary">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
