import { Button, TextField } from '@mui/material';
import React from 'react';
import { ReactDOM } from 'react';
//importar css


function Login():JSX.Element{
    return(
        <>
            <form className='login-form'>
                <TextField required
                    name="username"
                    label='Name'
                />
                <TextField required
                    name="password"
                    label='Password'
                    type={'password'}
                />
                <Button type="submit">Login</Button>
            </form>
        </>
    );
}


export default Login;