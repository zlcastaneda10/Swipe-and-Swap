import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './SignupForm.js';
import registerServiceWorker from './registerServiceWorker';
import AddObject from './addObject.js';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SignUp/>, document.getElementById('signup'));
ReactDOM.render(<AddObject/>, document.getElementById('addObject'));
registerServiceWorker();
