'use client'
import React , { useState }from 'react'
import Header from '../components/Header'
import FooterP from '../components/FooterP'
import { GoogleMap, Marker, OverlayView, useJsApiLoader } from '@react-google-maps/api';
import { LoadScript } from '@react-google-maps/api'; 
function Driver() {
  const [driverInfo, setDriverInfo] = useState({
    name: 'John Doe',
    vehicle: 'Toyota Prius',
    plateNumber: 'ABC123',
    rating: 4.5,
  });

  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">Espace Chauffeur</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section de la carte du chauffeur */}
          <div className="col-span-2">
            <LoadScript
              googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            >
              {/* <DriverMap /> */}
            </LoadScript>
          </div>
          {/* Section des informations du chauffeur */}
          <div>
            {/* <DriverInfo driverInfo={driverInfo} /> */}
          </div>
        </div>
      </div>
      <FooterP/>
    </>
  );
}

export default Driver;
