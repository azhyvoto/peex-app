import cityReducer, { setCityRed, setCityName, getWeatherIcon } from './citySlice';
import { mockData } from './mockData';

describe('citySlice reducer', () => {
  it('should handle setCityRed', () => {
    const initialState = { city: {}, cityName: '', weatherIcon: '' };
    const newState = cityReducer(initialState, setCityRed(mockData));
    expect(newState.city).toEqual(mockData);
  });

  it('should handle setCityName', () => {
    const initialState = { city: {}, cityName: '', weatherIcon: '' };
    const newState = cityReducer(initialState, setCityName('London'));
    expect(newState.cityName).toEqual('London');
  });

  it('should handle getWeatherIcon', () => {
    const initialState = { city: {}, cityName: '', weatherIcon: '' };
    const newState = cityReducer(initialState, getWeatherIcon(mockData.current.weather[0].icon));
    expect(newState.weatherIcon).toEqual('04d');
  });
});
