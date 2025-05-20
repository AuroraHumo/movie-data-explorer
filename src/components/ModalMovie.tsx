import type { MovieInterface } from "../interfaces/MovieInterface";

interface Props {
    open: boolean;
    onClose: () => void;
    info: MovieInterface;
}

const ModalMovie = ({ open, onClose, info }: Props) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 backdrop-blur flex items-center justify-center z-50"
            onClick={onClose}>
            <div className="bg-white p-6 rounded-xl max-w-3xl w-full relative shadow-xl overflow-y-auto max-h-[100vh]">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-red-600 font-bold text-xl"
                >
                    &times;
                </button>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img
                        className=" w-2/3 sm:w-1/2 rounded-xl object-cover"
                        src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
                        alt={info.title}
                    />
                    <div className="flex-1 space-y-2">
                    </div>

                    {info.cast && info.cast.length > 0 && (
                        <div className="mt-2">
                            <h3 className="text-xl font-semibold mb-2">MAIN CAST</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {info.cast.map(actor => (
                                    <div key={actor.id} className="flex flex-col items-center text-center">
                                        <img
                                            className="w-24 h-24 rounded-full object-cover mb-2 border"
                                            src={
                                                actor.profile_path
                                                    ? `https://image.tmdb.org/t/p/w185/${actor.profile_path}`
                                                    : "https://via.placeholder.com/100x100?text=No+Image"
                                            }
                                            alt={actor.name}
                                        />
                                        <p className="font-medium">{actor.name}</p>
                                        <p className="text-sm text-gray-500">as {actor.character}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModalMovie;
