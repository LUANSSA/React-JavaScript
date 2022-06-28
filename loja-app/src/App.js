import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Navegacao from "./components/Navegacao/Navegacao"

function App(){
    return(
        <BrowserRouter>
            <Navegacao/>
            <AppRoutes/>
        </BrowserRouter>
    )
}

export default App;