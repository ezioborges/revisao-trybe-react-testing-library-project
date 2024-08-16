import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../utils/renderWithRouter';

describe('Testa o componente "Not Found"', () => {
  test('', () => {
    renderWithRouter(<App />, { route: '/wrong-route' });

    const imgSrc = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const imgAlt = /Pikachu crying because the page requested was not found/i;

    const title = screen.getByRole('heading', { name: /Page requested not found/i });
    const imgNotFound = screen.getByAltText(imgAlt);

    expect(title).toBeInTheDocument();
    expect(imgNotFound).toHaveAttribute('src', imgSrc);
  });
});
