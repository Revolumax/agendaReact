import React, { useState } from 'react';
import axios from 'axios';

const MyForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('https://cors-anywhere.herokuapp.com/http://www.raydelto.org/agenda.php', formData)
      .then(response => {
        // Manejar la respuesta exitosa
        console.log(response.data);
      })
      .catch(error => {
        // Manejar el error
        console.error(error);
      });
  };

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
            <a class="nav-link" ></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<br />
<br />
<p class="h1">Inserta la informacion que deseas en la Api Web</p>
<br />
  <div class="container-fluid w-10">
  <div class="justify-content-around">
    <div class="row" id="map_section">
        <div class="col-7  border border-5" alt="...">
        <form onSubmit={handleSubmit}>
  <div class="form-row">
    <div class="col">
      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} class="form-control" placeholder="Ingrese el nombre"/>
    </div>
    <br/>
    <div class="col">
      <input type="text" name="apellido"  value={formData.apellido}   onChange={handleChange} class="form-control" placeholder="Ingrese el apellido"/>
    </div>
    <br />
    <div class="col">
      <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} class="form-control" placeholder="Ingrese el telefono"/>
    </div>
    <br />
    <button class="btn btn-primary" type="submit">Enviar Datos</button>
  </div>
</form>
        </div>
    </div>
</div>
</div>
    
    </>
  );
};

export default MyForm;