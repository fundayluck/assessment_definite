import React, { useEffect, useState } from 'react'
import { ReactComponent as Pointermap } from '../assets/pointermap.svg'
import axios from 'axios'
import Modal from './Modal'

const SearchDealer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [geo, setGeo] = useState(false)
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [province, setProvince] = useState('')
    const [getDataProvinces, setGetDataProvinces] = useState([])
    const [getDealer, setDealer] = useState([])
    const provinces = getDataProvinces;
    const dealer = getDealer
    console.log()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
    }, [])


    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get('https://mitsubishi-50.sudahdistaging.in/api/frontend/get-provinces')
            setGetDataProvinces(res.data)
        }
        const response = async () => {
            const res = await axios.get(`https://mitsubishi-50.sudahdistaging.in/api/frontend/search-dealers?page=1&limit=9&keyword=${province}`)
            setDealer(res.data.data)

        }
        setProvince()
        fetch()
        response()
    }, [latitude, longitude, province])

    return (
        <>
            <div className='container-search-dealer'>
                <div className='search'>
                    <p>Discover the nearest dealership in your area</p>
                    <select
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                    >
                        <option value={geo} onChange={() => setGeo(true)}>Pilih Lokasi Terdekat</option>
                        {provinces.map((item, i) => <option value={item.name} key={i}>{item.name}</option>)}
                    </select>
                </div>
                <div className='container-card'>
                    {dealer.map ? dealer.map((item, index) =>
                        <div className='card' key={index} onClick={() => setIsOpen(true)}>
                            <Pointermap />
                            <div className='card-item'>
                                <h3>{item.title}</h3>
                                <p>{item.address}</p>
                                <div>
                                    Sales • Service • Sparepart
                                </div>
                            </div>
                        </div>

                    ) : (
                        <h1>tidak ada hasil</h1>
                    )
                    }
                    <Modal onClose={() => setIsOpen(false)} show={isOpen} />
                </div>
                <div className='btn'>
                    <button className='btn-dealer'>
                        LOAD MORE
                    </button>
                </div>
            </div>

        </>
    )
}

export default SearchDealer