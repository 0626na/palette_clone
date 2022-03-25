import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import { ResetCss } from "./reset";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ResetCss />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
