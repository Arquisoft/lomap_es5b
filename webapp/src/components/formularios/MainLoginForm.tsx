import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
//AQUI CAMBIAREMOS ENTRE VISTAS QUE TENGAN QUE VER CON INICIOS DE SESION






function MainLoginForm():JSX.Element{
    //esta logeado el usuario?
    const [currentForm,setCurrentForm]= useState("signup");

    //Funcion para cambiar entre formularios
    const toggleForm = (formName:string)=>{
        setCurrentForm(formName);
    };
    

    return(
        <>
        { currentForm == "signup" ? 
            <Signup onFormSwitch={toggleForm}></Signup> : 
            <Login onFormSwitch={toggleForm}></Login>
        }
        </>
    );
}

export default MainLoginForm;