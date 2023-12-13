import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

const WeatherTime = () => {
  const cityData = useSelector((state) => state.city.city);
  console.log(cityData, 'cityData');

  return (
    <Box
      display="flex"
      marginTop={2}
      marginBottom={2}
      sx={{
        width: '95vw',
        overflow: 'hidden',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
          background: 'transparent',
          height: 0
        }
      }}>
      <Stack direction="row" spacing={5}>
        {cityData.hourly.map((item, index) => (
          <Box key={index}>
            <Stack direction="column" spacing={3}>
              <Typography fontSize={20}>{new Date(item.dt * 1000).getHours()}:00</Typography>
              <img
                style={{ height: '80px' }}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={'weatherIcon'}
              />
              <Typography fontSize={20}>{Math.round(item.temp)}°C</Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default WeatherTime;
