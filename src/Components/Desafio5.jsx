import React, { useState } from 'react';

const Desafio5 = () => {
    const [input, setInput] = useState('');
    const [resultado, setResultado] = useState('');

    const inverterString = (str) => {
        let caracteresInvertidos = '';
        for (let i = str.length - 1; i >= 0; i--) {
            caracteresInvertidos += str[i];
        }
        setResultado(caracteresInvertidos);
    };

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleInverterClick = () => {
        inverterString(input);
    };

    return (
        <div>
        <h2>Desafio 5</h2>
        <p>Escreva um programa que inverta os caracteres de uma string.</p>
        <label>
            Informe uma string:
            <input type="text" value={input} onChange={handleInputChange} />
        </label>
        <button onClick={handleInverterClick}>Inverter</button>
        <p>Resultado: {resultado}</p>
        </div>
    );
};

export default Desafio5;
