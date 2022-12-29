import React from 'react'
import logo from "../assets/Logo.svg"
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='Nav'>
        <div className="logo_container">
            <div className="logo_img"><img src={logo} alt="" /></div>
            <h2>LOAN Form</h2>
        </div>

        <div className="menu">
            <li>About</li>
            <li>Features</li>
            <li>Price</li>
            <li>Testimonials</li>
            <li>Help</li>
        </div>

        {/* <div className="login">
            <h3>Sign In</h3>
            <button className='nav_btn'>Sign UP</button>
        </div> */}
    </div>
  )
}

export default Navbar