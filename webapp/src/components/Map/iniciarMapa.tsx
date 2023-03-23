import mapboxgl ,{Map,Popup} from 'mapbox-gl';

export const initMap = (container: HTMLDivElement) => {

    const mapa = new Map({
        container,
        style: 'mapbox://styles/mapbox/satellite-v9',
        pitchWithRotate: false,
        zoom: 16,
        accessToken: "pk.eyJ1IjoiaWlteGlubiIsImEiOiJjbGYwdmV0eTQwMmN0M3JuemZuejdjYmhxIn0.rOU1O4rhty03r-D4fJeHzg",
        doubleClickZoom: false
        
    });


    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
      
        mapa.setCenter([longitude, latitude]);
      
        var marker = new mapboxgl.Marker( {
            color: '#63df29', 
            scale: 1.5,
            draggable: false
        }).setLngLat([longitude, latitude]).setPopup(new Popup({ closeButton: false, anchor: 'left', })
        .setHTML(`<div class="popup">Tu posición inicial: <br/>[${longitude},  ${latitude}]</div>`)).addTo(mapa);

      });

        mapa.on('dblclick', function (evt) {
        new mapboxgl.Marker().setLngLat([evt.lngLat.lng,evt.lngLat.lat]).setPopup(new Popup({ closeButton: false, anchor: 'left', })
        .setHTML(`<div class="popup">Chincheta añadida aquí: <br/>[${evt.lngLat.lat}, ${evt.lngLat.lng}]</div>`)).addTo(mapa);
      });


      
    return mapa;
}