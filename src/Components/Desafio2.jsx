import React, { useState } from 'react';

const Desafio2 = () => {
    const [input, setInput] = useState('');
    const [resultado, setResultado] = useState('');

    const calcularFibonacci = (numero) => {
        const num = parseInt(numero);
        if (isNaN(num) || num < 0) {
        setResultado('Por favor, informe um número inteiro não negativo.');
        return;
        }

        let a = 0;
        let b = 1;
        let c = a + b;

        while (c <= num) {
        if (c === num) {
            setResultado(`${num} pertence à sequência de Fibonacci.`);
            return;
        }
        a = b;
        b = c;
        c = a + b;
        }

        setResultado(`${num} não pertence à sequência de Fibonacci.`);
    };

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleCalcularClick = () => {
        calcularFibonacci(input);
    };

    return (
        <div>
        <h2>Desafio 2</h2>
        <p>
        Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
        (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele
        calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
        </p>
        <label>
            Informe um número:
            <input type="text" value={input} onChange={handleInputChange} />
        </label>
        <button onClick={handleCalcularClick}>Calcular</button>
        <p>Resultado: {resultado}</p>
        </div>
    );
};

export default Desafio2;
