import React from 'react';

import addImg from './../img/add-a-photo.svg'

const Register = () => {
    return (
        <div className='ws-form-container'>
            <div className="ws-form-wrapper">
                <span className='ws-logo'>West Chat</span>
                <span className='ws-title'>Register</span>
                <form>
                    <input type="text" name="" id="" placeholder='display name'/>
                    <input type="email" name="" id="" placeholder='email'/>
                    <input type="password" name="" id="" placeholder='password'/>
                    <input style={{display:"none"}} type="file" name="" id="file" />
                    <label htmlFor="file">
                        <img src={addImg} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Have an account? Log in</p>
            </div>
        </div>
    );
};

export default Register;