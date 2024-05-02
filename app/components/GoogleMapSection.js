import React, { useEffect, useContext, useState } from 'react';
import { GoogleMap, Marker, OverlayView, useJsApiLoader } from '@react-google-maps/api';
import { SourceContext } from '../context/SourceContext';
import { DestinationContext } from '../context/DestinationContext';

function GoogleMapSection() {
  const { source } = useContext(SourceContext);
  const { destination } = useContext(DestinationContext);

  const containerStyle = {
    width: '100%',
    height: window.innerWidth * 0.45
  };

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });

  useEffect(() => {
    if (map && source && source.lat && source.lng) {
      map.panTo({
        lat: source.lat,
        lng: source.lng
      });
      setCenter({ lat: source.lat, lng: source.lng });
    }
  }, [map, source]);

  useEffect(() => {
    if (map && destination && destination.lat && destination.lng) {
      setCenter({ lat: destination.lat, lng: destination.lng });
    }
  }, [map, destination]);

  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapId: 'fbea991f93271444' }}
    >
      {source && source.lat && source.lng && (
        <Marker
          position={{ lat: source.lat, lng: source.lng }}
          icon={{
            url: '/source.jpeg',
            scaledSize: { width: 20, height: 20 }
          }}
        >
          <OverlayView position={{ lat: source.lat, lng: source.lng }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
          <div className='p-2 bg-white inline-block'>
            <p className='text-[18px] text-black font-bold'>{source.label}</p>
          </div>
        </OverlayView>
        </Marker>
        
      )}
      {destination && destination.lat && destination.lng && (
        <Marker
          position={{ lat: destination.lat, lng: destination.lng }}
          icon={{
            url: '/source.jpeg',
            scaledSize: { width: 20, height: 20 }
          }}
        > 
        <OverlayView position={{ lat: destination.lat, lng: destination.lng }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
          <div className='p-2 bg-white inline-block'>
            <p className='text-[18px] text-black font-bold'>{destination.label}</p>
          </div>
        </OverlayView>
        </Marker>
      )}
    </GoogleMap>
  );
}

export default GoogleMapSection;
