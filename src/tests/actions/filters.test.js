import moment from 'moment';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters';

test('Should filter by text',()=>{
    const text = "Something"
   const action = setTextFilter(text);
    expect(action).toEqual({
        type:"SETTEXTFILTER",
        text
    });
})

test('Should filter by text without input',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:"SETTEXTFILTER",
        text:{}
    });
})

test('Should filter by Date', ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:"SORTBYDATE"
    })

});

test('Should filter by Amount', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:"SORTBYAMOUNT"
    })

});

test('Should filter by StartDate', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:"SETSTARTDATE",
        startDate:moment(0)
    })

});

test('Should filter by EndDate', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:"SETENDDATE",
        endDate:moment(0)
    })

});

