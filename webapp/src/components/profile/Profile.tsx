import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import '../styles/Profile.css';
import MyMapsProfile from './MyMapsProfile';

interface ProfileData {
    username: string;
    name: string;
    lastName: string;
    profilePicture: string;
    
  }

  const Profile: React.FC<ProfileData> = ({
    username,
    name,
    lastName,
    profilePicture
    
  }) => {
  
    return (
      <div className='all'>
        <div className='info'>
            <div className='avatar'>
                <Avatar
                    alt="Example photo"
                    src= {profilePicture}
                    sx={{ width: 120, height: 120 }}
                />
            </div> 
            <div className='textInfo'>
                <h2>{name} {lastName}</h2>
                <p className='userName'>{`@${username}`}</p>
            </div> 
            <input type="button" value="Editar"></input>
        </div>  
        <div className='maps'>
            <h2>Mis Mapas</h2>
            <div className='mmpc1'>
                <MyMapsProfile name = "Playa + Helado :)" />     
            </div>
            <hr></hr>
            <div className='mmpc2'>
                <MyMapsProfile name = "Mejores museos de arte" />     
            </div>
            <hr></hr>
            <div className='mmpc3'>
                <MyMapsProfile name = "Aparcamientos baratos" />     
            </div>
        </div>     
      </div>
    );
  };

  export default Profile;