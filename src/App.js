import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home/index";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
