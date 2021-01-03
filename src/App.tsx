import React from 'react';
import Routes from './Router';

import Global from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <Global />
    </>
  );
};

export default App;
