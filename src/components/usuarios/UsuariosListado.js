import { useNavigate } from 'react-router-dom';
import { usuarios_todos } from "../../scripts/users/users";
import { RowUsuarios } from './RowUsuarios';
import ReactDOM from 'react-dom';
export  const UsuariosListado = () => {

    const navigate = useNavigate();
    let Usuarios = [];
    const table = document.getElementById('tablaUsuarios');
    usuarios_todos().then(arreglo => {
       Usuarios = arreglo;
       console.log('Todos los usuarios: ', Usuarios);
       ReactDOM.render(table);
      })
      .catch(error => {
        console.log('Error: ',error);
      });
    const redirect = () =>{
        console.log('Redireccion');
        navigate('/Usuarios_Create');
        return;
    }
    return(
        <>
        <div className='row mt-3'>
            <div className='col-12 text-center'>
                <h1>Listado de usuarios</h1>
            </div>

            <div className = 'col-12 text-sm-right'>
                <button
                    className = 'btn btn-success btn-block'
                    onClick = { redirect }
                    >
                   Nuevo usuario
                </button>
            </div>

            <table class="table table-sm table-striped table-responsive table-hover mt-3 table-bordered" id='tablaUsuarios'>
                <thead class="thead-inverse|thead-default">
                    <tr>
                        <th scope="col" className='bg-dark text-light font-weight-bold text-center'>Nombre</th>
                        <th scope="col" className='bg-dark text-light font-weight-bold text-center'>Departamento</th>
                        <th scope="col" className='bg-dark text-light font-weight-bold text-center'>Labora</th>
                        <th scope="col" className='bg-dark text-light font-weight-bold text-center'>Accion</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                        Usuarios.map( usuario => (
                            <RowUsuarios usuario/>
                        ))
                        }
                        <tr>
                            <td scope="row"></td>
                            <td scope="row"></td>
                            <td scope="row"></td>
                            <td scope="row"></td>
                        </tr>
                    </tbody>
            </table>
        
         </div>   
        </>
    );
}
