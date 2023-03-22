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
import PODChooser from './components/formularios/PODChooser';
import Signup from './components/formularios/Signup';
import Login from './components/formularios/Login';
import MainLoginForm from './components/formularios/MainLoginForm';

function App(): JSX.Element {

  const [users,setUsers] = useState<User[]>([]);
  const [userLoged,setUserLogged] = useState(false);
  
  const refreshUserList = async () => {
    setUsers(await getUsers());
  }

  useEffect(()=>{
    //refreshUserList();
  },[]);

  const isLogged =(isUserLoged:boolean)=>{
      setUserLogged(isUserLoged);
      console.log("Componente padre "+userLoged );
      return userLoged;
    }



  return (
    
      <Container maxWidth="sm">
        {/* <Welcome message="ASW students"/>
        <Box component="div" sx={{ py: 2}}>This is a basic example of a React application using Typescript. You can add your email to the list filling the form below.</Box>
        <EmailForm OnUserListChange={refreshUserList}/>        
        <UserList users={users}/>
        <Link href="https://github.com/arquisoft/lomap_0">Source code</Link> */}
      {/**<Login></Login> */}
      {/**<PODChooser updateIsUserLogged={isLogged}></PODChooser> */}
      <MainLoginForm></MainLoginForm>
      </Container>
    
  );
}

export default App;
