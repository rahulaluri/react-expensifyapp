import {addExpense,removeExpense,editExpense} from '../../actions/expenses';

test('Should remove the option',()=>{
    const action = removeExpense({id:"12312"});
    expect(action).toEqual({
        type:"REMOVEEXPENSE",
        id: "12312"
    });
});

test('Should edit the expense',()=>{
    const expense={ 
        id: 123,
        description:"Check",
        amount:"129"
    }
    const action = editExpense(expense.id,expense)
    expect(action).toEqual({
    type:"EDITEXPENSE",
    id: expense.id,
    updates: {
        ...expense
    }})
})

test('Should add a new expense',()=> {
    const expense={ 
        id: "123",
        description:"Check",
        amount:"129",
        note:"love",
        createdAt: 0
    }
    const action = addExpense(expense);
    expect(action).toEqual({
        type:"ADDEXPENSE",
        expense:
        {...expense,
            id:expect.any(String)}
    });
})

test('Should add a new expense with no arguments',()=> {
    const action = addExpense();
    expect(action).toEqual({
        type:"ADDEXPENSE",
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
          }
    });

    
})