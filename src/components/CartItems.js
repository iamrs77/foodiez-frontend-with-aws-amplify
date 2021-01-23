import React from 'react'
import '../styles/CartItems.css'
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import { connect } from 'react-redux';
import { API, graphqlOperation } from 'aws-amplify';
import { deleteCartItem } from '../graphql/mutations';

function CartItems({cartItems, deleteItem}) {
    let removeitem = (item) => {
        let input = {id: item.id}
        API.graphql(graphqlOperation(deleteCartItem, {input})).then(res => {
            deleteItem({type: 'REMOVE_FROM_CART', id: item.id})
        })
    }

    let cartList = cartItems.map(item => { 
        if(item == null){
            return null;
        }
        return (
            <div className='cartitem' key={Math.random()}>
                <div className="item__left" >
                    <span className="item__name">{item.foodItem.name}</span>
                    <span className="item__type"><LocalDiningIcon />&nbsp;{item?.foodItem.foodType}</span>
                    <span className="item__desc" data-toggle="tooltip" data-placement="top" title={item?.foodItem.description}>{item?.foodItem.description}</span>
                    <span className="item__cost">₹ {item?.foodItem.cost}</span>
                </div>
                <div className="item__right">
                    <img src="https://static.toiimg.com/thumb/52416693.cms?imgsize=789478&width=800&height=800" alt=""/>
                    <button onClick={() => {removeitem(item)}} className="btn btn-sm btn-danger remove__button">Remove</button>
                </div>
            </div>
        )
    })
    return (
        <div className='list_ofItems'>
            {cartList}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (data) => {dispatch(data)}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)
