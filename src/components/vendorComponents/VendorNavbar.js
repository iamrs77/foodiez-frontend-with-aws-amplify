import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../../styles/VendorNavbar.css'
import { Auth } from 'aws-amplify';

function VendorNavbar(props) {
    let handleLogout = async (e) => {
        Auth.signOut().then(res => {
            localStorage.removeItem("user");
            props.history.push('/')
        }).catch(err => {
            console.log('error signing out: ', err);
        });
    }
    return (
        <div className='vendor__navbar'>
            <Link to='/home' >
            <div className="navbar__left">
                <img src={require('../../images/logo.jpg').default} alt=""/>
            </div>
            </Link>
            <div className="navbar__right logout__button">
            <Link to='/' onClick={handleLogout} className='nav__btn'><span className='btn '>Logout</span></Link>
            </div>
        </div>
    )
}

export default withRouter(VendorNavbar)
