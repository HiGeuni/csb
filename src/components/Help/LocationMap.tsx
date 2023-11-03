import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const center = {
  lat: 35.1877147,
  lng: 126.8975795,
};

const LocationMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GATSBY_GOOGLE_API_KEY || '',
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%' }}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <></>
    </GoogleMap>
  ) : (
    <div>Loading</div>
  );
};

export default LocationMap;
