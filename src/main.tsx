import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Global } from "@emotion/react";
import global from "@styles/global.styled";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Global styles={global} />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
