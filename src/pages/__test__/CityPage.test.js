import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import CityPage from '../CityPage.js';
import { mockData } from '../../__test__/mockData.js';

const mockStore = configureStore([]);

describe('CityPage component', () => {
  const mockCity = {
    city: {
      current: mockData.current,
      minutely: mockData.minutely,
      hourly: mockData.hourly,
      daily: mockData.daily
    },
    cityName: 'London'
  };

  const store = mockStore({ city: mockCity });

  test('renders CityPage component with expected content', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CityPage />
        </Provider>
      </BrowserRouter>
    );

    const cityNameElement = getByText(/London/i);
    expect(cityNameElement).toBeInTheDocument();

    const weatherDescriptionElement = getByText(/overcast clouds/i);
    expect(weatherDescriptionElement).toBeInTheDocument();

    const temperatureElement = getByText(/25°/i);
    expect(temperatureElement).toBeInTheDocument();
  });

  test('render components check', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CityPage />
        </Provider>
      </BrowserRouter>
    );

    const weatherTimeComponent = getByTestId('weather-time');
    expect(weatherTimeComponent).toBeInTheDocument();

    const weatherDayComponent = getByTestId('weather-day');
    expect(weatherDayComponent).toBeInTheDocument();

    const cityPageComponent = getByTestId('city-page');
    expect(cityPageComponent).toBeInTheDocument();
  });
});
