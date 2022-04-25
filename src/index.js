import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("my-form");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

