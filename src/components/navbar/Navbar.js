// dependences
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    const Usuario = localStorage.getItem('Usuario');
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/Login',{
            replace:true
        });
        console.log('Se desloguio');
    }

    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark text-right'>
            

            <div className='navbar-collapse'>

                <div className='navbar-nav bg-light rounded text-center'>
                    <div className="row">
                        <div className='col-12'>
                            <img className='p-1' width='120' src = 'assets/logo.svg' alt= 'Logotipo'></img>
                        </div>
                    </div>
                </div>

                <div className='navbar-nav text-center'>

                    <NavLink 
                        className={({isActive}) => 'nav-item nav-link ' + (isActive ? 'active':'') }
                        exact
                        to='/Usuarios'
                    >
                        Usuarios
                    </NavLink>

                    <NavLink 
                        activeClassName='active'
                        className={({isActive}) => 'nav-item nav-link ' + (isActive ? 'active':'') }
                        exact
                        to='/Departamentos'
                    >
                        Departamentos
                    </NavLink>
                </div>
            </div>

            <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-center justify-content-sm-end'>
                <ul className='navbar-nav ml-sm-auto text-center'>
                    <span className='nav-item nav-link text-info'>
                        { Usuario }
                    </span>
                    <button 
                        className='nav-item nav-link btn' 
                        onClick = { handleLogout }
                    >
                        Cerrar Sesion
                    </button>
                </ul>
            </div>
        </nav>
    )
}
