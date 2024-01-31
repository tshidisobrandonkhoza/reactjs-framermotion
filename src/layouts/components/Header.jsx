import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='logo'>Raf OG</div>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink  to='/fruits
        '>Fruits</NavLink></li>
        <li><NavLink  to='/vegies'>Vegies</NavLink></li>
      </ul>
    </header>
  )
}

export default Header
