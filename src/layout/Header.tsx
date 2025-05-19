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
    <nav className="p-4 bg-gray-100 flex justify-between">
      <div>
        <Link to="/" className="text-gray-700 hover:text-amber-500 font-bold">Home</Link> |  
        <Link to="/starships" className="text-gray-700 hover:text-amber-500 font-bold"> Starships</Link> | 
        <Link to="/movies" className="text-gray-700 hover:text-amber-500 font-bold"> TOP 20 MOVIES</Link> | 
        <Link to="/movies-full-list" className="text-gray-700 hover:text-amber-500 font-bold"> FULL LIST</Link>

      </div>
      <div>
        {user ? (
          <>
            <span className=" font-zen-dots text-amber-500">{user.email}  </span>
            <button onClick={handleLogout} className="text-gray-700 hover:text-amber-500 font-bold"> | Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-700 hover:text-amber-500 font-bold">Login</Link> | 
            <Link to="/register" className="text-gray-700 hover:text-amber-500 font-bold">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
