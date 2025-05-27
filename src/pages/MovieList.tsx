import { useState } from "react";
import type { MovieInterface } from "../interfaces/MovieInterface";
import MovieCard from "../components/MovieCard";
import ModalMovie from "../components/ModalMovie";

interface Props {
  movies: MovieInterface[];
}

export default function MovieList({ movies }: Props) {
    
  const [openModal, setOpenModal] = useState(false);
  const [info, setInfo] = useState<MovieInterface | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleSeeCast = (movie: MovieInterface, e: React.MouseEvent) => {
    e.stopPropagation();
    setInfo(movie);
    setOpenModal(true);
  };

  return (
    <>
      <h1 className="text-2xl mb-6">Movie List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, idx) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isExpanded={expandedIndex === idx}
            onToggleExpand={() => handleToggle(idx)}
            onSeeCast={handleSeeCast}
          />
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
}
