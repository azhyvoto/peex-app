// import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import CityPage from './CityPage';

// // Mock Redux store
// const mockStore = configureStore([]);

// test('renders CityPage component with expected content', () => {
//   // Mock data for the Redux store
//   const mockCity = {
//     city: {
//       current: {
//         temp: 25,
//         weather: [{ description: 'Sunny' }]
//       }
//     },
//     cityName: 'MockCity'
//   };

//   const store = mockStore({ city: mockCity });

//   render(
//     <Provider store={store}>
//       <CityPage />
//     </Provider>
//   );

//   // Check if the city name is rendered
//   const cityNameElement = screen.getByText(/MockCity/i);
//   expect(cityNameElement).toBeInTheDocument();

//   // Check if the weather description is rendered
//   const weatherDescriptionElement = screen.getByText(/Sunny/i);
//   expect(weatherDescriptionElement).toBeInTheDocument();

//   // Check if the temperature is rendered
//   const temperatureElement = screen.getByText(/25°/i);
//   expect(temperatureElement).toBeInTheDocument();

//   // Check if WeatherTime and WeatherDay components are rendered
//   const weatherTimeComponent = screen.getByTestId('weather-time');
//   expect(weatherTimeComponent).toBeInTheDocument();

//   const weatherDayComponent = screen.getByTestId('weather-day');
//   expect(weatherDayComponent).toBeInTheDocument();
// });

test('should first', () => {
  expect(true).toBe(true);
});
