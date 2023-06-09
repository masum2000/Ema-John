import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
      }
    // console.log(savedCart);

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart(); 
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                  {
                    savedCart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                  }
            </div>
            <div className='cart-container'>
                <Cart
                 cart={cart}
                 handleClearCart={handleClearCart}
                 >
                  <Link className='proceed-link' to="/checkout">
                    <button className='btn-proceed'>Proceed Checkout</button>
                  </Link>
                 </Cart>

            </div>
            
        </div>
    );
};

export default Order;