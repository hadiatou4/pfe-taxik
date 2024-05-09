"use client"
import { GoogleMap, Marker, OverlayView, useJsApiLoader } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';

function GoogleMapDriver() {
    const isDriverOnline = sessionStorage.getItem("enligne") === "true";
    const [position, setPosition] = useState({});
    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    });

    useEffect(() => {
        if (isDriverOnline) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setCenter({ lat: latitude, lng: longitude });
                        setPosition({ lat: latitude, lng: longitude });
                    },
                    (error) => {
                        console.error('Error getting current position:', error);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 5000, 
                        maximumAge: 0
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        }
    }, [isDriverOnline]);
     

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    }, [center]);

    const onUnmount = React.useCallback(function callback(map) {
        // Clean up after unmount
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{ mapId: 'fbea991f93271444' }}
        >
            {isDriverOnline && (
                <Marker
                    position={{ lat: position.lat, lng: position.lng }}
                    icon={{
                        url: '/source.jpeg',
                        scaledSize: { width: 20, height: 20 }
                    }}
                >
                    <OverlayView position={{ lat: position.lat, lng: position.lng }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                        <div className='p-2 bg-white inline-block'>
                            <p className='text-[18px] text-black font-bold'>Driver</p>
                        </div>
                    </OverlayView>
                </Marker>
            )}
        </GoogleMap>
    ) : <></>;
}

export default GoogleMapDriver;
