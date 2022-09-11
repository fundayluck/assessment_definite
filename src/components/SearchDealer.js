import React from 'react'
import { ReactComponent as Pointermap } from '../assets/pointermap.svg'

const Data = [
    {
        nama: 'Srikandi Mampang',
        alamat: 'Jl. Mampang Prapatan No. 21-23, Jakarta Selatan',
    },
    {
        nama: 'Srikandi Mampang',
        alamat: 'Jl. Mampang Prapatan No. 21-23, Jakarta Selatan',
    },
    {
        nama: 'Srikandi Mampang',
        alamat: 'Jl. Mampang Prapatan No. 21-23, Jakarta Selatan',
    },
    {
        nama: 'Srikandi Mampang',
        alamat: 'Jl. Mampang Prapatan No. 21-23, Jakarta Selatan',
    },
    {
        nama: 'Srikandi Mampang',
        alamat: 'Jl. Mampang Prapatan No. 21-23, Jakarta Selatan',
    },
    {
        nama: 'Srikandi Mampang',
        alamat: 'Jl. Mampang Prapatan No. 21-23, Jakarta Selatan',
    },
    {
        nama: 'Srikandi Mampang',
        alamat: 'Jl. Mampang Prapatan No. 21-23, Jakarta Selatan',
    },
    {
        nama: 'Srikandi Mampang',
        alamat: 'Jl. Mampang Prapatan No. 21-23, Jakarta Selatan',
    },
    {
        nama: 'Srikandi Mampang',
        alamat: 'Jl. Mampang Prapatan No. 21-23, Jakarta Selatan',
    },
]
const SearchDealer = () => {


    return (
        <div className='container-search-dealer'>
            <div className='search'>
                <p>Discover the nearest dealership in your area</p>
                <input type='text' />
            </div>
            <div className='container-card'>
                {Data.map((item, index) =>
                    <div className='card' key={index}>
                        <Pointermap />
                        <div className='card-item'>
                            <h3>{item.nama}</h3>
                            <p>{item.alamat}</p>
                            <div>
                                Sales • Service • Sparepart
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='btn'>
                <button className='btn-dealer'>
                    LOAD MORE
                </button>
            </div>
        </div>
    )
}

export default SearchDealer