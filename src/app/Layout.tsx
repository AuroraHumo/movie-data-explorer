import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";


export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <nav className="p-4 bg-gray-100 flex justify-between">
        <div>
          <a href="/" className="text-gray-700 hover:text-amber-500 transition-colors font-bold "
              > Home </a> |  
          <a href="/starships" className="text-gray-700 hover:text-amber-500 transition-colors font-bold "
              > Starships</a>
        </div>
        <div>
          {user ? (
            <>
              <span>{user.email} | </span>
              <button onClick={handleLogout} className="text-gray-700 hover:text-amber-500 transition-colors font-bold ">Logout</button>
            </>
          ) : (
            <>
              <a href="/login" className="text-gray-700 hover:text-amber-500 transition-colors font-bold ">Login </a>
              | <a href="/register" className="text-gray-700 hover:text-amber-500 transition-colors font-bold "> Register</a>
            </>
          )}
        </div>
      </nav>
      <main className="p-6 text-center items-center">{children}</main>
    </div>
  );
}
