import React from 'react';
import './Cart.css';
import CartItemList from './CartItemList';

class Cart extends React.Component {
    render() {
        let title = "Cart of CSH created in " + new Date().toDateString();
        let output = <div>
            <h2>{title}</h2>
            <CartItemList />
            </div>;
        return output;
    }
}

export default Cart;