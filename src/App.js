import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Home from './routes/Home';
import RecipeDetail from './routes/RecipeDetail'

function App() {
  return <HashRouter>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/recipe/:name" component={RecipeDetail}/>
  </HashRouter>;
}

export default App;
