import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-100 px-6 py-4 shadow-md flex flex-col sm:flex-row justify-between items-center gap-2">
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm sm:text-base">
        <Link to="/" className="text-gray-700 hover:text-amber-500 font-bold">Home</Link>
        <Link to="/movies" className="text-gray-700 hover:text-amber-500 font-bold">Top 20 Movies</Link>
        <Link to="/movies-full-list" className="text-gray-700 hover:text-amber-500 font-bold">Full List</Link>
        <Link to="/favorites" className="text-gray-700 hover:text-amber-500 font-bold">Favorites</Link>
      </div>
      <div className="flex gap-2 items-center">
        {user ? (
          <>
            <span className="font-zen-dots text-sm sm:text-base text-amber-500">{user.email}</span>
            <button onClick={handleLogout} className="text-gray-700 hover:text-amber-500 font-bold">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-700 hover:text-amber-500 font-bold">Login</Link>
            <Link to="/register" className="text-gray-700 hover:text-amber-500 font-bold">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
