import { useNavigate } from 'react-router-dom';

export const UsuariosListado = () => {

    const navigate = useNavigate();

    const redirect = () =>{
        console.log('Redireccion');
        navigate('/Usuarios_Create');
        return;
    }
    return(
        <>
            <h1>UsuariosListado</h1>
            <button
                className = 'btn btn-secondary'
                onClick = { redirect }
            >
                Nuevo usuario
            </button>
        </>
    );
}
