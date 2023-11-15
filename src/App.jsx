import React from 'react';
import Allroutes from './Allroutes/Allroutes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Allroutes />
      </BrowserRouter>
    </div>
  );
};

export default App;