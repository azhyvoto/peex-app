import { fireEvent, render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Preview from './Preview';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('Preview component', () => {
  test('renders Preview component with expected content', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Preview />
        </Provider>
      </BrowserRouter>
    );

    const header = getByText(/Hi nerd! 😀/i);
    expect(header).toBeInTheDocument();
  });

  test('renders Preview component subtitle on mount', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Preview />
        </Provider>
      </BrowserRouter>
    );

    const subtitle1 = getByText(/Here you will find out the weather in more/i);
    const subtitle2 = getByText(/then 0 cities!/i);
    expect(subtitle1).toBeInTheDocument();
    expect(subtitle2).toBeInTheDocument();
  });

  test('renders Preview component subtitle', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Preview />
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

  test('renders Link with correct "to" prop', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Preview />
        </Provider>
      </BrowserRouter>
    );

    const linkElement = getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/weather');
  });

  test('should change current location to weather', () => {
    window.history.pushState({}, '', '/');

    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Preview />
        </Provider>
      </BrowserRouter>
    );

    expect(window.location.pathname).toBe('/');
    fireEvent.click(getByText('Let the fun begin'));
    expect(window.location.pathname).toBe('/weather');
  });
});
