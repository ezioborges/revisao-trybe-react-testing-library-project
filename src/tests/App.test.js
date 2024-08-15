import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  test('O primeiro link deve possuir o texto "Home"', () => {
    renderWithRouter(<App />);

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Favorite Pokémon/i })).toBeInTheDocument();
  });

  test(`Teste se a aplicação é 
    redirecionada para a página inicial, na URL / 
    ao clicar no link Home da barra de navegação`, async () => {
    renderWithRouter(<App />, { route: '/about' });

    const homeLink = screen.getByRole('link', { name: /Home/i });
    await userEvent.click(homeLink);

    expect(screen.getByText(/Pokédex/i)).toBeInTheDocument();
  });

  test(`Teste se a aplicação é redirecionada 
    para a página de About, na 
    URL /about, ao clicar no link About da barra de navegação;`, async () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /About/i });
    await userEvent.click(aboutLink);

    expect(screen.getByText(/About Pokédex/i)).toBeInTheDocument();
  });

  test(`Teste se a aplicação é redirecionada para 
    a página de Pokémon Favoritados, na URL /favorites, ao clicar no 
    link Favorite Pokémon da barra de navegação`, async () => {
    renderWithRouter(<App />);

    const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémon/i });
    await userEvent.click(favoriteLink);

    expect(screen.getByText(/No favorite Pokémon found/i)).toBeInTheDocument();
  });
});
