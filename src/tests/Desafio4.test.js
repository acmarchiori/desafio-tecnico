import React from 'react';
import { render, screen } from '@testing-library/react';
import Desafio4 from '../Components/Desafio4';

describe('Testes do componente Desafio4', () => {
    it('Testa se o componente Desafio4 é renderizado', () => {
        render(<Desafio4 />);
        const desafio4 = screen.getByText('Desafio 4');
        expect(desafio4).toBeInTheDocument();
    });
});
