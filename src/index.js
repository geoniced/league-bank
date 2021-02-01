import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import './scss/style.scss';
import App from './components/app/app';
import {reducer} from './store/reducer';
import(/* webpackPreload: true */ './fonts/roboto-regular.woff2'); // Used for preloading a font

const store = createStore(
  reducer,
  composeWithDevTools()
);

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById(`root`)
);

