import {useState,useContext} from 'react'
import {assets} from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';


const Navbar = ({showLogin,setShowLogin}) => {

    const [menu ,setMenu] = useState('home')

      const { cartItems } = useContext(StoreContext);
    const totalCartItems = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

    
  return (
    <div className='navbar'>
        <Link to='/' onClick={()=>setMenu("home")}><img className='logo' src={assets.logo} alt="" /></Link>
        <ul className='navbar-menu'>
            <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}><a href="#home">Home</a></li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}><a href="#menu">Menu</a></li>
        <li onClick={() => setMenu("contactus")} className={menu === "contactus" ? "active" : ""}><a href="#contactus">Contact Us</a></li>
        </ul>
        <div className="navbar-right">
            <div className="navbar-basket-icon" >
            <Link to="/cart"><img src={assets.basket_icon} alt="Cart" /></Link>
            {totalCartItems > 0 && <div className="dot"></div>}
            </div>

            
         <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
        
    </div>
    
  )
}

export default Navbar