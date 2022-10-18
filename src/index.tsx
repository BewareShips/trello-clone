import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AppStateProvider } from "./state/AppStateContext";
import "./index.css";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   <React.StrictMode>
      <AppStateProvider>
         <App>
            <p>Hello I'm React Element</p>
         </App>
      </AppStateProvider>
   </React.StrictMode>
);
