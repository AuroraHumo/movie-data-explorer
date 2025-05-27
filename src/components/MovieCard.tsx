import type { MouseEvent } from "react";
import type { MovieInterface } from "../interfaces/MovieInterface";
import { addFavorite } from "../services/favoritesService";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

interface MovieCardProps {
    movie: MovieInterface;
    isExpanded: boolean;
    onToggleExpand: () => void;
    onSeeCast: (movie: MovieInterface, e: MouseEvent) => void;
}

export default function MovieCard({
    movie,
    isExpanded,
    onToggleExpand,
    onSeeCast,
}: MovieCardProps) {

    const { user } = useContext(AuthContext);
    const handleAddFavorite = async (e: MouseEvent) => {
        e.stopPropagation();
        if (!user) {
            alert("You must be logged in to add favorites.");
            return;
        }
        try {
            await addFavorite(user.uid, movie.id, movie.title);
            alert("Movie added to favorites!");
        } catch (error) {
            console.error("Error adding favorite:", error);
            alert("Failed to add movie to favorites.");
        }
    }
    return (
        <div
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
                    {movie.original_language.toUpperCase()}
                    . {movie.details?.production_countries[0]?.name || "N/A"}
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
                        className="bg-black text-white px-4 mt-4 py-2 rounded hover:bg-gray-800"
                    > See Cast
                    </button>
                    <p>
                        <button
                            onClick={handleAddFavorite}
                            className="bg-black text-white px-4 mt-4 py-2 rounded hover:bg-gray-800"
                        >
                            Add as Favorite
                        </button>
                    </p>
                </div>
            )}
        </div>
    );
}
