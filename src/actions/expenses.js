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

const editExpense=(id,updates)=>({
type: 'EDITEXPENSE',
id,
updates
});

export {addExpense,removeExpense,editExpense};
