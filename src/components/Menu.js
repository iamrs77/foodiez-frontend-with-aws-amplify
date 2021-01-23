import React, { useEffect, useState } from 'react'
import { Link, useParams, withRouter } from 'react-router-dom'
import MenuItem from './MenuItem';
import '../styles/Menu.css'
import { connect } from 'react-redux';
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { listFoodItems } from '../graphql/queries';
import Loader from '../loader';

function Menu({role}) {
    let {vendorId} = useParams();
    let [menuItems, setMenuItems] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    let addMenuButton = role === 'vendor' ? (
        <Link to={`/menu-form/${vendorId}`} className='no__textDecoration'><button className='add__menuItemBtn btn btn-info'>Add Menu Item</button></Link>
    ) : (<></>);

    useEffect(() => {
        let isMounted = true;
        if(isMounted){
            Auth.currentAuthenticatedUser().then(user => {
                let filter = {vendorId: { eq: vendorId}};
                API.graphql(graphqlOperation(listFoodItems, {filter})).then(res => {
                    setMenuItems(res.data.listFoodItems.items);
                    setIsLoading(false);
                }).catch(err => {
                    console.log(err);
                })
            })
        }
        return () => { isMounted = false };
    }, [])

    if(isLoading){
        return <Loader />
    }

    if(menuItems.length <= 0){
        return (
            <div className='menu__info'>
                No Items Yet
                <div>
                    {addMenuButton}
                </div>
            </div> 
        )
    } else {
        return (
            <div className="main__menu">
                {addMenuButton}
                <MenuItem menuItems={menuItems}/>
            </div>
        )
    }
    
}
const mapStateToProps = (state) => {
    return {
        role: state.cart.roleName,
    }
}
export default connect(mapStateToProps)(withRouter(Menu))
