import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../utils/renderWithRouter';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste se a página contém um heading h2 com o texto "Encountered Pokémon"', () => {
    renderWithRouter(<App />);

    expect(screen.getByText(/Encountered Pokémon/i)).toBeInTheDocument();
  });
});

describe('Teste se é exibido o próximo Pokémon da lista quando o botão "Próximo Pokémon" é clicado', () => {
  test('O botão deve conter o texto Próximo Pokémon', () => {
    renderWithRouter(<App />);

    const buttonNext = screen.getByRole('button', { name: /Próximo Pokémon/i });

    expect(buttonNext).toBeInTheDocument();
  });

  test('Testa os botões de filtragem', () => {
    renderWithRouter(<App />);

    const fireBtn = screen.getByRole('button', { name: /Fire/i });
    const allBtin = screen.getByRole('button', { name: /All/i });

    const pokemonInScreen = screen.getByText(/Pikachu/i);
    const totalBtns = screen.getAllByRole('button');
    const btnsTestid = screen.getAllByTestId('pokemon-type-button');

    userEvent.click(allBtin);

    expect(fireBtn).toBeInTheDocument();
    expect(allBtin).toBeInTheDocument();
    expect(totalBtns).toHaveLength(9);
    expect(btnsTestid).toHaveLength(7);
    expect(pokemonInScreen).toBeInTheDocument();
  });
});
