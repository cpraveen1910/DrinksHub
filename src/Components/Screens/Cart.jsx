import {useContext, useState} from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets'
import Footer from '../../Components/Footer/Footer'
import './Cart.css'
const Cart = () => {
  const {cartItems, drink_list, removeFromCart, addToCart, getTotalCartAmount} = useContext(StoreContext);
  
  return (
    <div className='cart'>
      <div className="cart-items-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Modify</p>
      </div>
      <br/>
      <hr />
      {
        drink_list.map((drink, index) => {
            if(cartItems[drink._id] > 0){
            return (
                <>
            <div className="cart-items-item">
                    <img src={drink.image} alt="" />
                    <p>{drink.name}</p>
                    <p>{drink.price}</p>
                    <p>{cartItems[drink._id]}</p>
                    <p>{cartItems[drink._id] * drink.price}</p>
                <div className="cart-item-counter cart-counter">
                    <img onClick={() => removeFromCart(drink._id)} src={assets.remove_icon_red} alt=""/>
                    <p>{cartItems[drink._id]}</p>
                     <img onClick={() => addToCart(drink._id)} src={assets.add_icon_green} alt=""/>
                </div>
                <p></p>
            </div>
            <hr />
                </>
            );
            }
            })}
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₹{!getTotalCartAmount()?0:50}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>₹{!getTotalCartAmount()?0:getTotalCartAmount()+50}</p>
              </div>
            </div>
            <button>Proceed to Checkout</button>
          </div>
          <div className="cart-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='Enter promo code' />
              <button>Apply</button>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart