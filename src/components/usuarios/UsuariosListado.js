import { useNavigate } from 'react-router-dom';
import { usuarios_todos } from '../../scripts/users/users';
import { useEffect, useState } from 'react';
export  const UsuariosListado = () => {
    
    const [users, setUser] = useState([]);
    const [reloadUsers, setReloadUsers] = useState(false)
  
    useEffect(() => {
        usuarios_todos().then(arreglo => {
          setUser(arreglo);
        })
        .catch(error => {
          console.log('Error: ',error);
        });

      setReloadUsers(false)
    }, [reloadUsers]);

    const navigate = useNavigate();
   
    const addUser = () =>{
        navigate('/Usuarios_Create');
        return;
    }
    const editUser = (key) =>{
        console.log(key);
        //navigate('/Usuarios_Create');
        return;
    }
    return(
        <>
            <div className='row mt-3'>
                <div className='col-12 text-center'>
                    <h1>Listado de usuarios</h1>
                </div>

                <div className = 'col-12 text-center text-sm-start'>
                    <button
                        className = 'btn btn-success btn-block'
                        onClick = { addUser }
                        >
                    Nuevo usuario
                    </button>
                </div>
                <table class="table table-sm table-striped table-responsive table-hover mt-3 table-bordered" id='tablaUsuarios'>
                    <thead class="thead-inverse|thead-default">
                        <tr>
                            <th scope="col" className='bg-dark text-light font-weight-bold text-center'>Nombre</th>
                            <th scope="col" className='bg-dark text-light font-weight-bold text-center'>Departamento</th>
                            <th scope="col" className='bg-dark text-light font-weight-bold text-center'>Correo</th>
                            <th scope="col" className='bg-dark text-light font-weight-bold text-center'>Días Laborales</th>
                            <th scope="col" className='bg-dark text-light font-weight-bold text-center'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            return (
                                <tr key={user.id} >
                                <td className='text-center'>{user.nombre}</td>
                                <td className='text-center'>{user.departamento}</td>
                                <td className='text-center'>{user.email}</td>
                                <td className='text-center'>{user.dias}</td>
                                <td className='text-center'>
                                    <button 
                                        className='btn btn-warning mx-2'
                                        onClick = { editUser }
                                    >Editar</button>
                                    <button className='btn btn-danger mx-2'>Eliminar</button>
                                </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>   
        </>
    );
}
