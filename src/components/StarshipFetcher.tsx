import { useEffect, useState } from "react";
import type { Starship } from "../interfaces/Starship";
import { API_URL } from "../data/apiConfig";
import StarshipList from "./StarshipList";
import Spinner from "./Spinner";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const StarshipFetcher = () => {
    const [starships, setStarships] = useState<Starship[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(API_URL.STARWARS_SHIPS);
                const json = await res.json();
                
                const delayPromise = delay(2000);
                 // Simulate a 2-second delay
                 await delayPromise;
                setStarships(json.results);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(`Error loading data: ${err.message}`);
                } else {
                    setError("Unknown error occurred.");
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) return <div className="flex justify-center items-center h-screen">
                    <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4">Loading...</h2>
                    <p className="text-gray-700 mb-4">Please wait while we fetch the starships.</p>

                    <Spinner />
                    </div>
                </div>
    if (error) return <p>{error}</p>;

    return <StarshipList starships={starships} />;
};

export default StarshipFetcher;
