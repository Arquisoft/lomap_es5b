import { useRef } from 'react';
import { useMap } from './useMap';
import './Map.css';

export const MapView = () => {

    const mapRef = useRef<HTMLDivElement>(null);
    useMap(mapRef)

    return (
        <div ref={mapRef} className='map' /> 

    )
}