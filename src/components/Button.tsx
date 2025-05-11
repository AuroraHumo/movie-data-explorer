import React from "react";

export default function Button({ onClick, children, type="button" }: { onClick?: () => void; children: React.ReactNode; type?: "button" | "submit" | "reset"; }) {
    return (
        <button
        type ={type}
        className= " bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-100 hover:text-black hover:font-semibold outline-4 outline-black transition hover:scale-105"
        onClick={onClick}
        >
        {children}
        </button>
    );
    }