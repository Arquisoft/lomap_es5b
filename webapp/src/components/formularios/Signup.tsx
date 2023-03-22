import React, { useState,useEffect } from 'react';
import { ReactDOM } from 'react';
import { Button, TextField} from '@mui/material';
import { Lock } from '@material-ui/icons';
import { AccountCircle } from '@mui/icons-material';
import '../../stylesheets/Signup.css';
import {AuthUser} from '../../shared/shareddtypes';


type SignupinProps = {
    onFormSwitch:(formName:string)=>void;
    user:AuthUser;
    onUserChange:(newUser:AuthUser)=>void;
};


function Signup(props:SignupinProps): JSX.Element{
    //const [user,setUser] = useState<AuthUser>({email:"emptyMail",name:"emptyName",password:"emptyPasswd"});
   

    const handlesignup = () =>{
        //llamada a crear usuario si este no esta ya creado
        //1. obtener datos de los campos y crear un Json con ellos

        //2. añadir los datos al pod con saveFileInContainer
    };

    //cada vez que cambie onuserchange se actualiza el valor del usuario
    const handleUserChange = () =>{
        const userUpdated = {
            ...props.user//esta linea copia el objeto usuario
            //agregar los datos correspondientes del formulario (obtenerlo de los eventos, eliminar linea de arriba)
        };
        props.onUserChange(userUpdated);
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
            <Button name='signup-button' className='signup-button' onSubmit={handlesignup} type="submit">Registrate</Button>
            <Button name='login-button' className='login-button'   type="submit" onClick={()=>props.onFormSwitch("login")}>¿Tienes una cuenta?Incicia sesion</Button> 
        </form>
       
    );
};


export default Signup;