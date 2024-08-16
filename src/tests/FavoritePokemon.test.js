import { screen } from '@testing-library/react';
import renderWithRouter from '../utils/renderWithRouter';
import App from '../App';

describe('Testando o componente <FavoritePokemon.js />', () => {
  test('Testa se é exibida na tela a mensagem "No favorite pokemon found", caso a pessoa não tenha Pokémon favoritos', () => {
    renderWithRouter(<App />, { route: '/favorites' });

    // const title = ;

    expect(screen.getByText(/No favorite Pokémon found/i)).toBeInTheDocument();
  });
});
