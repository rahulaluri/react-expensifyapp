import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

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

test('Filter by text',()=>{
    const result = selectExpenses(expenses,{text:"um"})
    expect(result).toEqual([expenses[0]]);
})

test('Filter by start date',()=>{
    const result = selectExpenses(expenses,{text:'',startDate:moment(0)})
    expect(result).toEqual([expenses[0],expenses[2]]);
})

test('Filter by end date',()=>{
    const result = selectExpenses(expenses,{text:'',endDate:moment(0)})
    expect(result).toEqual([expenses[0],expenses[1]]);
})

test('Sort by date',()=>{
    const result = selectExpenses(expenses,
    {text:'',
    sortBy:'date',
    endDate:undefined,
    startDate:undefined
});
expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
})

test('Sort by amount',()=>{
    const result = selectExpenses(expenses,
    {text:'',
    sortBy:'amount',
    endDate:undefined,
    startDate:undefined
});
expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
})