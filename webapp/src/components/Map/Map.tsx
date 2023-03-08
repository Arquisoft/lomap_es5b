import React, {useEffect, useRef, useState} from 'react';

interface IMap {
    mapType: google.maps.MapTypeId,
    mapTypeControl?: boolean;
}

type GoogleLatLng =  google.maps.LatLng;
type GoogleMap = google.maps.Map;


const Map: React.FC<IMap> = ({mapType, mapTypeControl = false}) => {

    const ref = useRef<HTMLDivElement>(null);
    //cuando inicializamos el mapa tenemos que asegurarnos que asegurarnos que ya no está inicializado de antes
    const [map, setMap] = useState<GoogleMap>();

    const startMap = (): void => {
        //chequea si el hook del map es null o no definido entonces llamará a otra funcion para inicicializar el mapa
        if(!map) {
            defaultMapStart();
        }
    };
    useEffect(startMap, [map]);

    //Establecemos aquí las coordenadas que son las principales dpara el mapa (focus en la eii)
    const defaultMapStart = ():void => {
        const defaultAddress = new google.maps.LatLng(43.3548049, -5.8512892);
        initMap(8, defaultAddress);
    };

    const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
        if(ref.current) {
            //es de tipo google map
            setMap(
                new google.maps.Map(ref.current, {
                    zoom: zoomLevel,
                    center: address,
                    mapTypeControl: mapTypeControl,
                    streetViewControl:false,
                    zoomControl : true,
                    mapTypeId: mapType
                })
            );
        }
    }

    

    return (
        <div className = "map-container"> 
            <div ref= {ref} className = "map-container__map"> </div>
        </div>
    );
   
}

export default Map;