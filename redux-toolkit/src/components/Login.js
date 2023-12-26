import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/user';
import {logout} from '../redux/user';

function Login() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {
                dispatch(login({name: "안희정", age: 23, email: "eyrt6973@beamworks.co.kr"}))
            }}>Login</button>
            <button onClick={() => {
                dispatch(logout())
            }}>Logout</button>
        </div>
    );
}

export default Login