import { useEffect, useState } from "react";
import type { Starship } from "../interfaces/Starship";
import { API_URL } from "../data/apiConfig";
import StarshipList from "../pages/StarshipList";
import Spinner from "../components/Spinner";

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

    if (isLoading) return  <Spinner />
                    
    if (error) return <p>{error}</p>;

    return <StarshipList starships={starships} />;
};

export default StarshipFetcher;
