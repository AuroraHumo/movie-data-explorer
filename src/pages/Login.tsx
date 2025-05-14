import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/starships ");
    } catch {
      setError("Email o contrasenya incorrectes");
    }
  };

  return (
    <div className="flex flex-col items-center text-center justify-center h-svh">
      <h1 className="text-4xl font-zen-dots-bold mb-4">Log in </h1>
      <p className="text-gray-700 mb-4">And have full access to the database!</p>
      <form onSubmit={handleLogin} className="space-y-4 items-center text-center justify-center">
        
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border border-gray-300 rounded-lg px-4 py-2 w-64 text-center m-2"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border border-gray-300 rounded-lg px-4 py-2 w-64 m-2 text-center"

          required
        />
        <div className="items-center justify-center mt-4">

        <Button type="submit">Entrar</Button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>

  );
}
