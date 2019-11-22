import {login, logout} from '../../actions/auth';
import react from 'react';

test("Should test login correctly", ()=>{
    const user = {uid: 123};
    const action = login(user.uid);
    expect(action).toEqual({
        type:"LOGIN",
        uid: user.uid
    })
})


test("Should test logout correctly", ()=>{
    const action = logout();
    expect(action).toEqual({
        type:"LOGOUT"
    })
})
