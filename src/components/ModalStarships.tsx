import type { Starship } from "../interfaces/Starship";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    info: Starship;
}

export default function ModalStarships({open, onClose, info}: ModalProps) {
    return ( 
        //backdrop
        <div onClick={onClose}
            className= {`fixed z-50 inset-0 justify-center items-center transition-colors backdrop-sepia-200 backdrop-blur-md flex
                ${open ? 'visible bg-black-20'  : 'invisible'}`}>
            {/* modal */}
            <div onClick={e => e.stopPropagation()} className={`bg-white rounded-xl outline-4 outline-black shadow p-6 transition-all max-w-3/4
                ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0 '}`}>
                <div className="flex w-full items-center " >
                    <div className="text-right" >
                        <p className="font-bold text-3xl">{info.name}</p>
                        <p className=" mt-8 text-l ">Model: {info.model}</p>
                        <p className=" mt-2 text-l ">Manufacturer: {info.manufacturer}</p>
                        <p className=" mt-2 text-l ">Cost in credits: {info.cost_in_credits}</p>
                        <p className=" mt-2 text-l ">Length: {info.length}</p>
                        <p className=" mt-2 text-l ">Crew: {info.crew}</p>
                        <p className=" mt-2 text-l ">Passengers: {info.passengers}</p>
                        <p className=" mt-2 text-l ">Cargo capacity: {info.cargo_capacity}</p>
                        <p className=" mt-2 text-l ">Consumables: {info.consumables}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}  