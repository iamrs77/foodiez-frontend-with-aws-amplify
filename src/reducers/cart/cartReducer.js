import * as actionType from './cartActionType';

const initState = {
    roleName: null,
    cartItems: []
}

let cartReducer = (state=initState, action) => {
    switch (action.type) {
        case actionType.POPULATE_THE_CART:
            return {
                ...state,
                cartItems: action.item,
            }
            
        case actionType.ADD_USER_ROLE:
            return {
                ...state,
                roleName: action.roleName,
            }

        case actionType.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.item],
            }

        case actionType.REMOVE_FROM_CART:
            const index = state.cartItems.findIndex(
                (cartItem) => (cartItem.id === action.id )
            )
            let newCartItems = [...state.cartItems];
            if(index >= 0){
                newCartItems.splice(index, 1);
            }
            return {
                ...state,
                cartItems: newCartItems,
            }

        default:
            return state;
    }
}

export default cartReducer
