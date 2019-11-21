import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {login, logout} from './actions/auth';
import {startSetExpenses} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import AppRouter, {history} from './routes/AppRouter';
import {firebase} from './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';



const store= configureStore();
const state = store.getState();
const getExpenses = getVisibleExpenses(state.expenses,state.filters)
console.log(getExpenses);

const jsx= (
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
);

let hasRendered = false;

const renderApp=()=>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered=true;
    
    }
    
      
}


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
    renderApp();
    if(history.location.pathname==='/'){
    history.push('/dashboard');
}
})
} 
else {
    store.dispatch(logout());
    renderApp();    
    history.push("/");
}

})