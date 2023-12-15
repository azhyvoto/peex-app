import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import App from '../App';

describe('renders App component with BrowserRouter and Provider', () => {
  test('header render', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    const header = getByText(/Hi nerd! 😀/i);
    expect(header).toBeInTheDocument();
  });

  test('renders App component subtitle on mount', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    const subtitle1 = getByText(/Here you will find out the weather in more/i);
    const subtitle2 = getByText(/then 0 cities!/i);
    expect(subtitle1).toBeInTheDocument();
    expect(subtitle2).toBeInTheDocument();
  });

  test('renders App component subtitle', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    await waitFor(
      () => {
        const subtitle1 = getByText(/Here you will find out the weather in more/i);
        const subtitle2 = getByText(/then 200,000 cities!/i);
        expect(subtitle1).toBeInTheDocument();
        expect(subtitle2).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});
