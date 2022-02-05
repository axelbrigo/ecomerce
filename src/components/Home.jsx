import React from 'react';
import ItemCard from './ItemCard';
import '../styles/home.css'
import data from '../components/data'
import logo from '../img/shop.jpg'

export default function Home() {
  return (
    <>
      <nav>
        <div className='nav__one'>
          <img className='image__logo' src={logo} alt="logo" />
        </div>
        <div className='nav__two'>
          <h1>All Items</h1>
        </div>
      </nav>

      <section className='main__section'>
        <div className='main__section--card'>
          {data.productData.map((item, index) => {
            return (
              <ItemCard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index} />
            )
          })}

        </div>
      </section>
    </>
  );
}
