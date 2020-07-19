import React from 'react';
import SwitchNavigator from './app/navigation/switch';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import store from './store';
import { persistStore } from 'redux-persist';

const App = () => {
  const persistedStore = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <SwitchNavigator />
      </PersistGate>
    </Provider>
  )
};

export default App;
