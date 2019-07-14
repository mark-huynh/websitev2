import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './experience.css'
import About from './About.js'
import App from './App';
import Experience from './Experience.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<About />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
