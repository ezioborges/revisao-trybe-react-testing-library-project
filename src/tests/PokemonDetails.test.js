import { screen } from '@testing-library/react';
import renderWithRouter from '../utils/renderWithRouter';
import App from '../App';

const routePika = '/pokemon/25';

describe('Testa o componente <PokemonDetails.js />', () => {
  test('Testa se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />, { route: routePika });

    const paragraph = /This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat./i;

    const nameDetails = screen.getByText(/Pikachu Details/i);
    const titleH2 = screen.getByRole('heading', { name: /summary/i });
    const pContent = screen.getByText(paragraph);

    expect(nameDetails).toBeInTheDocument();
    expect(titleH2).toBeInTheDocument();
    expect(pContent).toBeInTheDocument();
  });
});

describe('Testa se existe na página uma seção com os mapas contendo as localizações do Pokémon:', () => {
  test('existir um heading h2 com o texto Game Locations of <name>; onde <name> é o nome do Pokémon exibido;', () => {
    renderWithRouter(<App />, { route: routePika });

    const kantoViridianImg = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const kantoPowerImg = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';

    const gameLocations = screen.getByRole('heading', { name: /Game Locations of Pikachu/i });
    const kantoViridian = screen.getByText(/Kanto Viridian Forest/i);
    const kantoPower = screen.getByText(/Kanto Power Plant/i);
    const maps = screen.getAllByAltText(/Pikachu location/i);

    expect(gameLocations).toBeInTheDocument();
    expect(kantoViridian).toBeInTheDocument();
    expect(kantoPower).toBeInTheDocument();
    expect(maps).toHaveLength(2);
    expect(maps[0]).toHaveAttribute('src', kantoViridianImg);
    expect(maps[1]).toHaveAttribute('src', kantoPowerImg);
  });
});

describe('Teste se o usuário pode favoritar um Pokémon através da página de detalhes', () => {
  test('A página deve exibir um checkbox que permite favoritar o Pokémon', () => {
    renderWithRouter(<App />, { route: routePika });

    const favoriteCheck = screen.getByRole('checkbox');
    const checkText = screen.getByText(/Pokémon favoritado?/i);

    expect(favoriteCheck).toBeInTheDocument();
    expect(checkText).toBeInTheDocument();
  });
});
