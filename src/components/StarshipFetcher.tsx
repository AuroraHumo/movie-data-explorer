import { useEffect, useState } from "react";
import type { Starship } from "../interfaces/Starship";
import { API_URL } from "../data/apiConfig";
import StarshipList from "./StarshipList";

const StarshipFetcher = () => {
    const [starships, setStarships] = useState<Starship[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(API_URL.STARWARS_SHIPS);
                const json = await res.json();
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

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return <StarshipList starships={starships} />;
};

export default StarshipFetcher;
