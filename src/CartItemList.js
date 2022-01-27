import React from 'react';
import './CartItemList.css';
import CartItem from './CartItem';

class CartItemList extends React.Component {
  render() {
    		let itemsComponents = [];

      for (let item of this.props.items) {
        itemsComponents.push(<CartItem item={item}/>);
      }

    return <ul>{itemsComponents}</ul>;
  }
}

export default CartItemList;