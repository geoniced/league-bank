/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import './scss/style.scss';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {createAPI} from './services/api';
import thunk from 'redux-thunk';
import {loadCurrency} from './store/api-actions';
import {Currency, formatDateNowDashed} from './const';

import(/* webpackPreload: true */ `./fonts/roboto-regular.woff2`); // Used for preloading a font

const api = createAPI(
    (response, message) => console.log(`${response}: ${message}`)
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(loadCurrency(formatDateNowDashed(), Currency.RUB, Currency.USD))
])
.then((response) => {
  console.log(response);
})
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


