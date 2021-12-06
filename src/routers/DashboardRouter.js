import { Routes, Route, } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { UsuariosListado } from "../components/usuarios/UsuariosListado";
import { UsuariosRegistro } from "../components/usuarios/UsuariosRegistro";
import { DepartamentosListado } from "../components/departamentos/DepartamentosListado";
import { DepartamentosRegistro } from "../components/departamentos/Departamentosregistro";

export const DashBoardRoutes = () =>{
    return(
        <>
         <Navbar />
         <Routes>
            <Route path="Usuarios" element={<UsuariosListado />} />
            <Route path="Usuarios_Create" element={<UsuariosRegistro />} />
            <Route path="Departamentos" element={<DepartamentosListado />} />
            <Route path="Departamentos_Create" element={<DepartamentosRegistro />} />
         </Routes>
        </>
    );
}