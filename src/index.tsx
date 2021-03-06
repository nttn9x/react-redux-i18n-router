import React from "react";
import ReactDOM from "react-dom";

import Root from "routes";

import "i18n";
import { setUpApi } from "utils/service.util";

import reportWebVitals from "./reportWebVitals";

function createMagic() {
  setUpApi();

  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

createMagic();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
