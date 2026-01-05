import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { expect, test, describe } from 'vitest';
import Join from './Join';

describe('Pruebas de la página Join', () => {
  
  test('Debe permitir escribir en los campos del formulario', () => {
    render(
      <BrowserRouter>
        <Join />
      </BrowserRouter>
    );

    const nameInput = screen.getByLabelText(/Name:/i);
    const emailInput = screen.getByLabelText(/Email:/i);

    fireEvent.change(nameInput, { target: { value: 'Graciela' } });
    fireEvent.change(emailInput, { target: { value: 'test@correo.com' } });

    expect(nameInput.value).toBe('Graciela');
    expect(emailInput.value).toBe('test@correo.com');
  });

  test('Debe mostrar el botón de registro', () => {
    render(
      <BrowserRouter>
        <Join />
      </BrowserRouter>
    );
    const button = screen.getByRole('button', { name: /Join Now/i });
    expect(button).toBeInTheDocument();
  });

});