import React from 'react'
import Logo from '../assets/Logo.svg'
import MidLogo from '../assets/midLogo.svg'
import Menu from '../assets/Menu.svg'
import { ReactComponent as Vector } from '../assets/Vector.svg'

const Navbar = () => {
    return (
        <nav className='container'>

            <img className='logo' src={Logo} alt='Logo' />

            <ul className="list">
                <img src={MidLogo} alt='MidLogo' />
                <li className="items">ABOUT US  </li><Vector />
                <li className="items">EXPLORE CARS</li><Vector />
                <li className="items">PROMO</li><Vector />
                <li className="items">NEWS & EVENTS</li><Vector />
                <img src={Menu} alt='Menu' />
            </ul>
        </nav>
    )
}

export default Navbar