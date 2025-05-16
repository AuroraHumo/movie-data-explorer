import { useState } from "react";
import type { MovieInterface } from "../interfaces/MovieInterface";
import ModalMovie from "../components/ModalMovie";

interface Props {
    movies: MovieInterface[];
}


const MovieList = ({ movies }: Props) => {
    const [openModal, setOpenModal] = useState(false);
    const [info, setInfo] = useState<MovieInterface | null>(null);
console.log(movies)
    return (
        <>
            <h1 className="text-2xl">Latest Movies</h1>
            {movies.map((item, index) => (
                <div
                    key={index}
                    className="max-w-4/5 md:max-w-2/3 mx-auto m-6 p-4 bg-white border  cursor-pointer  hover:bg-amber-400 hover:text-black hover:font-semibold outline-4 outline-black transition hover:scale-105"
                    onClick={() => {
                        setOpenModal(true);
                        setInfo(item);
                    }}
                >
                    <h1>{item.title.toUpperCase()}</h1>
                    <img
                        className="w-full h-1/2 object-cover"
                        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                        alt={item.title}
                    />
                    <p>On cinemas {item.release_date}</p>
                </div>
            ))}

            {info && (
                <ModalMovie open={openModal} onClose={() => setOpenModal(false)} info={info} />
            )}
        </>
    );
};

export default MovieList;
