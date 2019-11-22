import actionReducer from '../../reducers/auth';

test("Should login the user correctly",()=>{
    const userID=123;
    const action = {
        type:"LOGIN",
        uid:userID
    }
    const state = actionReducer({},action)
    expect(state).toBe(action.uid)
})

test("Should logout the user correctly",()=>{
        const action = {
        type:"LOGOUT"
    }
    const state = actionReducer({ uid: "anything" },action)
    expect(state.uid).toEqual(null);
})