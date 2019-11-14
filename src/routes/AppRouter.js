import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import ExpenseDashboard from '../components/dashboard';
import AddExpensePage from '../components/create';
import EditExpensePage from '../components/editExpensePage';
import HelpPage from '../components/help';
import NotFoundPage from '../components/error';
import Header from '../components/header';

     
const AppRouter= () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>        
        </Switch>
       
    </div>
    </BrowserRouter>
);

export default AppRouter;