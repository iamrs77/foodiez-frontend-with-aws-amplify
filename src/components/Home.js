import React, { useEffect, useState } from 'react'
import FoodItem from './FoodItem'
import '../styles/Home.css'
import {connect} from 'react-redux';
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { listCartItems, listVendors } from '../graphql/queries';
import Loader from '../loader';
import { Link } from 'react-router-dom';
function Home({addToCart, role}) {
    let [vendors, setVendors] = useState([]);
    let [homeHeader, setHomeHeader] = useState('');
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        if (isMounted){
            if(role === 'vendor'){
                Auth.currentAuthenticatedUser().then(user => {
                    let filter = {userId: { eq: user.username}};
                    API.graphql(graphqlOperation(listVendors, {filter})).then(res => {
                        setVendors(res?.data.listVendors?.items);
                        setHomeHeader('My Restaurants');
                        setIsLoading(false);
                    }).catch(err => {
                        console.log(err);
                    })
                })
            }else{
                Auth.currentAuthenticatedUser().then(user => {
                    API.graphql(graphqlOperation(listVendors)).then(res => {
                        setVendors(res?.data.listVendors.items);
                        setHomeHeader('Top Restaurants');
                    }).catch(err => {
                        console.log(err);
                    })
                })
            }
        }
        return () => { isMounted = false };
    }, [])
    
    useEffect(() => {
        let isMounted = true;
        if (isMounted){
            if(role === 'vendor'){
                addToCart({type: 'POPULATE_THE_CART', item: []})
            }else{
                Auth.currentAuthenticatedUser().then(user => {
                    let filter = {userId: {eq: user.username}, status: {eq: "pending"}}
                    API.graphql(graphqlOperation(listCartItems, {filter})).then(res => {
                        setIsLoading(false);
                        addToCart({type: 'POPULATE_THE_CART', item: res.data.listCartItems.items})
                    })
                })
            }
        }
        return () => { isMounted = false };
    }, [])

    if(isLoading){
        return <Loader />
    }
    
    return (
        <div className='home'>
            <img className='home__banner' src="https://elvino.co.uk/wp-content/uploads/2016/03/Food-banner-2.jpg" alt=""/>
            {role === "vendor" ? <Link to='/restaurant-form' className='no__textDecoration'><button className='add__RestaurantBtn btn btn-info'> <span>Add Restaurant</span> </button></Link> : ""}
            <h3>{homeHeader}</h3>
            {vendors ? <FoodItem vendors={vendors}/> : "loading"}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        role: state.cart.roleName,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (data) => {dispatch(data)}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
