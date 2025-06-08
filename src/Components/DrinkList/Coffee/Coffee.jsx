import React from 'react';
import './Coffee.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { drink_list } from '../../../assets/assets';
import { assets } from '../../../assets/assets';
import { useEffect ,useContext} from 'react';
import { StoreContext } from '../../../Context/StoreContext'

const Coffee = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   const coffeeItems = drink_list.filter(item => item.category === 'Coffee');
  const navigate = useNavigate()
  const BackToMenu = () => {
    navigate('/'); // navigate to the main page

    // Wait a little bit to ensure route change happens, then scroll
    setTimeout(() => {
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  return (
    <>
    <button className='btn1' onClick={BackToMenu}>Back To Menu Page</button>
    <div className="coffee-page">
      <h1>Explore Our Coffee Menu</h1>
    </div>
    <div className="drink-menu">
      {coffeeItems.map(({ _id, name, price, description, image }) => (
        <div key={_id} className="drink-item">
          <div className="drink-item-image-container">
              <img src={image} alt={name} className="drink-item-image" />
              {
                !cartItems[_id] ? (
                  <img onClick={() => addToCart(_id)} src={assets.add_icon_white} className="add" alt="Add" />
                ) : (
                  <div className="drink-item-counter">
                    <img onClick={() => removeFromCart(_id)} src={assets.remove_icon_red} alt="Remove" />
                    <p>{cartItems[_id]}</p>
                    <img onClick={() => addToCart(_id)} src={assets.add_icon_green} alt="Add More" />
                  </div>
                )
              }
            </div>
          <div className="drink-item-info">
            <p className="drink-item-name">{name}</p>
            <p className="drink-item-desc">{description}</p>
            <div className="drink-item-price-rating">
                <p className="drink-item-price">₹{price}</p>
                <img src={assets.rating_starts} alt=""/>
            </div>
        </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Coffee;
