
const setTextFilter=(text={}) => ({
    type: "SETTEXTFILTER",
    text
    })
    
    const sortByDate=()=>({
    type:"SORTBYDATE"
    })
    
    const sortByAmount=()=>({
    type:"SORTBYAMOUNT"
    })
    
    const setStartDate =(startDate=undefined)=>({
    type: "SETSTARTDATE",
    startDate
    })
    
    const setEndDate =(endDate=undefined)=>({
    type: "SETENDDATE",
    endDate
    });

    export {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate};