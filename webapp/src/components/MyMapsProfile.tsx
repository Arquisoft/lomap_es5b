import React, { useState } from 'react';
import '../styles/MyMapsProfile.css';


interface MyMapsProfile {
    name: string;    
  }

  const MyMapsProfile: React.FC<MyMapsProfile> = ({   
    name
    
    
  }) => {
  
    return (
      
      <div className='mymap'>        
        <button type="button" value="Borrar"> 
            <img src="eliminar.png"/>
        </button>
        <p className='mapName'>{name}</p>
        <button type="button" value="Comentarios"> 
            <img src="coments.png"/>
        </button> 
      </div>
    );
  };

  export default MyMapsProfile;