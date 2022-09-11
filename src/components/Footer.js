import React from 'react'
import Facebook from '../assets/icon/facebook-icon.svg'
import Twitter from '../assets/icon/twitter-icon.svg'
import Instagram from '../assets/icon/instagram-icon.svg'
import Youtube from '../assets/icon/youtube-icon.svg'
import Email from '../assets/icon/email-icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <p className=''>STAY CONNECTED WITH US</p>
            <div className='social-media'>
                <img src={Facebook} alt='' />
                <img src={Twitter} alt='' />
                <img src={Instagram} alt='' />
                <img src={Youtube} alt='' />
                <img src={Email} alt='' />
            </div>
            <p>CONTACT US</p>
            <hr />
            <p>Copyright © 2021.</p>
            <p>PT Mitsubishi Motors Krama Yudha Sales Indonesia</p>
        </div>
    )
}

export default Footer