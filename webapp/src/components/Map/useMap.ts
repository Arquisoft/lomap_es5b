import { useEffect, useRef } from 'react';
import { Map } from 'mapbox-gl';
import { initMap } from './initMap';
import { generateNewMarker } from './generateNewMarker';

export const useMap = (container: React.RefObject<HTMLDivElement>) => {

    const mapInitRef = useRef<Map | null>(null);

    useEffect(() => {
        if (container.current) {

            mapInitRef.current = initMap(
                container.current,
                [-5.8512892, 43.3548049]
            );

        }
    }, []);


    useEffect(() => {
        mapInitRef.current && mapInitRef.current.on('dblclick', ({ lngLat }) => generateNewMarker({ map: mapInitRef.current!, ...lngLat }))

        return () => { mapInitRef.current?.off('dblclick', generateNewMarker) }
    }, [])

    
    useEffect(() => {
        mapInitRef.current && mapInitRef.current.on('load', () => generateNewMarker({ map: mapInitRef.current!, ...mapInitRef.current!.getCenter() }))

        return () => { mapInitRef.current?.off('load', generateNewMarker) }
    }, [])
}