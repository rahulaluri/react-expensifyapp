import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from '../components/loginPage';
import ExpenseDashboard from '../components/dashboard';
import AddExpensePage from '../components/create';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import EditExpensePage from '../components/editExpensePage';
import HelpPage from '../components/help';
import NotFoundPage from '../components/error';


export const history = createHistory();

     
const AppRouter= () => (
    <Router history={history}>
    <div>
        <Switch>
        <PublicRouter path="/" component={Login} exact={true}/>   
        <PrivateRouter path="/dashboard" component={ExpenseDashboard} exact={true}/>
        <PrivateRouter path="/create" component={AddExpensePage}/>
        <PrivateRouter path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>        
        </Switch>
       
    </div>
    </Router>
);

export default AppRouter;