// importaciones Firebase
import { getFirestore, collection, getDocs,doc } from 'firebase/firestore';
import { firebaseConfig } from "./scripts/credentials/db";
import { initializeApp } from "firebase/app";
import { user_auth } from "./scripts/auth/auth"; 
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css'
import { 
  usuarios_departamento, 
  usuarios_actualizar,
  usuarios_eliminar, 
  usuarios_getId,
  usuarios_crear,
  usuarios_todos,
} from "./scripts/users/users";
import { 
  departamentos_actualizar, 
  departamentos_eliminar,
  departamentos_crear,
  departamentos_getId,
  departamentos_todos,
} from "./scripts/department/department";
import { SuperGestiion } from './SuperGestiion';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <SuperGestiion />,
  document.getElementById('root')
);
// variables de testeo
const id = "EIryW6FVozRpQuckPjKv";
const idDep = 'HTIvmnj1tWdQ2sHLJcyX';

const usuario = {
  apellidos: "Gonzalez Romero",
  departamento: "Carnes Frias",
  dias: "L,M,V,S",
  edad: 22,
  genero: "Masculino",
  nombre: "Paco",
  pass: "12345",
  role: "Asesor de ventas",
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


usuarios_departamento('Vinos').then(arreglo => {
  console.log('Usuarios Por departamento: ',arreglo);
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

usuarios_getId(id).then(usuario =>{
  console.log('usuario: ', usuario);
})
.catch(error => {
  console.log('Error: ',error);
});

departamentos_getId(idDep).then(departamento =>{
  console.log('departamento: ', departamento);
})
.catch(error => {
  console.log('Error: ',error);
});
/*

departamentos_eliminar(id).then(success => {
  console.log(success);
}).catch(error => {
  console.log('Error: ',error);
});


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


usuarios_actualizar(usuarioUpdate,id).then(success => {
  console.log(success);
}).catch(error => {
  console.log('Error: ',error);
});

usuarios_crear(usuario).then(success => {
  console.log(success);
}).catch(error => {
  console.log('Error: ', error);
});

*/
