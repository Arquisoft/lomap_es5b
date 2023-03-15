import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import EmailForm from './components/EmailForm';
import Welcome from './components/Welcome';
import UserList from './components/UserList';
import  {getUsers} from './api/api';
import {User} from './shared/shareddtypes';
import './App.css';
import Login from './components/Login';
import Menu from './components/nav/Menu';
import { MapView } from './components/Map/Map';

const App = () => {
  return (
      
      <Container maxWidth="sm">
         <div>
        <MapView/>
        </div>
      </Container>
    
  );
}
export default App
