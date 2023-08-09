import React, { useContext } from 'react'
// imports
import { CartContext } from '../Global/CartContext'

// GATE
import StripeCheckout from 'react-stripe-checkout';


export default function Cart() {
    const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
    return (
        <>
            <div className="cart-container">
                <div className="cart-details" style={{ marginTop: "100px" }}>
                    {shoppingCart.length > 0 ?
                        shoppingCart.map((cart) => {
                            return (<div className="cart" key={cart.id}>
                                <span className="cart-image">
                                    <img src={cart.image} alt="loading" />
                                </span>
                                <span className="cart-product-name">
                                    {cart.name}
                                </span>
                                <span className="cart-product-price">
                                    {cart.price}.00
                                </span>
                                <span className='inc' onClick={() => dispatch({ type: "INC", id: cart.id, cart })}>
                                    <i className="fa-solid fa-plus"></i>
                                </span>
                                <span className='product-quantity'>
                                    {cart.qty}
                                </span>
                                <span className="dec" onClick={() => dispatch({ type: "DEC", id: cart.id, cart })}>
                                    <i className="fa-solid fa-minus"></i>
                                </span>
                                <span className='product-total-price'>
                                    {(cart.price) * (cart.qty)}
                                </span>
                                <span className='delete-product' onClick={() => dispatch({ type: "DELETE", id: cart.id, cart })}>
                                    <i className="fa-solid fa-trash-can"></i>
                                </span>
                            </div>)
                        })
                        : "Empty Cart"}
                </div>
                {shoppingCart.length > 0 ?
                    <div className='cart-summary'>
                        <div className='summary'>
                            <h3>Cart Summary</h3>
                            <div className="total-items">
                                <div className="items">Total Items</div>
                                <div className="items-count">{qty}</div>
                            </div>
                            <div className="total-price-section">
                                <div className="just-title">
                                    Total Price
                                </div>
                                <div className="items-price">$ {totalPrice}.00</div>
                            </div>
                            <div className="stripe-section">
                                {/* Stripe-button */}
                                <StripeCheckout>
                                    
                                </StripeCheckout>
                            </div>
                        </div>
                    </div>
                    : ''}
            </div>
        </>
    )
}
