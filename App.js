import React from 'react';
import SwitchNavigator from './app/navigation/switch';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SwitchNavigator />
    </Provider>
  )
};

export default App;
