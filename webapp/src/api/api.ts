import {User} from '../shared/shareddtypes';

/**
 * Añade un usuario
 * @param user 
 * @returns 
 */
export async function addUser(user:User):Promise<boolean>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'name':user.name, 'email':user.email})
      });
    if (response.status===200)
      return true;
    else
      return false;
}

/**
 * Devuelve los ususarios del sistema
 * 
 * @returns devuelve una respuesta en formato Json
 */
export async function getUsers():Promise<User[]>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/list');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
}

/**
 * TODO: Obtiene los mapas del usuario 
 */
export async function getUserMaps() {
}

/**
 * TODO: Obtiene todos los puntos del usuario 
 */
export async function getUserPoints() {
}