import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,count) => total + count.price, 0)  

    const tax = total/10;

    const formetNumber = num =>{
        const formet = num.toFixed(2)
        return Number(formet)
    }
    return (
        <div>
            <h2>The world's largest selection of courses</h2>
            <h4>Total Added Course: {cart.length}</h4>
            <p>Total Price: ${formetNumber(total)}</p>
            <p><small>Tax: ${formetNumber(tax)}</small></p>
            <button className="btn">Get started</button>
        </div>
    );
};

export default Cart;