import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import "./scss/style.scss";
import App from "./components/app/app";
import rootReducer from "./store/root-reducer";
import {createAPI} from "./services/api";
import thunk from "redux-thunk";
import {loadCurrency} from "./store/api-actions";
import {Currency} from "./const";
import {formatDateDashed} from "./utils";

import(/* webpackPreload: true */ `./fonts/roboto-regular.woff2`); // Used for preloading a font

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(loadCurrency(formatDateDashed(), Currency.RUB, Currency.USD))
])
.then(() => {
  ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById(`root`)
  );
});


