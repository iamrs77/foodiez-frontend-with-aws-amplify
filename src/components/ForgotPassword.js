import React, { useState } from 'react'
import '../styles/Login.css';
import TempNav from './TempNav';
import { withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify';

function ForgotPassword(props) {
    let [email, setEmail] = useState('');
    let [newPassword, setNewPassword] = useState('');
    let [code, setCode] = useState('');
    let [codeSent, setCodeSent] = useState(false);
    console.log(props, "current ")
    props.history.push('/login', props.location.pathname)

    const sendCode = (e) => {
        e.preventDefault();
        Auth.forgotPassword(email).then(res => {
            console.log(res);
            setCodeSent(true);
            document.getElementById("success").innerText = "Check your email for code"
            document.getElementById("error").innerText = "";
        }).catch(err => {
            console.log(err);
            document.getElementById("error").innerText = "User not found"
            document.getElementById("success").innerText= "";
        })
    }

    const changePassword = (e) => {
        e.preventDefault();
        if(newPassword.length < 8){
            document.getElementById("error").innerText = "Password must be minimum 8 characters"
            return
        }
        console.log(email, code, newPassword)
        Auth.forgotPasswordSubmit(email, code, newPassword).then(data => {
            console.log(data)
            props.history.push("/login");
        })
        .catch(err => {
            console.log(err)
            document.getElementById("error").innerText = "Check all the details"
            document.getElementById("success").innerText= "";
        });
    }

    let user = JSON.parse(localStorage.getItem('user'));
    let isUser = user ? props.history.push('/') : false;

    return (
        <div className="login">
            <TempNav />
            <div className="login__container">
                <h1>Forgot Password</h1>
                <div id="error" className="text-danger"></div>
                <div id="success" className="text-success"></div>
            {!codeSent ? (
                <form onSubmit={sendCode}>
                    <h5>Email</h5>
                    <input 
                        type="email" 
                        name='email' 
                        id="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="login__button">Send Code</button>
                </form>
            ) : (
                <form onSubmit={changePassword}>
                    <h5>Email</h5>
                    <input 
                        type="email" 
                        name='email' 
                        id="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Code</h5>
                    <input 
                        type="text" 
                        name='code' 
                        id="code"
                        value={code}
                        required
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                        type="password" 
                        name='password' 
                        id="password"
                        value={newPassword}
                        required
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button className="login__button">Change Password</button>
                </form>
            )}
            </div>
        </div>
    )
}

export default withRouter(ForgotPassword)