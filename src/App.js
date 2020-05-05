import React from 'react';
import { Router } from 'react-router-dom';

import './configs/reactotronConfig';

import History from './services/history';
import Routes from './routes';

function App() {
  return (
    <Router history={History}>
      <Routes />
    </Router>
  );
}

export default App;
