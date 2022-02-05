import React from 'react';
import '../styles/itemcards.css'
import { useCart } from 'react-use-cart'

export default function ItemCard(props) {
  const { addItem } = useCart();

  return (
    <>
      <div className='main__div'>
        <div className='card'>
          <div cllassName="img__info">
            <img src={props.img} alt="" />
          </div>

          <div className='card__info'>
            <h3>{props.title}</h3>
            <h3>$ {props.price}</h3>
            <p>{props.desc}</p>
            <button className='card__button--addtocart' href="" onClick={() => addItem(props.item)}>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
