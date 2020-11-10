import React from 'react';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import HomePage from './HomePage';
import LoginComponent from '../components/public/login/LoginComponent';
import PrivateRoute from './PrivateRoute';

class Router extends React.Component {
  
  render() {
    return (
        <BrowserRouter>             
            <Switch>    
                <Route path="/login"
                     render={(props) => <LoginComponent {...props} onLogin={this.onLogin}/>}/> 
                <PrivateRoute path="/" exact component={HomePage}/>
                <Redirect to="/" />
            </Switch>          
        </BrowserRouter>
    );
  }
};

export default Router;
