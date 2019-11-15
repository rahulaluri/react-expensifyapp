import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routes/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store= configureStore();

store.dispatch(addExpense({description:'Gas Bill',amount:1000})); 
store.dispatch(addExpense({description:'Water Bill',amount:2000}));
store.dispatch(addExpense({description:'Car Bill',amount:42000}));
store.dispatch(addExpense({description:'Movie Bill',amount:421}));
store.dispatch(addExpense({description:'Rent Bill',amount:3200}));


const state = store.getState();
const getExpenses = getVisibleExpenses(state.expenses,state.filters)
console.log(getExpenses);

const jsx= (
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
 