import { Link } from "react-router-dom";
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/">Order Online</Link></li>
            <li><Link to="/">Login</Link></li>
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
