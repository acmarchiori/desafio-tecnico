import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Desafio2 from '../Components/Desafio2';

describe('Testes do componente Desafio2', () => {
    test('exibe mensagem de erro para entrada inválida', async () => {
        render(<Desafio2 />);
        
        const input = screen.getByLabelText(/informe um número/i);
        const calcularButton = screen.getByText(/calcular/i);

        fireEvent.change(input, { target: { value: 'abc' } });
        fireEvent.click(calcularButton);

        await waitFor(() => {
            const resultadoElement = screen.getByText(/por favor, informe um número inteiro não negativo/i);
            expect(resultadoElement).toBeInTheDocument();
        });
    });

    test('exibe mensagem para número pertencente à sequência de Fibonacci', async () => {
        render(<Desafio2 />);
        
        const input = screen.getByLabelText(/informe um número/i);
        const calcularButton = screen.getByText(/calcular/i);

        fireEvent.change(input, { target: { value: '21' } });
        fireEvent.click(calcularButton);

        await waitFor(() => {
            const resultadoElement = screen.getByText(/21 pertence à sequência de Fibonacci/i);
            expect(resultadoElement).toBeInTheDocument();
        });
    });

    test('exibe mensagem para número não pertencente à sequência de Fibonacci', async () => {
        render(<Desafio2 />);
        
        const input = screen.getByLabelText(/informe um número/i);
        const calcularButton = screen.getByText(/calcular/i);

        fireEvent.change(input, { target: { value: '25' } });
        fireEvent.click(calcularButton);

        await waitFor(() => {
            const resultadoElement = screen.getByText(/25 não pertence à sequência de Fibonacci/i);
            expect(resultadoElement).toBeInTheDocument();
        });
    });
});