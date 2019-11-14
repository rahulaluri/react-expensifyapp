import combineReducers from 'redux';
import moment from 'moment';

const filterReduceState = {
    text:'',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
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
            startDate: action.startDate
        }
        case 'SETENDDATE':
        return{
            ...state,
            endDate: action.endDate
        }
        default:
        return state;
    }
});

export default filterReducer;