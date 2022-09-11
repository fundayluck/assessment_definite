import React from 'react'
import Images from '../assets/Images.svg'

const Brand = () => {
    return (
        <>
            <div className='brand'>
                <img src={Images} alt='' />
            </div>
            <div className='sub-brand'>
                <h1 className='sub-brand-item-1'>FIND DEALER</h1>
                <p className='sub-brand-item-2'>Cari dan kunjungi dealer resmi Mitsubishi terdekat di kota Anda untuk mendapatkan pelayanan terbaik terkait dengan kendaraan dari Mitsubishi Motors Indonesia.</p>
            </div>
        </>
    )
}

export default Brand