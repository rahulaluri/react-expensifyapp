import uuid from 'uuid';
import database from '../firebase/firebase';
import { auth } from 'firebase';



const addExpense = ((expense)=>({
    type:"ADDEXPENSE",
    expense
    }));

export const startAddExpense = (expenseData = {}) => {

return (dispatch,getState) => {
const uid = getState().auth.uid

const {
description='',
note= '',
amount= 0,
createdAt=0
} = expenseData;

const expense = {
    description, note, amount, createdAt
}
database.ref(`users/${uid}/expenses`)
.push(expense)
.then((ref)=>{
    dispatch(addExpense({
        id: ref.key,
        ...expense
    }));

})

};
};

const removeExpense=(({id}={})=>(   
{
type:"REMOVEEXPENSE",
id
}));

export const startRemoveExpense = ({ id }={})=> {
return (dispatch, getState) => {
    const uid = getState().auth.uid 
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
        dispatch(removeExpense({id}))
    });
}
}

const editExpense=(id,updates)=>({
type: 'EDITEXPENSE',
id,
updates
});

export const startEditExpenses = (id,updates)=>{
return (dispatch,getState)=>{
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
        dispatch(editExpense(id,updates))
    })
    }
}

const setupExpenses = (expenses) =>({
    type:"SETUPEXPENSES",
    expenses
})

export const startSetExpenses = ()=> {
return (dispatch,getState) => {
   const uid=getState().auth.uid

   return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
            });
        });
        dispatch(setupExpenses(expenses));
      });
      
    }
}
export {addExpense,removeExpense,editExpense, setupExpenses};
