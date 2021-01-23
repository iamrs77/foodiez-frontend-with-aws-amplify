import React, { useState } from 'react'
import '../styles/Login.css';
import TempNav from './TempNav';
import { Link, withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';

function Login(props) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    // if(props.location.state === "/forgot-password"){
    //     document.getElementById("success").innerText = "Password Changed Succesfully"
    //     props.location.state = "";
    //     console.log(props, "after change")
    // }

    let login = (e) => {
        e.preventDefault()
        Auth.signIn(email, password).then((res) => {
            if(res){
                localStorage.setItem('user', JSON.stringify(res.attributes), {maxAge: 24*60*60});
                props.history.push("/");
            }
        }).catch(err => {
            document.getElementById("error").innerText = "Email/Password do not match"
            console.log(err);
        });
    }

    let user = JSON.parse(localStorage.getItem('user'));
    let isUser = user ? props.history.push('/') : false;

    return (
        <div className="login">
            <TempNav />
            <div className="login__container">
                <h1>Login</h1>
                <div id="error" className="text-danger"></div>
                <div id="success" className="text-success"></div>
                <form onSubmit={login}>
                    <h5>Email</h5>
                    <input 
                        type="email" 
                        name='email' 
                        id="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                        type="password" 
                        name='password' 
                        id="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                        <Link to="/forgot-password" className="forgot__password">Forgot Password?</Link>
                    </div>
                    <button className="login__button">Login</button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login)
