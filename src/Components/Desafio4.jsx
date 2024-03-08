import React from 'react';
import './Desafio4.css';

const Desafio4 = () => {
    return (
        <div>
            <h2>Desafio 4</h2>
            <p>Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.</p>
            <p>Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?</p>

            <p><strong>Resposta:</strong></p>

            <p>Ligo o interruptor A, aguardo 5 minutos.</p>
            <p>Desligo o interruptor A e ligo o Interruptor B.</p>
            <br />
            <p><strong>Primeira ida:</strong> Vou até a Sala 1.</p>
            <p><strong>Primeira hipótese:</strong> A Lâmpada está acesa e seu interruptor é o B. <strong>(ph1)</strong></p>
            <p><strong>Segunda hipótese:</strong> A lâmpada está apagada mas está quente, seu interruptor é o A. <strong>(sh1)</strong></p>
            <p><strong>Terceira hipótese:</strong> A lâmpada está apagada e está fria, seu interruptor é o C. <strong>(th1)</strong></p>
            <br />
            <p>Desligo o interruptor B que ficou ligado por algum tempo durante a verificação da Sala 1.</p>
            <p>Ligo o interruptor C.</p>
            <br />
            <p><strong>Segunda ida:</strong> Vou até a Sala 3.</p>
            <p><strong>Primeira hipótese:</strong> A lâmpada está acesa e seu interruptor é o C. <strong>(ph3)</strong></p>
            <p><strong>Segunda hipótese:</strong> A lâmpada está apagada mas está quente então seu interruptor é o B. <strong>(sh3)</strong></p>
            <p><strong>Terceira hipótese:</strong> A lâmpada está apagada e está fria, seu interruptor é o A. <strong>(th3)</strong></p>
            <br />
            <h2>Tabela de Condições</h2>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Condição</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>ph1 && ph3</code></td>
                            <td>O Interruptor da lâmpada da Sala 2 é o A.</td>
                        </tr>
                        <tr>
                            <td><code>sh1 && sh3</code></td>
                            <td>O Interruptor da lâmpada da Sala 2 é o C.</td>
                        </tr>
                        <tr>
                            <td><code>th1 && th3</code></td>
                            <td>O Interruptor da lâmpada da Sala 2 é o B.</td>
                        </tr>
                        <tr>
                            <td><code>sh1 && ph3</code></td>
                            <td>O Interruptor da lâmpada da Sala 2 é o B.</td>
                        </tr>
                        <tr>
                            <td><code>th1 && sh3</code></td>
                            <td>O Interruptor da lâmpada da Sala 2 é o B.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Desafio4;
