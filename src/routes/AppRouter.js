import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from '../components/loginPage';
import ExpenseDashboard from '../components/dashboard';
import AddExpensePage from '../components/create';
import EditExpensePage from '../components/editExpensePage';
import HelpPage from '../components/help';
import NotFoundPage from '../components/error';
import Header from '../components/header';

export const history = createHistory();

     
const AppRouter= () => (
    <Router history={history}>
    <div>
        <Switch>
        <Route path="/" component={Login} exact={true}/>   
        </Switch>
        <Header/>
        <Switch>
         <Route path="/dashboard" component={ExpenseDashboard} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>        
        </Switch>
       
    </div>
    </Router>
);

export default AppRouter;