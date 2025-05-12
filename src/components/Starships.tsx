
import { API_URL } from "../data/apiConfig";
import { useState, useEffect } from "react";
import Modal from "./ModalStarships";
import type { Starship } from "../interfaces/Starship";

const Starships = () => {
    const [data, setData] = useState<Starship[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [info, setInfo] = useState<Starship | null>(null);

    const fetchData = async () => {
        const answer = await fetch(API_URL.STARWARS_SHIPS);
        const json = await answer.json();
        setData(json.results);
    }
            
    useEffect(() => {
        fetchData();
    }
    , []);

    return (
        <>
            <h1 className="text-2xl">Starships</h1>

            {data.map((item: Starship, index: number) => (
                <div key={index} className=" m-2 flex hover:bg-gray-300 transition p-4 border-2 border-gray-300 cursor-pointer"
                onClick={() => { setOpenModal(true); setInfo(item); }}>
                    <div className="flex-1">
                        <h1 className=" text-l"> {item.name.toUpperCase()}</h1>
                        <p className=""> {item.model}</p>
                    </div>

                </div>
            ))}

            {info && <Modal open={openModal} onClose={() => setOpenModal(false)} info={info}></Modal>}
        </>
    )
}

export default Starships;