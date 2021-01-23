import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import {connect} from 'react-redux'

function AutheticatedNewRouting({path, userComponents, vendorComponents, dispatchRole}) {    
    let user = JSON.parse(localStorage.getItem('user'));
    let isUser = user ? true : false;

    if(isUser) {
        let roleName = user['custom:userRole']
        dispatchRole({type: 'ADD_USER_ROLE', roleName: roleName})
        if(roleName === 'user'){
            if(userComponents.length <= 0){
                return(
                    <Redirect to='/' />
                )
            }
            let userComponentslist = userComponents?.map((component, index) => {
                return (<span key={index}>{component}</span>)
            })
            return (
                <Route path={path}>
                    {userComponentslist}
                </Route>
            )
        }else if (roleName === 'vendor'){
            if(vendorComponents.length <= 0){
                return(
                    <Redirect to='/' />
                )
            }
            let vendorComponentslist = vendorComponents?.map((component, index) => {
                return (<span key={index}>{component}</span>)
            })
            return (
                <Route path={path}>
                    {vendorComponentslist}
                </Route>
            )
        }
    } else {
        return(
                <Redirect to='/login' />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchRole: (data) => {dispatch(data)}
    }
}

export default connect(null, mapDispatchToProps)(AutheticatedNewRouting);
