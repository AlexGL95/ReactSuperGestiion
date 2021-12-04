import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { user_auth } from "./auth/auth";

// importaciones Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./credentials/db";
import { getFirestore, collection, getDocs,doc } from 'firebase/firestore/lite';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const getDepartamentos = async (db) =>  {
  const departamentos_coleccion = collection(db, 'departamentos');
  const dep = doc(db,'departamento','Carnes Frias');
  console.log(dep.type);
  const respuestaFirebase = await getDocs(departamentos_coleccion);
  console.log(respuestaFirebase.docs);
  const departamentos_lista = respuestaFirebase.docs.map(departamento => departamento.data());
  return departamentos_lista;
}

getDepartamentos(db).then((departamentos)=>{
  for (const departamento of departamentos) {
    console.log(departamento);
  }
});

//user_auth('departamentos').then(()=>{});
