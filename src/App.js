import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import RecipeList from "./routes/RecipeList"

function App() {
  return <HashRouter>
    <Route path="/" component={RecipeList}/>
  </HashRouter>;
}

export default App;
