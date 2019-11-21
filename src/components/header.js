import React from 'react';
import {NavLink} from 'react-router-dom';
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';


export const Header = ({startLogout})=> (
    <header>
    <h1> Expensify</h1>
   <NavLink activeClassName="is-active" to="/dashboard" exact={true}>Dashboard </NavLink> 
   <NavLink activeClassName="is-active" to="/create">Create </NavLink>
   <button onClick={startLogout}>Log out</button>
   </header>
);

const mapDispatchToProps= (dispatch)=>({
    startLogout: ()=> dispatch(startLogout())
    })

export default connect(undefined,mapDispatchToProps)(Header);
