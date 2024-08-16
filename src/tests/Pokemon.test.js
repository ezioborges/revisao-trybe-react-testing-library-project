import { screen } from '@testing-library/react';
import renderWithRouter from '../utils/renderWithRouter';
import { Pokemon } from '../components';

describe('Teste o componente <Pokemon.js />', () => {
  test('Testando os atributos do componente', () => {
    const MOCK_POKEMON = {
      id: 25,
      name: 'Pikachu',
      type: 'Electric',
      averageWeight: { value: '6.0', measurementUnit: 'kg' },
      image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    };

    renderWithRouter(<Pokemon pokemon={ MOCK_POKEMON } isFavorite />);

    const iconFav = '/star-icon.svg';
    const hrefDetails = '/pokemon/25';

    const pokeName = screen.getByText(/pikachu/i);
    const pokeImg = screen.getByAltText(/Pikachu sprite/i);
    const favImg = screen.getByAltText(/Pikachu is marked as favorite/i);
    const pokeType = screen.getByText(/electric/i);
    const pokeLink = screen.getByRole('link', { name: /More details/i });

    expect(pokeName).toBeInTheDocument();
    expect(pokeImg).toBeInTheDocument();
    expect(pokeImg).toHaveAttribute('src', MOCK_POKEMON.image);
    expect(favImg).toBeInTheDocument();
    expect(favImg).toHaveAttribute('src', iconFav);
    expect(pokeType).toBeInTheDocument();
    expect(pokeLink).toBeInTheDocument();
    expect(pokeLink).toHaveAttribute('href', hrefDetails);
  });
});
