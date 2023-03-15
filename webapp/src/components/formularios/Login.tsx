import { Button, TextField } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { ReactDOM } from 'react';
import './Login.css';
import { Lock } from '@material-ui/icons';
import { AccountCircle } from '@mui/icons-material';
//importar css
import {loginAndFetch} from '../../utils/LoginUtils';


function Login(): JSX.Element {
    const [isLogged , setLogged] = useState(false);
    const [webId, setWebId] = useState("");

    //guardamos el webId del pod
    const handleWebId =(value : ChangeEvent<HTMLInputElement>)=>{
        setWebId(value.target.value);
    };

    const handlelogin = (e:React.FormEvent) => {
        //Con esta linea evitamos que el navegador se refresque para que lleve a cabo la accion correspondiente
        e.preventDefault();
        
        loginAndFetch(webId);
        setLogged(true);
    };

    return (
        
        <form className='login-form' name='login-form' onSubmit={handlelogin}>
            {/* añadir el logo aqui <image name='login-logo' href='' />*/}
            <h1>Escoge tu POD</h1>
    {/*
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
            */}
            <div className='inputText'>
                <TextField required 
                    name="webId"
                    label='Introduce nombre del pod'
                    onChange={handleWebId}
                />
            </div>
            <div className='buttons'>
                <Button
                    type='submit'
                    variant='contained'
                >Iniciar sesion</Button>
            </div>
            {/*Implementar las acciones de los botones
            <div className='buttons'>
            <Button name='signup-button' className='signup-button' type="submit">Signup</Button>
            <Button name='login-button' className='login-button' type="submit">Login</Button>
            </div>
            */}
        </form>

    );
}


export default Login;