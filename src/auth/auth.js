// importaciones Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../credentials/db";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getUsuarios = async (db,departamento) =>  {
    const usuarios_coleccion = collection(db, departamento,'usuarios');
    const respuestaFirebase = await getDocs(usuarios_coleccion);
    const usuarios_lista = respuestaFirebase.docs.map(departamento => departamento.data());
    return usuarios_lista;
}

export async function user_auth(departamento){
    const usuarios = await getUsuarios(db,departamento);
    for (const usuario of usuarios) {
        console.log(usuario);
    }
}
