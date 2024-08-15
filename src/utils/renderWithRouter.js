import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, '', route);

  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export default renderWithRouter;
