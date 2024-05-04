'use client'
import React, { useState } from 'react'
import Header from '../components/Header'
import FooterP from '../components/FooterP'
import SearchSection from '../components/SearchSection'
import { DestinationContext } from '../context/DestinationContext'
import { SourceContext } from '../context/SourceContext'
import GoogleMapSection from '../components/GoogleMapSection'
import { LoadScript } from '@react-google-maps/api'



function ProfileUser() {
  const [source,setSource]=useState([])
  const [destination,setDestination]=useState([])
  return (
    <>
    <Header />
    <SourceContext.Provider value={{ source, setSource }}>
        <DestinationContext.Provider value={{ destination, setDestination }}>
          <LoadScript libraries={['places']}
           googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
            <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='col-span-2 '>
                    <GoogleMapSection/>
                </div>
                <div>
                    <SearchSection />
                </div>
            </div>
            </LoadScript>
        </DestinationContext.Provider>
    </SourceContext.Provider>
    <FooterP />
</>
  )
}

export default ProfileUser
