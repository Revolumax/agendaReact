import React,{useEffect, useState} from 'react'
import { Alldates } from '../funtions/funciones'


const Inicio = () => {

    const [personajes, setPersonajes] = useState(null)

useEffect(()=>{
    Alldates(setPersonajes)
},[])


  return (
    <>
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">AgendaWebReact</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
       
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/agregar">Agregar Datos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
           <br>
           </br>
           <br>
           </br>

           <p class="h1">Bienvenido a la Api Web</p>
           <br />
<div class="container">
  <div class="row">
    <div class="col-md-20">
        <div class="table-responsive">
        <table class="table users table-hover">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Telefono</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      {personajes != null ?  (
        personajes.map(personaje =>( 
                <p>{personaje.nombre}</p>
        ))
    ) : ('No hay personajes')}
      </td>


      <td>
      {personajes != null ?  (
        personajes.map(personaje =>( 
                <p>{personaje.apellido}</p>
        ))
    ) : ('No hay personajes')}
      </td>

      <td>
      {personajes != null ?  (
        personajes.map(personaje =>( 
                <p>{personaje.telefono}</p>
        ))
    ) : ('No hay personajes')}
      </td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
    </div>
    </div>

    </>
  )
}

export default Inicio


