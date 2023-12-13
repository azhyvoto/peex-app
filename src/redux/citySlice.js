import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: {},
  cityName: '',
  weatherIcon: ''
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCityRed: (state, action) => {
      state.city = action.payload;
    },
    setCityName: (state, action) => {
      state.cityName = action.payload;
    },
    getWeatherIcon: (state, action) => {
      state.weatherIcon = action.payload;
    }
  }
});

export const { setCityRed, setCityName, getWeatherIcon } = citySlice.actions;

export default citySlice.reducer;
