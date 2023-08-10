import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import addImg from './../img/add-a-photo.svg'

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
        } catch (err) {
        setErr(true);
        }
    };
    return (
        <div className='ws-form-container'>
            <div className="ws-form-wrapper">
                <span className='ws-logo'>West Chat</span>
                <span className='ws-title'>Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="" id="" placeholder='email'/>
                    <input type="password" name="" id="" placeholder='password'/>
                    <button>Log in</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Don't have an account? <Link to="/register">Sign up</Link></p>
            </div>
        </div>
    );
};

export default Login;