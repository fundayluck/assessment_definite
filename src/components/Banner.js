import React from 'react'
import Appstore from '../assets/appstore.svg'
import Googleplay from '../assets/googleplay.svg'


const Banner = () => {
    return (
        <div className='container-banner'>
            <div className='banner-content'>
                <h1>Live simple with MY Mitsubishi</h1>
                <p className='content-1'>Nikmati semua fasilitas berkendara Mitsubishi, dari book test drive hingga service berkala langsung dari tangan Anda dengan My Mitsubishi ID. </p>
                <p className='content-2'>Download aplikasinya sekarang di App Store dan Play Store.</p>
                <div className='label'>
                    <img src={Appstore} />
                    <img src={Googleplay} />
                </div>
            </div>
            <div className='banner-img'>
                <h1></h1>
            </div>
        </div>
    )
}

export default Banner