import React from 'react';

const Desafio3 = () => {
    // Lógica para calcular os próximos elementos das sequências
    const sequencias = {
        sequenciaA: [1, 3, 5, 7],
        sequenciaB: [2, 4, 8, 16, 32, 64],
        sequenciaC: [0, 1, 4, 9, 16, 25, 36],
        sequenciaD: [4, 16, 36, 64],
        sequenciaE: [1, 1, 2, 3, 5, 8],
        sequenciaF: [2, 10, 12, 16, 17, 18, 19],
    };

    // Função para calcular o próximo elemento de uma sequência
    const calcularProximoElemento = (sequencia) => {
        const ultimoElemento = sequencias[sequencia][sequencias[sequencia].length - 1];

        const resultados = {
            sequenciaA: ultimoElemento + 2, // Adição de números ímpares
            sequenciaB: ultimoElemento * 2, // Multiplicação por 2
            sequenciaC: Math.pow(Math.sqrt(ultimoElemento) + 1, 2), // Quadrados perfeitos
            sequenciaD: Math.pow(Math.sqrt(ultimoElemento) + 2, 2), // Quadrados perfeitos de números pares
            sequenciaE: sequencias[sequencia][sequencias[sequencia].length - 2] + ultimoElemento, // Série de Fibonacci
            sequenciaF: 200, // Próximo número começado com D
        };

        return resultados[sequencia];
    };

    // Calcula os próximos elementos
    const proximoElementoA = calcularProximoElemento("sequenciaA");
    const proximoElementoB = calcularProximoElemento("sequenciaB");
    const proximoElementoC = calcularProximoElemento("sequenciaC");
    const proximoElementoD = calcularProximoElemento("sequenciaD");
    const proximoElementoE = calcularProximoElemento("sequenciaE");
    const proximoElementoF = calcularProximoElemento("sequenciaF");

    return (
        <div>
            <h2>Desafio 3</h2>
            <p>Descubra a lógica e complete o próximo elemento:</p>
            <p data-testid="sequencia-a">a) 1, 3, 5, 7, <strong>{proximoElementoA}</strong></p>
            <p data-testid="sequencia-b">b) 2, 4, 8, 16, 32, 64, <strong>{proximoElementoB}</strong></p>
            <p data-testid="sequencia-c">c) 0, 1, 4, 9, 16, 25, 36, <strong>{proximoElementoC}</strong></p>
            <p data-testid="sequencia-d">d) 4, 16, 36, 64, <strong>{proximoElementoD}</strong></p>
            <p data-testid="sequencia-e">e) 1, 1, 2, 3, 5, 8, <strong>{proximoElementoE}</strong></p>
            <p data-testid="sequencia-f">f) 2, 10, 12, 16, 17, 18, 19, <strong>{proximoElementoF}</strong></p>
        </div>
    );
};

export default Desafio3;
