import React from 'react';
import { useCart } from 'react-use-cart'
import '../styles/cart.css'

export default function Cart() {
  const { isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1>Your Cart is Empty</h1>
  return (
    <section className='section__cart'>
      <div className='section__cart--main'>
        <div className='section__cart--son'>
          <div>
          <h3>Cart ({totalUniqueItems})</h3>
          </div>
          <div>
         <h3> total Items : ({totalItems})</h3>
          </div>
          
          <div>
            
              {items.map((item, index) => {
                return (
                  <div>
                  <div key={index} className="main__items--div">
                       <div>
                      <img src={item.img} style={{ height: '6rem' }} />
                      </div>
                      <div>{item.title}</div>
                      <div>{item.price}</div>
                      <div>Quantity({item.quantity})</div>
                        <div>
                          <button 
                          className='button__less'
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                           >-</button>
                          <button 
                          className='button__plus'
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                          >+</button>
                          <button 
                          className='button__remove'
                          onClick={() => removeItem(item.id)}
                          >Remove Item</button>
                        </div>
                  </div>
                  </div> 
                  )
            })}
          </div>
        </div>
        <div className='checkout'>
          <h2>Total Price: $ {cartTotal} </h2>
          <button className='clean__cart' onClick={() => {emptyCart()}}>Clear Cart</button>
          <button className='buy__now' onClick={() => {emptyCart()}}>Buy Now</button>
        </div>
      </div>
    </section>

  );
}
