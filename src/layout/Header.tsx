import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 sticky top-0 sm:top-0 text-left bg-white z-50">
      <div className="sm:max-w-4xl mx-auto flex ">
        
        <nav className="flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-amber-500 transition-colors font-bold active:font-light "
          >
            Hoome
          </Link>
          <Link
            to="/starships"
            className="text-gray-700 hover:text-amber-400 transition-colors font-bold"
          >
            Starships
          </Link>
          
        </nav>
      </div>
    </header>
  );
}

