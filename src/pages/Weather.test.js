import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Weather from './Weather';

test('renders Weather component with expected content', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Weather />
      </Provider>
    </BrowserRouter>
  );

  const inputComponent = getByTestId('input-component');
  expect(inputComponent).toBeInTheDocument();
  expect(inputComponent).toHaveStyle({ background: '#e0ebff' });
  expect(inputComponent).toHaveStyle({ height: '100vh' });
  expect(inputComponent).toHaveStyle({ paddingTop: '7vh' });
});
