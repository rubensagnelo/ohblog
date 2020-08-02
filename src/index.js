import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

//Componentes
import {  defineCustomElements as blgmenu } from 'ohblogmenu/loader';
import {  defineCustomElements as blgpost } from 'ohblogpost/loader';
import {  defineCustomElements as blgtempo } from 'ohblogtempo/loader';



ReactDOM.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>  ,
  document.getElementById('root')
);


 //ReactDOM.render(
//<React.StrictMode>
//<App />
//</React.StrictMode>,
//  document.getElementById('root')
//);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();


blgmenu(window);
blgpost(window);
blgtempo(window);
