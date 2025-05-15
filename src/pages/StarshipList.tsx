import { useState } from "react";
import type { Starship } from "../interfaces/Starship";
import Modal from "../components/ModalStarships";

interface Props {
    starships: Starship[];
}

const StarshipList = ({ starships }: Props) => {
    const [openModal, setOpenModal] = useState(false);
    const [info, setInfo] = useState<Starship | null>(null);

    return (
        <>
            <h1 className="text-2xl">Starships</h1>
            {starships.map((item, index) => (
                <div
                    key={index}
                    className="max-w-4/5 md:max-w-2/3 mx-auto m-6 p-4 bg-white border  cursor-pointer  hover:bg-amber-400 hover:text-black hover:font-semibold outline-4 outline-black transition hover:scale-105"
                    onClick={() => {
                        setOpenModal(true);
                        setInfo(item);
                    }}
                >
                    <h1>{item.name.toUpperCase()}</h1>
                    <p>{item.model}</p>
                </div>
            ))}

            {info && (
                <Modal open={openModal} onClose={() => setOpenModal(false)} info={info} />
            )}
        </>
    );
};

export default StarshipList;
