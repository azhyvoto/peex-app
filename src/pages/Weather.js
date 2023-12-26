import Input from '../components/Input';

const Weather = () => {
  const root = {
    background: '#e0ebff',
    height: '100vh',
    paddingTop: '7vh'
  };

  // test

  return (
    <div data-testid="input-component" style={root}>
      <Input />
    </div>
  );
};

export default Weather;
