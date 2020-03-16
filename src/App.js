import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/normalize.css";
import "./assets/skeleton.css";
import "./assets/menu.css";
import "./App.css";
// import IkHebGemaaktComponent from "./components/IkHebGemaaktComponent";
import Privacy from "./components/Privacy";
import Menu from "./components/Menu";
import Instructies from "./components/Instructies";
// import TextielMasker from "./components/Instructions/TextielMasker";
import PromoMateriaalLijst from "./components/PromoMateriaalLijst";
// import IkHebGemaaktExternal from "./components/IkhHebGemaaktExternal";
import IkHebNodigExternal from "./components/IkHebNodigExternal";
import InzamelPuntenComponent from "./components/InzamelPuntenComponent";
import Footer from "./components/Footer";
import Home from "./components/Home";
import IkHebMaskers from "./components/IkHebMaskers";

function App() {

  return (
    <>
      <Router>
        <Menu />
        <div className="App container">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/instructies" exact>
              <Instructies />
            </Route>
            {/* <Route path="/instructies/textielmasker" exact>
            <TextielMasker />
          </Route> */}
            <Route path="/privacy" exact>
              <Privacy />
            </Route>
            <Route path="/awareness" exact>
              <PromoMateriaalLijst />
            </Route>
            <Route path="/inzamelpunten" exact>
              <InzamelPuntenComponent />
            </Route>
            <Route path="/ikhebmaskers" exact>
              <IkHebMaskers />
            </Route>
            <Route path="/ikHebNodig" exact>
              <IkHebNodigExternal />
            </Route>

            <Route path="/ikwilmeermaken" exact>
              doorlinken
          </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
