import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Desafio1 from '../Components/Desafio1';

describe('Testes do componente Desafio1', () => {
    test('exibe o valor correto da variável SOMA', async () => {
        render(<Desafio1 />);
        // O valor esperado é a soma dos números de 1 a 13
        const expectedValue = 91;

        // Aguarde até que o elemento com o valor esperado seja exibido
        await waitFor(() => {
            const somaElement = screen.getByText(`Valor final da variável SOMA: ${expectedValue}`);
            expect(somaElement).toBeInTheDocument();
        });
    });
});
