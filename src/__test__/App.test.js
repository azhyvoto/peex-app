import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('Main page button click', () => {
  test('should change current location to weather when button is clicked', () => {
    window.history.pushState({}, '', '/');

    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    expect(window.location.pathname).toBe('/');
    fireEvent.click(getByText('Let the fun begin'));
    expect(window.location.pathname).toBe('/weather');
  });
});
