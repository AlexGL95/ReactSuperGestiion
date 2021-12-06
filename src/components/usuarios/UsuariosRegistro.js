// dependences
import { useNavigate, useParams } from 'react-router-dom';
import { usuarios_getId } from '../../scripts/users/users';
import { departamentos_todos } from '../../scripts/department/department';
import { useEffect, useState } from 'react';
import './usuarios.css'
import CheckBox from './checkbox';

export const UsuariosRegistro = () => {

    const params = useParams();
    console.log(params.id);
    const navigate = useNavigate();
    const [user, setUser] = useState(undefined);
    const [reloadUsers, setReloadUsers] = useState(false);
    const [departmentos, setDepartamento] = useState([]);
    const [reloadDepartamento, setReloadDepartamentos] = useState(false)
  
    useEffect(() => {
        departamentos_todos().then(arreglo => {
          setDepartamento(arreglo);
        })
        .catch(error => {
          console.log('Error: ',error);
        });

      setReloadDepartamentos(false)
    }, [reloadDepartamento]);

    
    useEffect(() => {
        usuarios_getId(params.id).then(arreglo => {
            setUser(arreglo);
        })
        .catch(error => {
            console.log('Error: ',error);
        });
        
        setReloadUsers(false)
    }, [reloadUsers]);

    const roles = ['Gestor','Empleado'];

    if (user) {
        console.log(user.id);
    }
    const guardarUsuario = () =>{
        console.log('Redireccion');
        const form = document.getElementById('form');
        if (!form.oninvalid) {
            navigate('/Usuarios');
        }
        return;
    }
  
    return(
        <div className= 'row justify-content-center img-background-usuarios'>
            <div className='col-12 col-sm-10 col-md-9 col-lg-7 text-center my-auto bg-light rounded'>


                <form id='form'>
                    <div className='row py-4 px-3 '>


                        <div className='col-12 col-md-6 col-lg-4 form-group my-1 my-md-3 text-start'>

                            <span className='label-input mr-auto'>Nombre</span>

                            <input
                                className='form-control'
                                type='email'
                                id='nombre'
                                name='nombre'
                                required
                            ></input>
                        </div>

                        <div className='col-12 col-md-6 col-lg-4 form-group my-1 my-md-3 text-start'>
                    
                            <span className='label-input'>Apellidos</span>
                
                            <input
                                className='form-control'
                                type='text'
                                id='Apellidos'
                                name='Apellidos'
                                required
                            ></input>
                        </div>

                        <div className='col-12 col-md-6 col-lg-4 form-group my-1 my-md-3 text-start'>

                            <span className='label-input'>Correo</span>

                            <input
                                className='form-control'
                                type='email'
                                id='mail'
                                name='mail'
                                required
                            ></input>
                        </div>

                        <div className='col-12 col-md-6 col-lg-4 form-group my-1 my-md-3 text-start'>
                
                            <span className='label-input'>Contraseña</span>
                
                            <input
                                className='form-control'
                                type='text'
                                id='pass'
                                name='pass'
                                required
                            ></input>
                        </div>
                        
                        <div className='col-12 col-md-6 col-lg-4 form-group my-1 my-md-3 text-start'>
                            <span className='label-input'>Rol</span>
                            <select 
                                className='form-control'
                                id='rol'
                                name='rol'
                                required
                                >
                                {roles.map((role, i)=>{
                                   return ( <option 
                                    key={i} 
                                    value={role}>
                                        {role}
                                    </option>);
                                })}
                            </select>
                        </div>

                        <div className='col-12 col-md-6 col-lg-4 form-group my-1 my-md-3 text-start'>
                            <span className='label-input'>Departamento</span>
                            <select 
                                className='form-control'
                                id='rol'
                                name='rol'
                                required
                                >
                                {departmentos.map((departamento, i)=>{
                                   return ( <option 
                                    key={departamento.id} 
                                    value={departamento.nombre}>
                                        {departamento.nombre}
                                    </option>);
                                })}
                            </select>
                        </div>
                        <div className='col-12 col-md-12 form-group my-1 my-md-3 text-start'>
                            <span className='label-input'>Dias Laborales</span>
                            <input
                                className='form-control'
                                type='text'
                                id='dias'
                                name='dias'
                                required
                            ></input>
                        </div>

                        <div className='col-12'>
                            <button
                                type='submit'
                                className = 'btn btn-submit'
                                onClick = { guardarUsuario }
                                >
                                Guardar

                            </button>
                        </div>


                    </div>
                </form>

            </div>
                
        </div>
    );
}
