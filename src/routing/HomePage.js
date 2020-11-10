import React from 'react';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import UsersRouting from '../components/private/users/routing/UsersRouting';
import PrivateRoute from './PrivateRoute';
import MainLayout from '../components/private/layaout/MainLayout';
import UsersTable from '../components/private/users/UsersTable';
import OrderCreate from '../components/private/repair_orders/OrderCreate';

class HomePage extends React.Component {
  
  render() {
    return (
        <BrowserRouter>      
              <MainLayout>
              <Switch>
                <PrivateRoute path="/users" exact component={UsersRouting}/>
                <PrivateRoute path="/usersTable" exact component={UsersTable}/>
                <PrivateRoute path="/newOrder" exact component={OrderCreate}/>
                {/* <PrivateRoute path="/home" component={PrivateHomeIndex}/> */}
                {/* <PrivateRoute path="/" component={PrivateHomeIndex}/> */}
                {/* <PrivateRoute path="/" component={UsersRouting}/> */}
                <Redirect from='/' to="/users" /> 
                </Switch> 
              </MainLayout>                                                            
        </BrowserRouter>
    );
  }
};

export default HomePage;
