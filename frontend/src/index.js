import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
import { userLoggedIn } from "./features/auth/authSlice";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const localAuth = localStorage?.getItem("auth");

if (localAuth) {
  const auth = JSON.parse(localAuth);
  if (auth?.accessToken && auth?.user) {
    store.dispatch(
      userLoggedIn({ accessToken: auth.accessToken, user: auth.user })
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
