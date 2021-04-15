import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import IndexRoute from './router/index'

function App() {
  return (
    <BrowserRouter>
      {/* <Frame> */}
        <IndexRoute />
      {/* </Frame> */}
    </BrowserRouter>
  );
}

export default App;
