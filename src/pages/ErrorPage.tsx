import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function ErrorPage({ error }: { error: string | null }) {
    
    return (
        <div className="flex flex-col items-center text-center justify-center h-screen">
            <h1 className="text-4xl font-zen-dots-bold mb-4">OOPS!</h1>
            <p className="text-gray-700 mb-4">Something went wrong</p>
            {error && (
                <p className="text-red-500 mb-4">
                    {error}
                </p>
            )}
            <div className="flex space-x-4 mt-4">
                <Link to="/">
                    <Button type="button">Go Home</Button>
                </Link>
            </div>
        </div>
    );
}