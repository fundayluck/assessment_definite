import React, { useEffect, useState } from 'react'
import { ReactComponent as Pointermap } from '../assets/pointermap.svg'
import axios from 'axios'

const SearchDealer = () => {
    const [getDataProvinces, setGetDataProvinces] = useState([])
    const [getDealer, setDealer] = useState([])
    const provinces = getDataProvinces;
    const dealer = getDealer



    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get('https://mitsubishi-50.sudahdistaging.in/api/frontend/get-provinces')
            setGetDataProvinces(res.data)
        }
        const response = async () => {
            const res = await axios.get('https://mitsubishi-50.sudahdistaging.in/api/frontend/search-dealers?page=1&limit=9')
            setDealer(res.data.data)
        }
        fetch()
        response()
    }, [])


    return (
        <div className='container-search-dealer'>
            <div className='search'>
                <p>Discover the nearest dealership in your area</p>
                <select>
                    <option>Pilih Lokasi Terdekat</option>
                    {provinces.map((item, i) => <option value={item.name} key={i}>{item.name}</option>)}
                </select>
            </div>
            <div className='container-card'>
                {dealer.map((item, index) =>
                    <div className='card' key={index}>
                        <Pointermap />
                        <div className='card-item'>
                            <h3>{item.title}</h3>
                            <p>{item.address}</p>
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