import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { user_auth } from "./auth/auth";
import { 
  usuarios_departamento, 
  usuarios_actualizar,
  usuarios_crear,
  usuarios_eliminar, 
  usuarios_todos 
} from "./users/users";
import { 
  departamentos_todos,
  departamentos_crear,
  departamentos_eliminar,
  departamentos_actualizar, 
} from "./department/department";

// importaciones Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./credentials/db";
import { getFirestore, collection, getDocs,doc } from 'firebase/firestore';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const id = "LkyxOzxTZrMzJO7qLcQj";
const idDep = '0qHE6jkbcwulAFFZP1RE';
const usuario = {
  apellidos: "Gonzalez Romero",
  departamento: "Carnes Frias",
  dias: "L,M,Mi,J,V,S",
  edad: 35,
  genero: "Masculino",
  nombre: "Pedro",
  pass: "12345",
  role: "Gestor",
};
const usuarioUpdate = {
  apellidos: "Hernandez",
  departamento: "Vinos",
  dias: "L,M,Mi",
  edad: 35,
  genero: "Masculino",
  nombre: "Luis",
  pass: "12345",
  role: "Gestor",
};

const departamento = {
  nombre: 'Eliminame profavor',
  descripcion: 'Kill me',
}


usuarios_departamento('Carnes Frias').then(arreglo => {
  console.log('Usuarios Por departamento: ',arreglo);
})
.catch(error => {
  console.log('Error: ',error);
});

usuarios_todos().then(arreglo => {
  console.log('Todos los usuarios: ',arreglo);
})
.catch(error => {
  console.log('Error: ',error);
});

departamentos_todos().then(arregloDep =>{
  console.log('Departamentos: ', arregloDep);
})
.catch(error => {
  console.log('Error: ',error);
});

departamentos_eliminar(id).then(success => {
  console.log(success);
}).catch(error => {
  console.log('Error: ',error);
});

/*

usuarios_eliminar(id).then(success => {
  console.log(success);
}).catch(error => {
  console.log('Error: ',error);
});

departamentos_crear(departamento).then(success => {
  console.log(success);
}).catch(error => {
  console.log('Error: ',error);
});


departamentos_actualizar(departamento, idDep).then(success => {
  console.log(success);
}).catch(error => {
  console.log('Error: ',error);
});

departamentos_crear(departamento).then(success => {
  console.log(success);
}).catch(error => {
  console.log('Error: ',error);
});

usuarios_crear(usuario).then(success => {
  console.log(success);
}).catch(error => {
  console.log('Error: ',error);
});

usuarios_actualizar(usuarioUpdate,id).then(success => {
  console.log(success);
}).catch(error => {
  console.log('Error: ',error);
});

*/
