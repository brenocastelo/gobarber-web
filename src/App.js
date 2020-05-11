import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './configs/reactotronConfig';

import store from './store';

import History from './services/history';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={History}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
