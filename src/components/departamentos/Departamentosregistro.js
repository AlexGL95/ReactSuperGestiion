// dependences
import { useNavigate } from 'react-router-dom';

export const DepartamentosRegistro = () => {
    const navigate = useNavigate();

    const redirect = () =>{
        console.log('Redireccion');
        navigate('/Departamentos');
        return;
    }
    return(
        <>
            <h1>DepartamentosRegistro</h1>
            <button
                className = 'btn btn-secondary'
                onClick = { redirect }
            >
                Regresar
            </button>
        </>
    );
}
