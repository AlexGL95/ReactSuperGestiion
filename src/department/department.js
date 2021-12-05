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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getDepartamentos = async (db) =>  {
    const departamentos_coleccion = collection(db, 'departamentos');
    const respuestaFirebase = await getDocs(departamentos_coleccion);
    const departamentos_lista = respuestaFirebase.docs.map(departamento =>  {
        const {
            nombre, descripcion,
        } = departamento.data();
        return {
            nombre, descripcion,
            id: departamento.id
        }
    });
    return departamentos_lista;
  }
  
  export async function departamentos_todos () {
    return await getDepartamentos(db);
  };
