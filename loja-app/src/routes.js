import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";  
import Repositorios from "./pages/Repositorios";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/repositorios" element={<Repositorios/>}></Route>
        </Routes>    
    )
}

export default AppRoutes;