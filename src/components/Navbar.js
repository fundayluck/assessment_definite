import React from 'react'
import Logo from '../assets/Logo.svg'
import MidLogo from '../assets/midLogo.svg'
import Menu from '../assets/Menu.svg'

const Navbar = () => {
    return (
        <nav className='container'>
            <ul>
                <img src={Logo} alt='Logo' />
            </ul>
            <ul className="list">
                <img src={MidLogo} alt='MidLogo' />
                <li className="items">ABOUT US</li>
                <li className="items">EXPLORE CARS</li>
                <li className="items">PROMO</li>
                <li className="items">NEWS & EVENTS</li>
                <img src={Menu} alt='Menu' />
            </ul>
        </nav>
    )
}

export default Navbar