import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import {AuthUser} from '../../shared/shareddtypes';



function MainLoginForm():JSX.Element{
    
    //esta logeado el usuario?
    const [currentForm,setCurrentForm]= useState("signup");
    //datos del usuario
    const [user,setUser] = useState<AuthUser>({email:"emptyMail",name:"emptyName",password:"emptyPasswd"});
    //Funcion para cambiar entre formularios
    const toggleForm = (formName:string)=>{
        setCurrentForm(formName);
    };
    //cada vez que el usuario cambie por el formulario se actualiza
    const userchange = (user:AuthUser) => {
        setUser(user);
    };
    

    return(
        <>
        { currentForm == "signup" ? 
            <Signup onFormSwitch={toggleForm} user={user} onUserChange={userchange} /> : 
            <Login onFormSwitch={toggleForm}/>
        }
        </>
    );
}

export default MainLoginForm;