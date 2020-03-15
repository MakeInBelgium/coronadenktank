import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "./assets/normalize.css";
import "./assets/skeleton.css";
import "./App.css";
import IkHebGemaaktComponent from "./components/IkHebGemaaktComponent";
import Privacy from "./components/Privacy";

function App() {
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <IkHebGemaaktComponent />
          </Route>
          <Route path="/privacy" exact>
            <Privacy />
          </Route>
          <Route path="/ikhebgemaakt" exact>
            doorlinken
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
