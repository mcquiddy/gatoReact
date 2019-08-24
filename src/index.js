import React from "react";
import ReactDOM from "react-dom";
import Game from "./layouts/game"

import "./styles.css";

function App() {
  return <Game/>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
