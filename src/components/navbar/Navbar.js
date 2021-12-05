import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = ({username = 'Alex'}) => {

    const handleLogout = () => {
        console.log('Se desloguio');
    }

    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark text-right'>
            

            <div className='navbar-collapse'>
                <div className='navbar-nav'>
                    <img src = './src/logo.svg' alt= 'Logotipo'></img>
                </div>
                <div className='navbar-nav'>

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

            <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
                <ul className='navbar-nav ml-auto'>
                    <span className='nav-item nav-link text-info'>
                        { username }
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
