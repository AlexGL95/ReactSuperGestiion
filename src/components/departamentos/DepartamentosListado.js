// dependences
import { useNavigate } from 'react-router-dom';

export const DepartamentosListado = () => {
    const navigate = useNavigate();

    const redirect = () =>{
        console.log('Redireccion');
        navigate('/Departamentos_Create');
        return;
    }
    return(
        <>
            <h1>DepartamentosListado</h1>
            <button
                className = 'btn btn-secondary'
                onClick = { redirect }
            >
                Crear Departamento
            </button>
        </>
    );
}
