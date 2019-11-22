import {
  addExpense,
  removeExpense,
  editExpense, 
  startAddExpense, 
  setupExpenses, 
  startSetExpenses, 
  startRemoveExpense, 
  startEditExpenses
} from '../../actions/expenses';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import configureMockStore from 'redux-mock-store';
import moment from 'moment';

const createMockStore = configureMockStore([thunk]);
const uid = "thiscanbeanything";
const defaultStore = {auth: uid};

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}];


test('Should remove the option',()=>{
    const action = removeExpense({id:"12312"});
    expect(action).toEqual({
        type:"REMOVEEXPENSE",
        id: "12312"
    });
});

test('should remove expense from firebase', (done) => {
  const expense = [{
      description:'love',
      note: '12312',
      amount: 0,
      createdAt:0
  }];   

  const store = createMockStore(defaultStore);
  const id = expense.id;
  store.dispatch(startRemoveExpense({id})).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:"REMOVEEXPENSE",
      id
    });
   return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then((snapshot)=> {
    expect(snapshot.val()).toBeFalsy();
    done();
  })
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

const expense={ 
  id: 123,
  description:"Check",
  amount:"129"
}

test('should update expense in firebase', (done) => {
  const updates = [{
      description:'love2'
  }];   

  const store = createMockStore(defaultStore);
  const id = expense.id;
  store.dispatch(startEditExpenses(id,update)).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:"EDITEXPENSE",
      id,
      updates
    });
   return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then((snapshot)=> {
    expect(snapshot.val().description).toEqual(updates.description);
    done();
  })
});



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

// test('should add expense with defaults to database and store', (done) => {
//     const store = createMockStore({});
//     const expenseDefaults = {
//       description: '',
//       amount: 0,
//       note: '',
//       createdAt: 0
//     };
  
//     store.dispatch(startAddExpense({})).then(() => {
//       const actions = store.getActions();
//       expect(actions[0]).toEqual({
//         type: 'ADDEXPENSE',
//         expense: {
//           id: expect.any(String),
//           ...expenseDefaults
//         }
//       });
  
//       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//     }).then((snapshot) => {
//       expect(snapshot.val()).toEqual(expenseDefaults);
//       done();
//     });
//   });

//  test("Should setup the expenses", ()=>{
//      const action = setupExpenses(expenses);
//      expect(action).toEqual({
//          type:"SETUPEXPENSES",
//          expenses
//      })

//  })

 test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SETEXPENSES',
      expenses
    });
    done();
  });
});


test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultStore);
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADDEXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should setup set expense action object with data', () => {
  const action = setupExpenses(expenses);
  expect(action).toEqual({
    type: 'SETEXPENSES',
    expenses
  });
});

