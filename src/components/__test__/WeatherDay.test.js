import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import WeatherDay from '../WeatherDay';

const mockStore = configureStore([]);

describe('WeatherDay component', () => {
  const mockCity = {
    city: {
      daily: [
        {
          dt: 1702551600,
          sunrise: 1702540718,
          sunset: 1702569090,
          moonrise: 1702548420,
          moonset: 1702572600,
          moon_phase: 0.06,
          temp: {
            day: 6.19,
            min: 4,
            max: 7,
            night: 5.69,
            eve: 7.43,
            morn: 4.1
          },
          feels_like: {
            day: 4.15,
            night: 4.77,
            eve: 6.33,
            morn: 2.76
          },
          pressure: 1021,
          humidity: 76,
          dew_point: 2.28,
          wind_speed: 3.98,
          wind_deg: 342,
          wind_gust: 9.62,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d'
            }
          ],
          clouds: 100,
          pop: 0.06,
          uvi: 0.22
        },
        {
          dt: 1702638000,
          sunrise: 1702627170,
          sunset: 1702655493,
          moonrise: 1702637520,
          moonset: 1702663980,
          moon_phase: 0.09,
          temp: {
            day: 6.08,
            min: 10,
            max: 15,
            night: 5.61,
            eve: 6.01,
            morn: 4.52
          },
          feels_like: {
            day: 4.29,
            night: 3.36,
            eve: 4.17,
            morn: 3.31
          },
          pressure: 1038,
          humidity: 73,
          dew_point: 1.6,
          wind_speed: 3.08,
          wind_deg: 232,
          wind_gust: 9.69,
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03d'
            }
          ],
          clouds: 41,
          pop: 0,
          uvi: 0.53
        }
      ]
    }
  };

  const store = mockStore({ city: mockCity });

  test('renders WeatherDay component', () => {
    render(
      <Provider store={store}>
        <WeatherDay />
      </Provider>
    );

    const weatherDayComponent = screen.getByTestId('weather-day');
    expect(weatherDayComponent).toBeInTheDocument();
  });

  test('renders WeatherDay component with expected content for Thursday', () => {
    render(
      <Provider store={store}>
        <WeatherDay />
      </Provider>
    );

    const dateElement = screen.getByText(/Thursday/i);
    expect(dateElement).toBeInTheDocument();

    const weatherIconElements = screen.getAllByAltText('weatherIcon');
    expect(weatherIconElements[0]).toBeInTheDocument();
    expect(weatherIconElements[0].src).toContain('http://openweathermap.org/img/wn/04d@2x.png');
    expect(weatherIconElements[0].alt).toContain('weatherIcon');

    const maxTempElement = screen.getByText(/7/i);
    expect(maxTempElement).toBeInTheDocument();

    const minTempElement = screen.getByText(/4°/i);
    expect(minTempElement).toBeInTheDocument();
  });

  test('renders WeatherDay component with expected content for Friday', () => {
    render(
      <Provider store={store}>
        <WeatherDay />
      </Provider>
    );

    const dateElement = screen.getByText(/Friday/i);
    expect(dateElement).toBeInTheDocument();

    const weatherIconElements = screen.getAllByAltText('weatherIcon');
    expect(weatherIconElements[1]).toBeInTheDocument();
    expect(weatherIconElements[1].src).toContain('http://openweathermap.org/img/wn/03d@2x.png');
    expect(weatherIconElements[1].alt).toContain('weatherIcon');

    const maxTempElement = screen.getByText(/15/i);
    expect(maxTempElement).toBeInTheDocument();

    const minTempElement = screen.getByText(/10°/i);
    expect(minTempElement).toBeInTheDocument();
  });
});
