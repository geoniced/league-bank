import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
import App from './components/app/app';
import(/* webpackPreload: true */ './fonts/roboto-regular.woff2'); // Used for preloading a font

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(`root`)
);

