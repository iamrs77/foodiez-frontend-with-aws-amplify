import React, { useEffect, useState } from 'react'
import '../styles/OrderHistory.css';
import Moment from 'react-moment';
import 'moment-timezone';
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { cartItemByDate } from '../graphql/queries';
import Loader from '../loader';

function OrderHistory() {
    let [orders, setOrders] = useState([])
    // let [nextToken, setNextToken] = useState(null);
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        if(isMounted){
            getOrders();
        }
        return () => { isMounted = false };
    }, [])

    let getOrders = () => {
        Auth.currentAuthenticatedUser().then(user => {
            let type = "CartItem";
            let filter = {userId: {eq: user.username}, status: {eq: "placed"}}
            let sortDirection = "DESC"
            let limit = 10;
            API.graphql(graphqlOperation(cartItemByDate, {type, filter, limit, sortDirection})).then(res => {
                console.log(res);
                setOrders(res.data.cartItemByDate.items);
                setIsLoading(false);
                // setNextToken(res.data.cartItemByDate.nextToken);
            }).catch(err => {
                console.log(err);
            })
        })
    }

    let ordersList = orders.map(order => {
        if(order.foodItem == null){
            return null;
        }
        return (
            <div className='order' key={order.id}>
                <div className='about__order'>
                    <span className='order__title'>{order?.foodItem?.name.toUpperCase()}</span>
                    <br/>
                    <span>₹ {order?.foodItem?.cost}</span>
                </div>
                
                <div className='about__time'>
                ordered at: <Moment  format='ddd DD-MMM-YYYY'>{order?.createdAt}</Moment> - <Moment tz="Asia/Kolkata" format='HH:MM'>{order?.createdAt}</Moment> IST
                </div>
            </div>
        )
    });

    if(isLoading){
        return <Loader />
    }

    return ordersList.length > 0 ? (
        <div className='orders'>
            <h5 className='orders__title'>Your last 10 Orders</h5>
            <div>
                {ordersList}
            </div>
        </div>
    ) :  (<div>
        Loading
    </div>)

    
}

export default OrderHistory
