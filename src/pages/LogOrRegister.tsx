import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function LogOrRegister() {
    return (
        <div className="flex flex-col items-center text-center justify-center h-screen">
            <h1 className="text-4xl font-zen-dots-bold mb-4">Log in or Register</h1>
            <p className="text-gray-700 mb-4">To see all the movies, please log in!</p>
            
            <div className="flex space-x-4 mt-4">
                <Link to="/login">
                    <Button type="button">Log In</Button>
                </Link>
                <Link to="/register">
                    <Button type="button">Register</Button>
                </Link>

            </div>
        </div>
    );
}