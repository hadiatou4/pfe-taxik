'use client'
import React ,{ useEffect,useContext, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { SourceContext } from '../context/SourceContext';
import { DestinationContext } from '../context/DestinationContext';

function GoogleMapSection() {
  const {source,setSource}=useContext(SourceContext);
    const{destination,setDestination}=useContext(DestinationContext);
  const containerStyle = {
    width: '100%',
    height: window.innerWidth*0.45
    
  };
  
  const [center,setCenter] =useState({
    lat: -3.745,
    lng: -38.523
  });
  useEffect(()=>{
    if(source?.length!=[]&&map){
       setCenter({
        lat:source.lat,
        lng:source.lng
       })
    }

  },[source])
  useEffect(()=>{
    if(destination?.length!=[]&&map){
       setCenter({
        lat:destination.lat,
        lng:destination.lng
       })
    }

  },[destination])
  /*
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
  })*/

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{mapId:'fbea991f93271444'}}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) 
}

export default GoogleMapSection;
