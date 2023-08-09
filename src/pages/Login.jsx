import React from 'react';

import addImg from './../img/add-a-photo.svg'

const Login = () => {
    return (
        <div className='ws-form-container'>
            <div className="ws-form-wrapper">
                <span className='ws-logo'>West Chat</span>
                <span className='ws-title'>Login</span>
                <form>
                    <input type="email" name="" id="" placeholder='email'/>
                    <input type="password" name="" id="" placeholder='password'/>
                    <button>Log in</button>
                </form>
                <p>Don't have an account? Sign up</p>
            </div>
        </div>
    );
};

export default Login;