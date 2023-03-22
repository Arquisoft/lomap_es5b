import React,  { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import PODChooser from './components/formularios/PODChooser';
import Signup from './components/formularios/Signup';
import Login from './components/formularios/Login';
import MainLoginForm from './components/formularios/MainLoginForm';
import AboutUs from "./components/aboutUs/AboutUs";
import Home from "./components/home/Home";
import { MapView } from "./components/Map/Map";
import Profile from "./components/profile/Profile";
import MenuNav from "./components/nav/MenuNav";


const App = () => {

  const [userLoged,setUserLogged] = useState(false);

  const isLogged =(isUserLoged:boolean)=>{
    setUserLogged(isUserLoged);
    console.log("Componente padre "+userLoged );
    return userLoged;
  };

  return ( 
      <>
    <main className='principal'><div className="mapeado">
        <Router>
            <div className="navegacion">
              <MenuNav />
            </div>
    <div className="rutas">
                <Routes>
                  <Route path={"/"} element={<Home/>} />
                  <Route path="/Mapa" element={<MapView/>} />
                  <Route path="/Login" element={<MainLoginForm/>} />
                  <Route path="/Aboutus" element={<AboutUs/>}/>

                </Routes>
                </div>
        </Router></div>
    </main>
    {/** <MapView></MapView>  */}
    {/**<PODChooser updateIsUserLogged={isLogged}></PODChooser>  <MainLoginForm></MainLoginForm> **/}
    {/** <Login></Login>  */}
    {/** <AboutUs></AboutUs>  */}
    </>
  );
};


export default App;
