import type { Starship } from "../interfaces/Starship";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    info: Starship;
}

export default function Modal({open, onClose, info}: ModalProps) {
    return ( 
        //backdrop
        <div onClick={onClose}
            className= {`fixed z-50 inset-0 justify-center items-center transition-colors backdrop-grayscale-100 backdrop-blur-xs flex
                ${open ? 'visible bg-black-20'  : 'invisible'}`}>
            {/* modal */}
            <div onClick={e => e.stopPropagation()} className={`bg-white rounded-xl shadow p-6 transition-all max-w-3/4
                ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0 '}`}>
                <div className="flex w-full items-center " >
                    <div >
                        <p className="font-bold text-3xl">{info.name}</p>
                        <p className="flex-3/4 mt-8 text-l ">Model: {info.model}</p>
                        <p className="flex-3/4 mt-8 text-l ">Manufacturer: {info.manufacturer}</p>
                        <p className="flex-3/4 mt-8 text-l ">Cost in credits: {info.cost_in_credits}</p>
                        <p className="flex-3/4 mt-8 text-l ">Length: {info.length}</p>
                        <p className="flex-3/4 mt-8 text-l ">Crew: {info.crew}</p>
                        <p className="flex-3/4 mt-8 text-l ">Passengers: {info.passengers}</p>
                        <p className="flex-3/4 mt-8 text-l ">Cargo capacity: {info.cargo_capacity}</p>
                        <p className="flex-3/4 mt-8 text-l ">Consumables: {info.consumables}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}  