import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

export default function AlgoMap({
    key 
}) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: key, // Needs to Be Set to Private
    });
  if (!isLoaded) return <div>Loading...</div>
  return <Map />
}

function Map(){
    const center = useMemo(() => ({lat: 20.636746173625713, lng: -105.23080892340184}), []);

    return <GoogleMap options = {{zoomControl: false, mapTypeControl: false, streetViewControl: false, fullscreenControl: false}} zoom={18} center={{lat: 20.636746173625713, lng: -105.23080892340184}} 
    mapContainerClassName = "map-container"><Marker position={{center}}/></GoogleMap>;

}