import expenseReducer from '../../reducers/expenses';


test('should add expense', () => {
    const expense = {
        description:'love',
        note: '12312',
        amount: 0,
        createdAt:0
    };
    const action = {
        type: 'ADDEXPENSE',
        expense
      };
    const state = expenseReducer(expense,action)
    expect(state).toEqual([action.expense]);
  });

  test('should set default state', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });

  test('should remove expense by id', () => {
    const expense = [{
        description:'love',
        note: '12312',
        amount: 0,
        createdAt:0
    }];   
    const action = {
        type:"REMOVEEXPENSE",
        id:expense[0].id
    }
    const state = expenseReducer(expense, action);
    expect(state).toEqual([]);
  });

  test('should not remove expense if id not found', () => {
    const expense = [{
        description:'love',
        note: '12312',
        amount: 0,
        createdAt:0
    }];   
    const action = {
        type:"REMOVEEXPENSE",
        id:-1
    }
    const state = expenseReducer(expense, action);
    expect(state).toEqual(expense);
  });

  test('should edit an expense', () => {
    const expense = [{
        description:'love',
        note: '12312',
        amount: 0,
        createdAt:0
    }];   
    const amount = 122000;
    const action = {
      type: 'EDITEXPENSE',
      id: expense[0].id,
      updates: {
        amount
      }
    };
    const state = expenseReducer(expense, action);
    expect(state[0].amount).toBe(amount);
  });

  test('should not edit an expense if id not found', () => {
    const expense = [{
        description:'love',
        note: '12312',
        amount: 0,
        createdAt:0
    }];   
    const amount = 122000;
    const action = {
      type: 'EDITEXPENSE',
      id: -1,
      updates: {
        amount
      }
    };
    const state = expenseReducer(expense, action);
    expect(state[0].amount).toBe(expense[0].amount);
  });
  