import type { MovieInterface } from "../interfaces/MovieInterface";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    info: MovieInterface;
}

export default function ModalMovie({open, onClose, info}: ModalProps) {
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
                        <p className="font-bold text-3xl">{info.title}</p>
                        <p className=" mt-8 text-l ">Original title: {info.original_title}</p>
                        <p className=" mt-2 text-l ">Vote average: {info.vote_average}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}  