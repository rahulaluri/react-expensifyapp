import {connect} from 'react-redux';
import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import Header from '../components/header';

const PrivateRouter = (
    {
    isAuthenticated,
    component: Component,
    ...rest
})=>(
    <Route {...rest} component={(props)=>(
        isAuthenticated ? (
            <div>
            <Header/>
            <Component {...props}/>
            </div>
            
        ) : (
        <Redirect to="/"/>
        )
    )}/>
)

const mapStateToProps=(state)=>({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRouter)