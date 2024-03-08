import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Desafio5 from '../Components/Desafio5';

describe('Testes do componente Desafio5', () => {
    test('inverte corretamente a string informada', () => {
        render(<Desafio5 />);
        
        // Simula a entrada de uma string no input
        const inputElement = screen.getByLabelText(/Informe uma string:/i);
        fireEvent.change(inputElement, { target: { value: 'Hello, World!' } });

        // Simula o clique no botão de inverter
        const buttonElement = screen.getByText(/Inverter/i);
        fireEvent.click(buttonElement);

        // Verifica se o resultado da inversão é exibido corretamente
        const resultadoElement = screen.getByText(/Resultado: !dlroW ,olleH/i);
        expect(resultadoElement).toBeInTheDocument();
    });
});
