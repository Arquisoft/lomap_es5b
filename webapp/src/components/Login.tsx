import { Button, Icon, TextField } from '@mui/material';
import React from 'react';
import { ReactDOM } from 'react';
import './Login.css';
import { Lock } from '@material-ui/icons';
import { AccountCircle } from '@mui/icons-material';
//importar css


function Login(): JSX.Element {
    return (
        
        <form className='login-form' name='login-form'>
            {/* añadir el logo aqui */}
            <image name='login-logo' href='' />
            <h1>Inicia sesion</h1>
            <div className='inputText'>
            <AccountCircle></AccountCircle>
            <TextField required
                name="username"
                label='User'
            />
            
            </div>
            <div className='inputText'>
            <Lock></Lock>
            <TextField required
                name="password"
                label='Password'
                type={'password'}
            />
            </div>
            {/*Implementar las acciones de los botones*/}
            <Button name='login-button' className='login-button' type="submit">Login</Button>
            <Button name='signup-button' className='signup-button' type="submit">Signup</Button>
        </form>

    );
}


export default Login;