import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { expect, test } from 'vitest';
import Home from './Home';

test('Debe renderizar el título correctamente', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  
  expect(screen.getByText(/Feel The Music/i)).toBeInTheDocument();
});