import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Input from '../Input';

const mockStore = configureStore([]);

describe('Input Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      city: {
        city: {},
        cityName: ''
      }
    });
  });

  test('renders input component correctly', async () => {
    render(
      <Provider store={store}>
        <Input />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText('Check the weather');

    fireEvent.change(inputElement, { target: { value: 'London' } });
    expect(inputElement.value).toBe('London');

    const searchButton = screen.getByTestId('search-button');
    fireEvent.click(searchButton);

    const loadingElement = screen.getByRole('progressbar');
    expect(loadingElement).toBeInTheDocument();
    expect(inputElement.value).toBe('');
  });
});
