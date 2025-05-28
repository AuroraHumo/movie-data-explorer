import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import type { MovieInterface } from "../interfaces/MovieInterface";
import MovieList from "../pages/MovieList";
import ErrorPage from "../pages/ErrorPage";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_TMDB_API_KEY,
    }
};

export const MovieFetcher = () => {
    const [movies, setMovies] = useState<MovieInterface[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://api.themoviedb.org/3/trending/movie/week', fetchOptions);
                const json = await res.json();
                console.log(json.results);
                const detailedMovies = await Promise.all(
                    json.results.map(async (movie: MovieInterface) => {
                        const [detailsRes, creditsRes] = await Promise.all([
                            fetch(`https://api.themoviedb.org/3/movie/${movie.id}`, fetchOptions),
                            fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits`, fetchOptions)
                        ]);

                        const details = await detailsRes.json();
                        const credits = await creditsRes.json();

                        return {
                            ...movie,
                            details,
                            cast: credits.cast.slice(0, 6)
                        };
                    })
                );

                const delayPromise = delay(1000);

                await delayPromise;
                setMovies(detailedMovies);

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
    if (error) return <ErrorPage error={error}/>
    return <MovieList movies={movies} />;
};
