import ApiRequests from "../data/ApiRequests";
import { API_URL } from "../data/apiConfig";
import { useState, useEffect } from "react";

interface Starship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
}

const Starships = () => {
    const [data, setData] = useState<Starship[]>([]);

    const fetchData = async () => {
        const answer = await fetch(API_URL.STARWARS_SHIPS);
        const json = await answer.json();
        setData(json.results);
        console.log(json.results)
    }
            
    useEffect(() => {
        fetchData();
    }
    , []);

    return (
        <>
            <h1 className="text-2xl">Starships</h1>
            {data.map((item: Starship, index: number) => (
                <div key={index} className="border-2 border-gray-300 p-4 m-2">
                    <h1> {item.name.toUpperCase()}</h1>
                    <p> {item.model}</p>
                </div>
            ))}
        </>
    )
}

export default Starships;