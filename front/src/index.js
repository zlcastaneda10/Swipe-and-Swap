import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import Cards from './containers/Cards';
import SignUp from './containers/SignupForm.js';
import SignIn from './containers/SigninForm.js';
import registerServiceWorker from './registerServiceWorker';
import LandingPage from './containers/LandingPage';
import AddObject from './addObject.js';
import App from './containers/App';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/signUp" component={SignUp}/>
        <Route exact path="/signIn" component={SignIn}/>
        <Route path="/cards" component={Cards}/>
        <Route path="/addObjects" component={AddObject}/>
      </Switch>
    </App>
  </Router>
  ,document.getElementById('app'));
/**
ReactDOM.render(<Cards/>, document.getElementById('cards'));
ReactDOM.render(<SignUp/>, document.getElementById('signup'));
ReactDOM.render(<AddObject/>, document.getElementById('addObject'));
*/
registerServiceWorker();
