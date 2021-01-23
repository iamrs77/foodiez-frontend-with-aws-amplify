import React from 'react'
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import '../styles/MenuItem.css'
import { connect } from 'react-redux'
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createCartItem } from '../graphql/mutations';
import { S3Image } from "aws-amplify-react";

function MenuItem({menuItems, role, dispatchItem}) {
    let buttonsDiv = (item) => {
        if(role === 'vendor'){
            return(<div>
                {/* <Link to='/'><button className="btn btn-sm btn-info edit__button"></button></Link> */}
            </div>)
        }else{
            return (
                <button onClick={() => {addItem(item)}} className="btn btn-sm btn-success add__button">Add to Basket</button>
            )
        }
    }
    
    let addItem = (item) => {
        Auth.currentAuthenticatedUser().then(user => {
            let input = {status: "pending", userId: user.username, type: "CartItem", cartItemFoodItemId: item.id}
            API.graphql(graphqlOperation(createCartItem, {input})).then(res => {
                dispatchItem({type: 'ADD_TO_CART', item: res.data.createCartItem})
            }).catch(err => {
                console.log(err);
            })
        })
    }

    let menuList = menuItems.map(item => {
        return (
            <div className='item' key={item.id}>
                {console.log(item)}
                <div className="item__left" >
                    <span className="item__name">{item.name}</span>
                    <span className="item__type"><LocalDiningIcon />&nbsp;{item.foodType}</span>
                    <span className="item__desc" data-toggle="tooltip" data-placement="top" title={item.description}>{item.description}</span>
                    <span className="item__cost">₹ {item.cost}</span>
                </div>
                <div className="item__right">
                    {   !item.image?.key ? 
                        <img className='basket__img' src="https://static.toiimg.com/thumb/52416693.cms?imgsize=789478&width=800&height=800" alt=""/>
                        :
                        <S3Image imgKey={item.image?.key} className='basket__img'/>
                    }
                    {buttonsDiv(item)}
                </div>
            </div>
        )
    })
    return (
        <div>
            {menuList}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        role: state.cart.roleName,
        items: state.cart.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchItem: (data) => dispatch(data),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)
