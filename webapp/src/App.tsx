import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './components/Map/Map';
import { loadMapApi } from './components/utils/GoogleMapsUtils';

function App(): JSX.Element {
  
  //Esto nos ayuda a saber si el mapa fue cargado o no
  const [scriptLoaded, setScriptLoaded] = useState (false);

  useEffect(() => {
    //Tenemos que asegurarnos que fue añadido al dominio
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener('load', function() {
      setScriptLoaded(true);
    })
  }, []);


  return (
      <>
      <div> El famoso mapa tio</div>
      <div className = "Map">
        {scriptLoaded && (
          <Map mapType= {google.maps.MapTypeId.ROADMAP} mapTypeControl = {true} />
        )}
      </div>
      </>
  );
}

export default App;
