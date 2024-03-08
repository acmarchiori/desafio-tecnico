import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('Testes do App', () => {
  test('renderiza o componente App corretamente', () => {
    render(<App />);
    
    // Verifica se o componente Desafio1 está na tela
    expect(screen.getByText(/Desafio 1/i)).toBeInTheDocument();
    
    // Verifica se o botão "Modo Escuro" está na tela
    expect(screen.getByRole('button', { name: /Modo Escuro/i })).toBeInTheDocument();
  });

  test('altera para o modo escuro ao clicar no botão', () => {
    render(<App />);
    
    // Clica no botão "Modo Escuro"
    fireEvent.click(screen.getByRole('button', { name: /Modo Escuro/i }));
    
    // Verifica se a classe "dark-mode" foi adicionada ao componente App
    expect(screen.getByTestId('app-container')).toHaveClass('dark-mode');
    
    // Verifica se o botão agora exibe "Modo Claro"
    expect(screen.getByRole('button', { name: /Modo Claro/i })).toBeInTheDocument();
  });

  test('altera para o modo claro ao clicar no botão', () => {
    render(<App />);
    
    // Clica no botão "Modo Escuro" para ativar o modo escuro
    fireEvent.click(screen.getByRole('button', { name: /Modo Escuro/i }));
    
    // Clica no botão "Modo Claro"
    fireEvent.click(screen.getByRole('button', { name: /Modo Claro/i }));
    
    // Verifica se a classe "dark-mode" foi removida do componente App
    expect(screen.getByTestId('app-container')).not.toHaveClass('dark-mode');
    
    // Verifica se o botão agora exibe "Modo Escuro"
    expect(screen.getByRole('button', { name: /Modo Escuro/i })).toBeInTheDocument();
  });
});
