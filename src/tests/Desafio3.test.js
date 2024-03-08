import React from 'react';
import { render, screen } from '@testing-library/react';
import Desafio3 from '../Components/Desafio3';

describe('Testes do componente Desafio3', () => {
    test('exibe o próximo elemento da sequência A corretamente', () => {
        render(<Desafio3 />);
        expect(screen.getByText(/a\) 1, 3, 5, 7/)).toBeInTheDocument();
        const proximoElementoA = screen.getByTestId('sequencia-a');
        expect(proximoElementoA).toHaveTextContent('9');
    });

    test('exibe o próximo elemento da sequência B corretamente', () => {
        render(<Desafio3 />);
        expect(screen.getByText(/b\) 2, 4, 8, 16, 32, 64/)).toBeInTheDocument();
        const proximoElementoB = screen.getByTestId('sequencia-b');
        expect(proximoElementoB).toHaveTextContent('128');
    });

    test('exibe o próximo elemento da sequência C corretamente', () => {
        render(<Desafio3 />);
        expect(screen.getByText(/c\) 0, 1, 4, 9, 16, 25, 36/)).toBeInTheDocument();
        const proximoElementoC = screen.getByTestId('sequencia-c');
        expect(proximoElementoC).toHaveTextContent('49');
    });

    test('exibe o próximo elemento da sequência D corretamente', () => {
        render(<Desafio3 />);
        expect(screen.getByText(/d\) 4, 16, 36, 64/)).toBeInTheDocument();
        const proximoElementoD = screen.getByTestId('sequencia-d');
        expect(proximoElementoD).toHaveTextContent('100');
    });

    test('exibe o próximo elemento da sequência E corretamente', () => {
        render(<Desafio3 />);
        expect(screen.getByText(/e\) 1, 1, 2, 3, 5, 8/)).toBeInTheDocument();
        const proximoElementoE = screen.getByTestId('sequencia-e');
        expect(proximoElementoE).toHaveTextContent('13');
    });

    test('exibe o próximo elemento da sequência F corretamente', () => {
        render(<Desafio3 />);
        expect(screen.getByText(/f\) 2, 10, 12, 16, 17, 18, 19/)).toBeInTheDocument();
        const proximoElementoF = screen.getByTestId('sequencia-f');
        expect(proximoElementoF).toHaveTextContent('200');
    });
});
