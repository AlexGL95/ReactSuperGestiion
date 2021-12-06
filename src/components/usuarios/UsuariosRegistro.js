// dependences
import { useNavigate } from 'react-router-dom';


export const UsuariosRegistro = () => {

    
    const navigate = useNavigate();

    const redirect = () =>{
        console.log('Redireccion');
        navigate('/Usuarios');
        return;
    }
    return(
        <>
            <h1>UsuariosRegistro</h1>
            <button
                className = 'btn btn-secondary'
                onClick = { redirect }
            >
                Regresar
            </button>
        </>
    );
}
