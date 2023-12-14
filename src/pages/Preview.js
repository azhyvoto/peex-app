import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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

  return (
    <div style={root}>
      <Container maxWidth="md">
        <Box sx={styleBox}>
          <Stack spacing={1}>
            <Typography variant={'h3'} textAlign="center" marginBottom={2}>
              Hi nerd! &#128512;
            </Typography>
            <Typography fontSize={'24px'} marginBottom={2} textAlign="center">
              Here you will find out the weather in more{' '}
              <CountUp start={0} end={200000} duration={2} prefix="then " suffix=" cities!" />
            </Typography>
            <Link to="/weather" style={styleLink}>
              <Button variant="outlined" color="primary" startIcon={<KeyboardArrowRightIcon />}>
                <Typography textAlign="center" color="inherit">
                  Let the fun begin
                </Typography>
              </Button>
            </Link>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default Preview;
