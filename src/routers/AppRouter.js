// Router imports
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { DepartamentosListado } from "../components/departamentos/DepartamentosListado";
import { DepartamentosRegistro } from "../components/departamentos/Departamentosregistro";
import { Login } from "../components/login/Login";
import { Navbar } from "../components/navbar/Navbar";
import { UsuariosListado } from "../components/usuarios/UsuariosListado";
import { UsuariosRegistro } from "../components/usuarios/UsuariosRegistro";

export const AppRouter = () => {

    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Usuarios" element={<UsuariosListado />} />
                <Route path="/Usuarios_Create" element={<UsuariosRegistro />} />
                <Route path="/Departamentos" element={<DepartamentosListado />} />
                <Route path="/Departamentos_Create" element={<DepartamentosRegistro />} />
                <Route path="/*" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
