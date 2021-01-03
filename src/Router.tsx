import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './page/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
};

export default Routes;
