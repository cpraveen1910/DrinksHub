import React from 'react'
import { assets } from '../../assets/assets'
import './MenuCard.css'
import { useNavigate } from 'react-router-dom'
const MenuCard = () => {
  const navigate = useNavigate();
  return (
    
    <div className='menu'>
      <div className="menu-content">
        <h2>Explore Our Drinks Menu</h2>
        <p>We have a variety of cool and tasty drinks 
          for you to enjoy. From popular choices to 
          special flavors, our goal is to keep you refreshed
           and happy with every sip.</p>
      </div>
      <hr />
      
        <div className="menu-container">
            <div className="box">
            <img onClick={() => navigate('/coffee')} src='/coffee_pic.jpg' width='400'height='250' alt="Coffee Box" />
            <button onClick={() => navigate('/coffee')}><div className="caption">Coffee</div></button>
            </div>
        <div className="box">
            <img onClick={() => navigate('/tea')} src="/tea_pic.jpg" width='380'height='250' alt="Tea Box" />
            <button onClick={() => navigate('/tea')}><div className="caption">Tea </div></button>
        </div>
        <div className="box">
            <img onClick={() => navigate('/juice')} src="/juices_pic.jpg" width='380'height='250' alt="Tea Box" />
            <button onClick={() => navigate('/juice')}><div className="caption">Juices </div></button>
        </div>
        <div className="box">
            <img onClick={() => navigate('/shake')} src="/shakes_pic.jpg" width='380'height='250' alt="Tea Box" />
            <button onClick={() => navigate('/shake')}><div className="caption">Shakes </div></button>
        </div>
        <div className="box">
            <img onClick={() => navigate('/smoothies')} src="/smoothies_pic.jpg" width='380'height='250' alt="Tea Box" />
            <button onClick={() => navigate('/smoothies')}><div className="caption">Smoothies </div></button>
        </div>
        <div className="box">
            <img onClick={() => navigate('/energydrink')} src="/energydrink_pic.jpg" width='380'height='250' alt="Tea Box" />
            <button onClick={() => navigate('/energydrink')}><div className="caption">EnergyDrink </div></button>
        </div>
      
    </div>
    </div>
    
  )
}

export default MenuCard
