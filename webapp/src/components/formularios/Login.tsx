import { AccountCircle,Lock } from '@mui/icons-material';
import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import './Login.css'


type LoginProps = {
    onFormSwitch:(formName:string)=>void;
};

function Login(props: LoginProps): JSX.Element{


    return(
        <form className='login-form' name='login-form'>
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
            <Button name='login-button' className='login-button'   type="submit">Inicia sesion</Button>  
            <Button name='signup-button' className='signup-button'  type="submit" onClick={()=>props.onFormSwitch("signup")}>Registrate</Button>  
        </form>
    );
};


export default Login;