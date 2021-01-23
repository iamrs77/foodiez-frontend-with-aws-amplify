import React, { useState } from 'react'
import '../styles/Login.css';
import '../styles/Register.css';
import TempNav from './TempNav';
import { withRouter } from 'react-router-dom';
import { Auth } from "aws-amplify";

function Register(props) {
    let [email, setEmail] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [password, setPassword] = useState('');
    let [passwordConfirm, setPasswordConfirm] = useState('');
    let [codeSent, setCodeSent] = useState(false);
    let [code, setCode] = useState('');
    
    let register = (e, userRole) => {
        e.preventDefault()
        if(password !== passwordConfirm){
            document.getElementById('error').innerText = "Password don't match";
            return;
        }else {
            document.getElementById('error').innerText = '';
        }

        Auth.signUp({
            username: email,
            password,
            attributes: {
                email,
                'custom:userRole': userRole,
                'custom:firstName': firstName,
                'custom:lastName': lastName
            }
        }).then(res => {
            setCodeSent(true);
        }).catch(err=>{
            document.getElementById('error').innerText = "Enter all the fields"
            console.log(err);
        })
    }

    const confirmSignUp = (e) => {
        e.preventDefault();
        Auth.confirmSignUp(email, code).then((res) => {
            props.history.push('/login');
        }).catch(err => {
            console.log(err);
        });
    }

    let user = JSON.parse(localStorage.getItem('user'));
    let isUser = user ? props.history.push('/') : false;

    return (
        <div className="login">
            <TempNav />
            <div className="login__container register__container">
                <h1>Register</h1>
                <div id="error" className="danger-text"></div>
                <form method='post' onSubmit={() => {}}>
                {!codeSent ? (
                    <div>
                    <h5>Email</h5>
                    <input 
                        type="email" 
                        name='email' 
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>First Name</h5>
                    <input 
                        type="text" 
                        name='firstName' 
                        value={firstName}
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <h5>Last Name</h5>
                    <input 
                        type="text" 
                        name='lastName' 
                        value={lastName}
                        required
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                        type="password" 
                        name='password' 
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <h5>Confirm Password</h5>
                    <input 
                        type="password" 
                        name='passwordConfirm' 
                        value={passwordConfirm}
                        required
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                    <div className="vendor">
                        <button className="login__button reg__button" onClick={(e) => {register(e, 'user')}}>Register</button>
                        <button className="btn vendor__button" onClick={(e) => {register(e, 'vendor')}}>Register as Vendor!</button>
                    </div>
                    </div>
                    ) : (
                        <div>
                        <h5>Enter Code</h5>
                        <input 
                            type="text" 
                            name='code' 
                            value={code}
                            required
                            placeholder="Check Your Email for Code"
                            onChange={(e) => setCode(e.target.value)}
                        />
                        <div className="code__confirmButton">
                            <a className="login__button" onClick={confirmSignUp}>Confirm Code</a>
                        </div>
                    </div>
                    )}
                    
                    <div id="error"></div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Register)
