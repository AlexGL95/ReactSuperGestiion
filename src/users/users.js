// importaciones Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../credentials/db";
import { 
    getFirestore, 
    getDocs, 
    collection, 
    addDoc,
    setDoc,
    doc, 
} from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getUsuarios = async (db) =>  {
    const usuarios_coleccion = collection(db,'usuarios');
    const respuestaFirebase = await getDocs(usuarios_coleccion);
    const usuarios_lista = respuestaFirebase.docs.map(usuario =>
        {
            const {
                nombre, apellidos, departamento, dias,
                edad, genero, pass, role
            } = usuario.data();
            return {
                nombre, apellidos, departamento, dias,
                edad, genero, pass, role,
                id: usuario.id
            }
        });
    return usuarios_lista;
}

const usuarios_create = async (db,usuario) => {
    const docRef = await addDoc( collection(db, 'usuarios'), usuario);
    return docRef.id;
}

const usuarios_update = async (db, usuario, id) => {
    await setDoc( doc(db, 'usuarios', id), usuario);
    return true;
}

// funcion que regresa los usuarios que tienen como departamento el string recibido
export async function usuarios_departamento(departamento){
    const usuarios = await getUsuarios(db,departamento);
    const usuarios_array = [];
    for (const usuario of usuarios) {
        if(usuario.departamento === departamento){
            usuarios_array.push(usuario);
        }
    }
    return usuarios_array;
}

export async function usuarios_todos(departamento){
   return await getUsuarios(db,departamento);
}

export async function usuarios_crear(usuario){
    return await usuarios_create(db,usuario);
}

export async function usuarios_actualizar(usuario,id){
    return await usuarios_update(db,usuario,id);
}

