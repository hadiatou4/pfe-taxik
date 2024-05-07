'use client'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';

function GoogleMapDriver() {
    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCenter({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.error('Error getting current position:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    const [map, setMap] = useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [center])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    ) : <></>
}

export default GoogleMapDriver;
