import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../utils/renderWithRouter';

describe('Testa o componente "About"', () => {
  test('Testa se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<App />, { route: '/about' });

    const textTest = 'This application simulates a Pokédex, a digital encyclopedia containing all Pokémon';

    // const error = 'texto errado';
    expect(screen.getByText(textTest)).toBeInTheDocument();
  });

  test('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<App />, { route: '/about' });

    const title = screen.getByRole('heading', { name: /About Pokédex/i });

    expect(title).toBeInTheDocument();
  });

  test('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<App />, { route: '/about' });

    const text1 = /This application simulates a Pokédex, a digital encyclopedia containing all Pokémon/i;
    const text2 = /One can filter Pokémon by type, and see more details for each one of them/i;
    expect(screen.getByText(text1)).toBeInTheDocument();
    expect(screen.getByText(text2)).toBeInTheDocument();
  });

  test('Testa se a página contém determinada imagem na pokedex', () => {
    renderWithRouter(<App />, { route: '/about' });
    const imgSrc = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    const imgPokedex = screen.getByAltText('Pokédex');

    expect(imgPokedex).toBeInTheDocument();
    expect(imgPokedex).toHaveAttribute('src', imgSrc);
  });
});
