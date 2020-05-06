import React from 'react';
import { Router } from 'react-router-dom';

import './configs/reactotronConfig';

import History from './services/history';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={History}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
