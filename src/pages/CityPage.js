import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import WeatherTime from '../components/WeatherTime';
import WeatherDay from '../components/WeatherDay';

const CityPage = () => {
  const root = {
    display: 'flex',
    justifyContent: 'center',
    pt: '30px'
  };

  const citySlice = useSelector((state) => state.city.city);
  const citySliceName = useSelector((state) => state.city.cityName);

  return (
    <Box height="max-content" width="100vw" backgroundColor="#ffffff">
      <Container maxWidth="lg" maxHeight="max-content">
        <Box sx={root}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center'
            }}>
            <Typography textTransform="capitalize" fontSize={40}>
              {citySliceName}
            </Typography>
            <Typography textTransform="capitalize" fontSize={20}>
              {citySlice.current.weather[0].description}
            </Typography>
            <Typography fontSize={60}>{Math.round(citySlice.current.temp)}°</Typography>
            <Box
              sx={{
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                borderTop: '1px solid #e4e4e4',
                borderBottom: '1px solid #e4e4e4',
                mt: '10vh'
              }}>
              <WeatherTime />
            </Box>
          </Box>
        </Box>
      </Container>
      <Box>
        <WeatherDay />
      </Box>
    </Box>
  );
};

export default CityPage;
