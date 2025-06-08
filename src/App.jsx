import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import MenuCard from './Components/MenuCard/MenuCard';
import Footer from './Components/Footer/Footer';
import LoginPopup from './Components/LoginPopup/LoginPopup';
import Coffee from './Components/DrinkList/Coffee/Coffee';
import Tea from './Components/DrinkList/Tea/Tea';
import Juice from './Components/DrinkList/juices/Juice';
import Shakes from './Components/DrinkList/Shakes/Shakes';
import Smoothies from './Components/DrinkList/Smoothies/Smoothies'
import EnergyDrink from './Components/DrinkList/EnergyDrink/EnergyDrink'
import Cart from './Components/Screens/Cart';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
       {showLogin ? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />

      <Routes>
        
        <Route
          path="/"
          element={
            <div>
              <div id="home"><Header /></div>
              <div id="menu"><MenuCard /></div>
              <div id="contactus"><Footer /></div>
            </div>
          }
        />
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/tea" element={<Tea />} />
        <Route path="/juice" element={<Juice />} />
        <Route path="/shake" element={<Shakes />} />
        <Route path="/smoothies" element={<Smoothies />} />
        <Route path="/energydrink" element={<EnergyDrink />} />
      </Routes>
    </>
  );
};

export default App;
