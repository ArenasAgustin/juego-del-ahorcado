import React, { useState } from "react";
import { IoRemove } from "react-icons/io5";
import './Word.scss';

export default function Palabra({ word }) {
    const [letraArray, setLetraArray] = useState([...word].map(() => false));

    const handleClick = (index) => {
        let newLetraArray = [...letraArray];
        newLetraArray[index] = !newLetraArray[index];
        setLetraArray(newLetraArray);
    };

    return (
        <div className="contenedor-palabra">
            {
                [...word].map((letra, i) => (
                    <span key={i} className="letra" onClick={() => handleClick(i)}>
                        {letraArray[i] ? letra : <IoRemove />}
                    </span>
                ))
            }
        </div>
    );
}