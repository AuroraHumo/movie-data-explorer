import { useState } from "react";
import type { StarshipInterface } from "../interfaces/StarshipInterface";
import ModalStarships from "../components/ModalStarships";

interface Props {
    starships: StarshipInterface[];
}

const StarshipList = ({ starships }: Props) => {
    const [openModal, setOpenModal] = useState(false);
    const [info, setInfo] = useState<StarshipInterface | null>(null);

    return (
        <>
            <h1 className="text-2xl mt-6 mb-6">Starships</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {starships.map((item, index) => (
                <div
                    key={index}
                    className="relative bg-white border cursor-pointer hover:bg-amber-400 hover:text-black hover:font-semibold transition hover:scale-105 rounded-xl overflow-hidden shadow-md"

                    onClick={() => {
                        setOpenModal(true);
                        setInfo(item);
                    }}
                >
                    <h1>{item.name.toUpperCase()}</h1>
                    <p>{item.model}</p>
                </div>
            ))}
            </div>

            {info && (
                <ModalStarships open={openModal} onClose={() => setOpenModal(false)} info={info} />
            )}
        </>
    );
};

export default StarshipList;
