import {connect} from 'react-redux';
import React from 'react';
import {Route,Redirect} from 'react-router-dom';

const PublicRouter = (
    {
    isAuthenticated,
    component:Component,
    ...rest
})=>(
    <Route {...rest} component={(props)=>(
        isAuthenticated ? (
            <Redirect to="/dashboard"/> 
        ) : (
            <div>
            <Component {...props}/>
            </div>
            
        )
        
    )}/>
)

const mapStateToProps=(state)=>({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRouter)