import type { MouseEvent, ChangeEvent } from "react";
import { forwardRef } from "react";
import type { MovieInterface } from "../interfaces/MovieInterface";
import { addFavorite } from "../services/favoritesService";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

interface MovieCardProps {
  movie: MovieInterface;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onSeeCast: (movie: MovieInterface, e: MouseEvent) => void;
}

const MovieCard = forwardRef<HTMLDivElement, MovieCardProps>(
  ({ movie, isExpanded, onToggleExpand, onSeeCast }, ref) => {
    const { user } = useContext(AuthContext);
    const [favorite, setFavorite] = useState(false);
    const [rate, setRate] = useState<number>(0);
    const [hasAlerted, setHasAlerted] = useState(false);

    const handleToggleFavorite = async (e: MouseEvent) => {
        e.stopPropagation();
        if (!user) return alert("You must be logged in to add favorites.");
        try {
            await addFavorite(user.uid, movie.id, movie.title, !favorite, getCountry(), rate);
            setFavorite(!favorite)
            if (!hasAlerted) {
                alert("Movie added to favorites!");
                setHasAlerted(true);
            }
        } catch (error) {
            console.error("Error adding favorite:", error);
            alert("Failed to add movie to favorites.");
        }
    }
    const handleRateChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const newRate = parseFloat(e.target.value);
        setRate(newRate);
        if (!user) return;
        try {
            await addFavorite(user.uid, movie.id, movie.title, favorite, getCountry(), newRate);
        } catch (err) {
            console.error(err);
            alert("Failed to update rating.");
        }
    };

    const getCountry = () =>
        movie.details?.production_countries[0]?.name || "Unknown";

    return (
        <div ref={ref} 
            className="relative bg-white border cursor-pointer hover:bg-amber-400 hover:text-black
                 hover:font-semibold transition hover:scale-105 rounded-xl overflow-hidden shadow-md"
            onClick={onToggleExpand}
        >
            <img
                className="w-full h-52 object-cover"
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
            />
            <div className="p-4 text-center">
                <h2 className="font-semibold text-xl m-0">{movie.title.toUpperCase()}</h2>
                <p className="text-sm text-gray-600"> {movie.release_date}</p>
                <p className="text-sm text-gray-600">
                    {movie.original_language.toUpperCase()}  ·  {getCountry()}
                </p>
                <p className="text-sm text-gray-600">
                    {movie.details?.genres.map((g) => g.name).join(", ")}
                </p>
            </div>

            {isExpanded && (
                <div
                    className="absolute text-center top-0 left-0 w-full h-full bg-white bg-opacity-95 p-4 z-20
                    overflow-y-auto transition-all duration-300">
                    <p className="text-sm mb-2">{movie.details?.overview}</p>
                    <p className="text-sm text-gray-600">⭐ {movie.vote_average.toFixed(1)}</p>
                    <button
                        onClick={(e) => onSeeCast(movie, e)}
                        className="bg-black text-white px-4 mt-9 py-2 rounded hover:bg-gray-800"
                    > See Cast
                    </button>
                    <div className="grid grid-cols-2 mt-4 items-center text-center justify-center">
                        <div className="text-center">
                            <label className="block text-sm text-gray-600 mb-1">Save as Favorite</label>
                            <button
                                onClick={handleToggleFavorite}
                                className="transition hover:scale-110"
                                aria-label="Toggle Favorite"
                            >
                                {favorite ? "❤️" : "🤍"}
                            </button>
                        </div>
                        <div className="text-center">
                            <label className="block text-sm text-gray-600 mb-1">Rate!</label>
                            <input
                                type="number"
                                step="0.1"
                                min="0"
                                max="10"
                                value={rate}
                                onChange={handleRateChange}
                                className="p-2 border rounded w-24 text-center"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
      }
);
MovieCard.displayName = "MovieCard";

    export default MovieCard;