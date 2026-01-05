import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { expect, test, describe } from 'vitest';
import Discover from './Discover';

describe('Pruebas de la página Discover', () => {
  
  test('Debe mostrar los tres iconos de servicios dentro del contenedor principal', () => {
    render(
      <BrowserRouter>
        <Discover />
      </BrowserRouter>
    );
    const mainHeading = screen.getByRole('heading', { name: /Discover new music/i });
    expect(mainHeading).toBeInTheDocument();


    expect(screen.getAllByText(/Charts/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Albums/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/More/i)[0]).toBeInTheDocument();
  });

  test('Debe renderizar la imagen con el texto alternativo correcto', () => {
    render(
      <BrowserRouter>
        <Discover />
      </BrowserRouter>
    );

    const mainImg = screen.getByAltText(/Discover new music/i);
    expect(mainImg).toBeInTheDocument();
    expect(mainImg.getAttribute('src')).toContain('/images/covers.jpg');
  });
});