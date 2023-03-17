import { Map } from 'mapbox-gl';


export const initMap = (container: HTMLDivElement, coords: [number, number]) => {
    
    const map = new Map({
        container,
        style: 'mapbox://styles/mapbox/satellite-v9',
        pitchWithRotate: false,
        center: coords,
        zoom: 17,
        accessToken: "pk.eyJ1IjoiaWlteGlubiIsImEiOiJjbGYwdmV0eTQwMmN0M3JuemZuejdjYmhxIn0.rOU1O4rhty03r-D4fJeHzg",
        doubleClickZoom: false
    });
    return map
}