import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fade from 'react-reveal/Fade';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CountUp from 'react-countup';

const Preview = () => {
  const root = {
    height: '100vh',
    backgroundColor: '#fff',
    color: '#575757'
  };

  const styleBox = {
    display: 'flex',
    justifyContent: 'center',
    height: '60vh',
    alignItems: 'center'
  };

  const styleLink = {
    textAlign: 'center',
    textDecoration: 'none'
  };

  const largeScreen = window.matchMedia('(min-width: 768px)').matches;

  return (
    <div style={root}>
      <Container maxWidth="md">
        <Box sx={styleBox}>
          <Stack spacing={1}>
            <Fade bottom cascade>
              <Typography variant={largeScreen ? 'h3' : 'h5'} textAlign="center" marginBottom={2}>
                Hi nerd! &#128512;
              </Typography>
              <Typography
                fontSize={largeScreen ? '24px' : '17px'}
                marginBottom={2}
                textAlign="center">
                Here you will find out the weather in more{' '}
                <CountUp start={0} end={200000} duration={2} prefix="then " suffix=" cities!" />
              </Typography>
            </Fade>
            <Link to="/weather" style={styleLink}>
              <Fade bottom>
                <Button variant="outlined" color="primary" startIcon={<KeyboardArrowRightIcon />}>
                  <Typography textAlign="center" color="inherit">
                    Let the fun begin
                  </Typography>
                </Button>
              </Fade>
            </Link>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default Preview;
