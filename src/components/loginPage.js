import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const Login = ({startLogin}) => (
    <div>
        <h1>Login Here</h1>
        <button onClick={startLogin}>Login</button>
    </div>
)

const mapDispatchToProps= (dispatch)=>({
startLogin: ()=> dispatch(startLogin())
})
export default connect(undefined,mapDispatchToProps)(Login);