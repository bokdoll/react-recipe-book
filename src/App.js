import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import List from "./routes/List"

function App() {
  return <HashRouter>
    <Route path="/" component={List}/>
  </HashRouter>;
}

export default App;
