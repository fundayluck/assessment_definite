import React from 'react'
import Banner from '../components/Banner'
import Brand from '../components/Brand'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SearchDealer from '../components/SearchDealer'

const FindDealer = () => {
    return (
        <>
            <Navbar />
            <Brand />
            <SearchDealer />
            <Banner />
            <Footer />
        </>
    )
}

export default FindDealer