import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
import React from 'react';


const addExpense = ({ description='',
                      note= '',
                      amount= 0,
                      createdAt=0})=>({
    type:"ADDEXPENSE",
    expense:{ 
    id: uuid(),
    description,
    note,
    amount,
    createdAt
    }
});

const removeExpense=(({id}={})=>(   
    {
    type:"REMOVEEXPENSE",
    id
    }));

const editExpense=(id,updates)=>({
    type: 'EDITEXPENSE',
    id,
    updates
});

const setTextFilter=(text={}) => ({
    type: "SETTEXTFILTER",
    text
})

const sortByDate=()=>({
    type:"SORTBYDATE"
})

const sortByAmount=()=>({
    type:"SORTBYAMOUNT"
})

const setStartDate =(setDate=undefined)=>({
    type: "SETSTARTDATE",
    setDate
})

const setEndDate =(setDate=undefined)=>({
    type: "SETENDDATE",
    setDate
});

const getVisibleExpenses = ((expenses,{text,sortBy,startDate,endDate}) => {
        return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate!=='number'|| expense.startDate>=startDate;
        const endDateMatch   = typeof endDate!=='number' || expense.endDate<=endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
        }).sort((a,b)=>{
            if(sortBy==='amount'){
            return a.amount<b.amount ? 1 : -1
            }else if(sortBy==='date'){
            return a.createdAt<b.createdAt ? 1 :-1 
            }
         })
});


const expensesReducerDefaultState=[];

const expensesReducer=((state=expensesReducerDefaultState, action) => {
    switch(action.type){
        case "ADDEXPENSE":
        return [...state,
            action.expense] 
        
        case "REMOVEEXPENSE": 
        return state.filter(({id})=>{
          return id!==action.id
       })
       case "EDITEXPENSE" : 
       return state.map((expense)=>{
        if(expense.id===action.id){
            return {...expense,
                    ...action.updates
            }; 
        }else{
            return expense;
        }
       });
        
        default:
      return state;
    }
});

const filterReduceState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer =((state=filterReduceState,action)=>{
    switch(action.type){
        case 'SETTEXTFILTER':
        return {
            ...state,
            text:action.text
        }
        case 'SORTBYDATE':
        return {
            ...state,
            sortBy:'date'
        }
        case 'SORTBYAMOUNT':
        return {
            ...state,
            sortBy:'amount'
        }

        case 'SETSTARTDATE':
        return{
            ...state,
            startDate: action.setDate
        }
        case 'SETENDDATE':
        return{
            ...state,
            endDate: action.setDate
        }
        default:
        return state;
    }
});

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

const expenseOne = store.dispatch(addExpense({description:'rent',amount:1000}));
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:3000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{description:"love",amount:"100000000"}));

// store.dispatch(setTextFilter('ren'));
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());


store.subscribe(()=>{
    const state = store.getState();
    const getExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(getExpenses);
});
 


store.dispatch(setStartDate(1221));
store.dispatch(setStartDate());
store.dispatch(setEndDate(12213121));
const demoState = {
    expenses: [{
        id: 'adsadasdas',
        description: 'First expense',
        note: 'I am loving expensify',
        amount: '5000',
        createdAt: 0

    }],
    filters: {
        text: "love",
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    }
}

