import React, { useState, useEffect } from 'react';

const Desafio1 = () => {
    const [soma, setSoma] = useState(0);

    useEffect(() => {
        const INDICE = 13;
        let SOMA = 0;
        let K = 0;

        while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
        }

        setSoma(SOMA);
    }, []);

    return (
        <div>
        <h2>Desafio 1</h2>
        <p>
            Observe o trecho de código abaixo:
            <br />
            <br />
            <code>
            int INDICE = 13, SOMA = 0, K = 0;
            <br />
            enquanto K &lt; INDICE faça
            <br />
            {'{'}
            <br />
            &nbsp;&nbsp;K = K + 1;
            <br />
            &nbsp;&nbsp;SOMA = SOMA + K;
            <br />
            {'}'}
            <br />
            imprimir(SOMA);
            </code>
            <br />
            <br />
            Ao final do processamento, qual será o valor da variável SOMA?
        </p>
        <p>Valor final da variável SOMA: {soma}</p>
        </div>
    );
};

export default Desafio1;
