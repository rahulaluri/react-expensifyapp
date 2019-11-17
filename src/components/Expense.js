import React from 'react';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';


const ExpenseListItem = ({dispatch, id,description, amount, createdAt}) => (
    <div>
       <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{numeral(amount).format('$0,0.00')}
            -
        {moment(createdAt).format("MMM Do, YYYY")}</p>    
    </div>
)

export default ExpenseListItem;

