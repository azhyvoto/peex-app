import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import CardComponent from '../CardComponent';

const mockStore = configureStore([]);

describe('CardComponent component', () => {
  const mockCity = {
    city: {
      weatherIcon: '01d',
      hourly: [
        {
          dt: 1702562400,
          temp: 7.37,
          feels_like: 5.31,
          pressure: 1020,
          humidity: 89,
          dew_point: 5.68,
          uvi: 0.09,
          clouds: 100,
          visibility: 10000,
          wind_speed: 3.06,
          wind_deg: 226,
          wind_gust: 9.32,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d'
            }
          ],
          pop: 0
        },
        {
          dt: 1702566000,
          temp: 8.45,
          feels_like: 5.54,
          pressure: 1020,
          humidity: 91,
          dew_point: 6.08,
          uvi: 0.06,
          clouds: 100,
          visibility: 10000,
          wind_speed: 2.87,
          wind_deg: 232,
          wind_gust: 8.8,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d'
            }
          ],
          pop: 0
        },
        {
          dt: 1702569600,
          temp: 9.44,
          feels_like: 6.06,
          pressure: 1021,
          humidity: 92,
          dew_point: 6.23,
          uvi: 0,
          clouds: 100,
          visibility: 10000,
          wind_speed: 2.17,
          wind_deg: 247,
          wind_gust: 7.09,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n'
            }
          ],
          pop: 0
        },
        {
          dt: 1702573200,
          temp: 10.43,
          feels_like: 6.33,
          pressure: 1022,
          humidity: 93,
          dew_point: 6.37,
          uvi: 0,
          clouds: 100,
          visibility: 10000,
          wind_speed: 1.86,
          wind_deg: 247,
          wind_gust: 5.16,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n'
            }
          ],
          pop: 0
        },
        {
          dt: 1702576800,
          temp: 11.1,
          feels_like: 6.07,
          pressure: 1023,
          humidity: 95,
          dew_point: 6.35,
          uvi: 0,
          clouds: 96,
          visibility: 10000,
          wind_speed: 1.74,
          wind_deg: 257,
          wind_gust: 3.29,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n'
            }
          ],
          pop: 0
        },
        {
          dt: 1702580400,
          temp: 12.29,
          feels_like: 5.58,
          pressure: 1024,
          humidity: 96,
          dew_point: 6.1,
          uvi: 0,
          clouds: 51,
          visibility: 10000,
          wind_speed: 1.76,
          wind_deg: 265,
          wind_gust: 2.57,
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04n'
            }
          ],
          pop: 0
        }
      ]
    }
  };

  const store = mockStore({ city: mockCity });

  test('renders CardComponent with expected content', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardComponent cityName="London" description="Sunny" temp={25} />
        </BrowserRouter>
      </Provider>
    );

    const cardComponent = screen.getByText(/London/i);
    expect(cardComponent).toBeInTheDocument();

    const descriptionElement = screen.getByText(/Sunny/i);
    expect(descriptionElement).toBeInTheDocument();

    const tempElement = screen.getByText(/25 °С/i);
    expect(tempElement).toBeInTheDocument();
  });

  test('renders CardComponent with loading spinner', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardComponent cityName="London" description="Sunny" temp={25} />
        </BrowserRouter>
      </Provider>
    );

    const cardComponent = screen.getByText(/London/i);
    expect(cardComponent).toBeInTheDocument();

    const loadingElement1 = screen.queryByTestId('card-component-loading');
    expect(loadingElement1).toBeNull();

    fireEvent.click(cardComponent);

    const loadingElement = screen.queryByTestId('card-component-loading');
    expect(loadingElement).toBeInTheDocument();

    await waitFor(
      () => {
        const loadingElement = screen.queryByTestId('card-component-loading');
        expect(loadingElement).toBeNull();
      },
      { timeout: 1500 }
    );
  });
});
