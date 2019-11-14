import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should set startDate filter', () => {
    const startDate = moment();
    const action = {
      type: 'SETSTARTDATE',
      startDate
    };
    const state = filterReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
  });

  test('should set endDate filter', () => {
    const endDate = moment();
    const action = {
      type: 'SETENDDATE',
      endDate
    };
    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
  });

  
test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORTBYAMOUNT' });
    expect(state.sortBy).toBe('amount');
  });


  test('should set sortBy to date', () => {
    const currentState = {
      text: '',
      startDate: undefined,
      endDate: undefined,
      sortBy: 'date'
    };
    const action = { type: 'SORTBYDATE' };
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
  });

  test('should set text filter', () => {
    const text = 'This is my filter';
    const action = {
      type: 'SETTEXTFILTER',
      text
    };
    const state = filterReducer(undefined, action);
    expect(state.text).toBe(text);
  });

  test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    });
  });