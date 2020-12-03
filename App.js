import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Navigator from './navigation/routeStack';
import rootReducer from './redux/rootReducer';

export default function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
