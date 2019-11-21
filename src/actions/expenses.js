import uuid from 'uuid';
import database from '../firebase/firebase';



const addExpense = ((expense)=>({
    type:"ADDEXPENSE",
    expense
    }));

export const startAddExpense = (expenseData = {}) => {

return (dispatch) => {
const {
description='',
note= '',
amount= 0,
createdAt=0
} = expenseData;

const expense = {
    description, note, amount, createdAt
}
database.ref('expenses')
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
return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(()=>{
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
return (dispatch)=>{
    return database.ref(`expenses/${id}`).update(updatess).then(()=>{
        dispatch(editExpense(id,updates))
    })
    }
}

const setupExpenses = (expenses) =>({
    type:"SETUPEXPENSES",
    expenses
})

export const startSetExpenses = ()=> {
return (dispatch) => {
   return database.ref('expenses').once('value').then((snapshot) => {
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
