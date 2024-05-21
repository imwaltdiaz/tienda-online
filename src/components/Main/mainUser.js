import { Route, BrowserRouter, Routes } from "react-router-dom";
import Principal from "../pages/paginaPrincipal";
import Busqueda from "../pages/busquedaProducto";
import Details from "../pages/detallesProducto";

function UserMain(){
    return(
        <BrowserRouter>
                <Routes>
                <Route index element={<Principal/>}/>
                <Route path="/busqueda" element={<Busqueda/>}/>
                <Route path="/detalles" element={<Details/>}/>
                </Routes> 
        </BrowserRouter>
    );
}
export default UserMain;