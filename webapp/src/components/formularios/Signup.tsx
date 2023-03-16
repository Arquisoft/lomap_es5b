import React, { ChangeEvent, useState } from 'react';
import { ReactDOM } from 'react';
import { Button, TextField} from '@mui/material';
import { Lock } from '@material-ui/icons';
import { AccountCircle } from '@mui/icons-material';
import './Login.css';

function Signup(): JSX.Element{


    
    const handlesignup = () =>{
        //llamada a crear usuario si este no esta ya creado
    };
     const retunToLoggin = () => {
        //volver a la vista de loggin si el usuario se ha equivocado
     };

    return (
        <form className='login-form' name='login-form'>
            <div className='inputText'>
            <AccountCircle></AccountCircle>
            <TextField required
                name="username"
                label='User'
            />
            <TextField required
                name="email"
                label='Email'
                type='email'
            />
            </div>
            <div className='inputText'>
            <Lock></Lock>
            <TextField required
                name="password"
                label='Password'
                type={'password'}
            />
            <Lock></Lock>
            <TextField required
                name="repeat-password"
                label='Repeat password'
                type={'password'}
            />
            </div>
            <div className='buttons'>
            <Button name='signup-button' className='signup-button' onSubmit={handlesignup} type="submit">Signup</Button> {/*Boton para añadir el usuario al pod */}
            <Button name='login-button' className='login-button'  onSubmit={retunToLoggin} type="submit">Login</Button> {/*Boton para ir a la vista de Login de usuario */}
            </div>
        </form>
    );
};


export default Signup;