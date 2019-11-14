import combineReducers from 'redux';

const expensesReducerDefaultState=[];

const expensesReducer=((state=expensesReducerDefaultState, action) => {
    switch(action.type){
        case "ADDEXPENSE":
        return [...state,
            action.expense] 
        
        case "REMOVEEXPENSE": 
        return state.filter(({id})=>{
          return id!==action.id
       })
       case "EDITEXPENSE" : 
       return state.map((expense)=>{
        if(expense.id===action.id){
            return {...expense,
                    ...action.updates
            }; 
        }else{
            return expense;
        }
       });
        
        default:
      return state;
    }
});

export default expensesReducer;
