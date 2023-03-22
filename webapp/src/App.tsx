import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import AboutUs from "./components/aboutUs/AboutUs";
import Login from "./components/formularios/Login";
import Home from "./components/home/Home";
import { MapView } from "./components/Map/Map";
import Profile from "./components/profile/Profile";
import MenuNav from "./components/nav/MenuNav";


const App = () => {
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
                  <Route path="/Login" element={<Login/>} />
                  <Route path="/Aboutus" element={<AboutUs/>}/>

                </Routes>
                </div>
        </Router></div>
    </main>
    </>   
    /* <>
     <MapView></MapView> 
    </>  */  
    
     /* <>
     <Login></Login> 
    </>  */

/*     <>
    <AboutUs></AboutUs>
    </> */

  );
};


export default App;
