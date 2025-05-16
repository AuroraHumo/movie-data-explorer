import { useState } from "react";
import type { MovieInterface } from "../interfaces/MovieInterface";
import ModalMovie from "../components/ModalMovie";

interface Props {
  movies: MovieInterface[];
}

const MovieList = ({ movies }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [info, setInfo] = useState<MovieInterface | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <>
      <h1 className="text-2xl mb-6">Latest Movies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((item, index) => (
          <div
            key={index}
            className="relative bg-white border cursor-pointer hover:bg-amber-400 hover:text-black hover:font-semibold transition hover:scale-105 rounded-xl overflow-hidden shadow-md"
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          >
            <img
              className="w-full h-52 object-cover"
              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
              alt={item.title}
            />
            <div className="p-4">
              <h2 className="font-semibold text-xl m-0">{item.title.toUpperCase()}</h2>
              <p className="text-sm text-gray-600">Release: {item.release_date}</p>
              <p className="text-sm text-gray-600"> {item.details?.genres.map(g => g.name).join(", ")}</p>
              <p className="text-sm text-gray-600"> ⭐ {item.vote_average.toFixed(1)}</p>
            </div>

            {expandedIndex === index && (
              <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-95 p-4 z-20 overflow-y-auto transition-all duration-300">
                <p className="text-sm mb-2">{item.details?.overview}</p>
                
                <p className="text-sm mb-4">
                  <strong>Language:</strong> {item.original_language.toUpperCase()}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // evita que tanqui el desplegable
                    setOpenModal(true);
                    setInfo(item);
                  }}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                  See Cast
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {info && (
        <ModalMovie
          open={openModal}
          onClose={() => setOpenModal(false)}
          info={info}
        />
      )}
    </>
  );
};

export default MovieList;
