import React from "react";

import "./App.css";
import { PropsDrill } from "./propsDrill";
import { Composition } from "./composition";
import { Context } from "./context";

function App() {
  return (
    <div className="App">
      <div className="flex prop-drill">
        <PropsDrill />
      </div>
      <div className="flex context">
        <Context />
      </div>
      <div className="flex composition">
        <Composition />
      </div>
    </div>
  );
}

export default App;
