import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import type { MovieInterface } from "../interfaces/MovieInterface";
import MovieList from "../pages/MovieList";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const MovieFetcher = () => {
    const [movies, setMovies] = useState<MovieInterface[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_URL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
                // 🔐 Atenció: Aquesta clau és pública només per proves. No és segur per producció!
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: import.meta.env.VITE_TMDB_API_KEY,
                    }
                };
                const res = await fetch(API_URL, options);
                const json = await res.json();

                const detailedMovies = await Promise.all(
                    json.results.map(async (movie: MovieInterface) => {
                        const [detailsRes, creditsRes] = await Promise.all([
                            fetch(`https://api.themoviedb.org/3/movie/${movie.id}`, {
                                headers: { Authorization: import.meta.env.VITE_TMDB_API_KEY }
                            }),
                            fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits`, {
                                headers: { Authorization: import.meta.env.VITE_TMDB_API_KEY }
                            })
                        ]);

                        const details = await detailsRes.json();
                        const credits = await creditsRes.json();

                        return {
                            ...movie,
                            details,
                            cast: credits.cast.slice(0, 5) // Els 5 primers actors
                        };
                    })
                );

                const delayPromise = delay(2000);
                // Simulate a 2-second delay
                await delayPromise;
                setMovies(detailedMovies);
                console.log(detailedMovies);

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
    if (isLoading) return <Spinner />
    if (error) return <p>{error}</p>;
    return <MovieList movies={movies} />;
};
