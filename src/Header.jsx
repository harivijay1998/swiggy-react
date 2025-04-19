import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div>
        <img src='https://png.pngtree.com/png-clipart/20241007/original/pngtree-free-food-delivery-logo-template-png-image_16223989.png' alt='foodlogo' className='logo'/>
      </div>

      <div className='link'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
      </div>
    </div>
  )
}

export default Header
