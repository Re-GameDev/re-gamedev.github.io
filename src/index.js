import React from 'react';
import ReactDOM from 'react-dom';
import Website from './website/Website.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Website />, document.getElementById('root'));

// Makes site work offline and load faster. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
