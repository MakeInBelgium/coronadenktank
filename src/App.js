import React, { useState } from "react";
import "./App.css";

function App() {
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <h1>Welkom</h1>
      <p>We werken momenteel nog aan deze site</p>
      <a href="mailto:info@ikmaakmee.be">Stuur maar een mailtje als je vragen hebt</a>
    </div>
  );
}

export default App;
