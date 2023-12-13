import Input from '../components/Input';

const Weather = () => {
  const root = {
    background: '#e0ebff',
    height: '100vh',
    paddingTop: '7vh'
  };

  return (
    <div style={root}>
      <Input />
    </div>
  );
};

export default Weather;
