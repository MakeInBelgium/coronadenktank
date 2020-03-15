import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/normalize.css";
import "./assets/skeleton.css";
import "./assets/menu.css";
import "./App.css";
import IkHebGemaaktComponent from "./components/IkHebGemaaktComponent";
import Privacy from "./components/Privacy";
import Menu from "./components/Menu";
import Instructies from "./components/Instructies";
import TextielMasker from "./components/Instructions/TextielMasker";

function App() {
  const [error, setError] = useState(null);

  return (
    <div className="App container">
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact>
            <Instructies />
          </Route>
          <Route path="/textielmasker" exact>
            <TextielMasker />
          </Route>
          <Route path="/privacy" exact>
            <Privacy />
          </Route>
          <Route path="/ikhebgemaakt" exact>
            <IkHebGemaaktComponent />
          </Route>

          <Route path="/ikwilmeermaken" exact>
            doorlinken
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
