import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Easyjet from "./easyjet";
import AirFrance from "./airfrance";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div>
    <Easyjet />
    <AirFrance />
  </div>,
  document.getElementById("root"),
);
registerServiceWorker();
