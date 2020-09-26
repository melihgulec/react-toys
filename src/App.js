import React from "react";

import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import Toys from './views/Toys';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/productDetail/:id/:name/:price/:path" children={ProductDetail}>
          </Route>
          <Route path="/toys">
            <Toys />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
