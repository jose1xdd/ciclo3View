<template>
    <h1 style="text-align: center">
      ¡Medico!
    </h1>
    <br />
    <br />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Crear</h2>
          <form v-on:submit.prevent="processCreate">
            <input
              type="text"
              class="form-control"
              v-model="elementP.Paciente"
              placeholder="Nombre Paciente"
            />
            <br />
            <input
              type="number"
              class="form-control"
              v-model="elementP.Cedula"
              placeholder="Cedula Paciente"
            />
            <br />
            <br />
            <br />
            <button type="submit" class="btn btn-primary">Crear</button>
          </form>
        </div>
        <div class="col">
          <h2>Consultar</h2>
          <form v-on:submit.prevent="processGetMedico">
            <input
              type="text"
              class="form-control"
              v-model="elementP.Historia"
              placeholder="Consulte Historia Clinica"
            />
            <br />
            <input
              type="text"
              class="form-control"
              v-model="elementP.Familiar"
              placeholder="Consulte Familiar - Paciente"
            />
            <br />
            <br />
            <br />
            <button type="submit" class="btn btn-primary">Consultar</button>
          </form>
        </div>
        <div class="col">
          <h2>Actualizar</h2>
          <form v-on:submit.prevent="processUpgrade">
            <input
              type="text"
              class="form-control"
              v-model="elementP.Historia"
              placeholder="Actualice Historia Clinica"
            />
            <br />
            <input
              type="text"
              class="form-control"
              v-model="elementP.Familiar"
              placeholder="Actualice Familiar - Paciente"
            />
            <br />
            <br />
            <br />
            <button type="submit" class="btn btn-primary">Modificar</button>
          </form>
        </div>
        <div class="col">
          <h2>Borrar</h2>
          <form v-on:submit.prevent="processDelete">
            <input
              type="text"
              class="form-control"
              v-model="elementP.Paciente"
              placeholder="Paciente"
            />
            <br />
            <input
              type="text"
              class="form-control"
              v-model="elementP.Familiar"
              placeholder="Familiar"
            />
            <br />
            <br />
            <br />
            <button type="submit" class="btn btn-primary">Borrar</button>
          </form>
        </div>
      </div>
    </div>
    <br />
    <br />
    <button class="btn btn-secondary" v-on:click="processData">Actualizar tabla</button>
    <table class="table">
      <thead>
        <tr>
          <th>Medico</th>
          <th>Paciente</th>
          <th>Historia</th>
          <th>Familiar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="Medico in Medicos" :key="Medico.Cedula">
          <td>{{ Medico.name }}</td>
          <td>{{ Medico.familiar }}</td>
          <td>{{ Medico.Paciente }}</td>
          <td>{{ Medico.Historia }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  <script>
  import axios from "axios";
  export default {
    name: "Medicos",
    data: function () {
      return {
        username: localStorage.getItem("username") || "none",
        Medicos: [],
        elementP: {
          cedula: "",
          especialidad: "",
          nombre: "",
          apellido: "",
          direccion: "",
          telefono: "",
          ciudad: "",
          fecha: "",
        },
        onlyOneP: {
          
        },
      };
    },
    methods: {
      processData: function () {
        axios
          .get("https://mediclick-se.herokuapp.com/medico/", {
            headers: {},
          })
          .then((result) => {
            console.log(result.data);
            this.Medicos = result.data;
          })
          .catch((error) => {
            alert(error);
          });
      },
      processCreate: function () {
        axios
          .post(
            "https://mediclick-se.herokuapp.com/medico/",
            this.elementP,
            {
              headers: {},
            }
          )
          .then((result) => {
            alert(result.status + " Creado exitosamente..");
          })
          .catch((error) => {
            alert(error);
          });
      },
      processGetMedico: function () {
        axios
          .get(
            `https://mediclick-se.herokuapp.com/medico/${this.elementP.cedula}`,
            this.elementP,
            {
              headers: {},
            }
          )
          .then((result) => {
            this.onlyOneP.nombre = result.data.nombre;
            this.onlyOneP.cedula = result.data.cedula;
          })
          .catch((error) => {
            alert(error);
          });
      },
      processUpgrade: function () {
        axios
          .put(
            `https://mediclick-se.herokuapp.com/medico/${this.elementP.cedula}`,
            this.elementP,
            {
              headers: {},
            }
          )
          .then((result) => {
            alert(result.status + " Actualizado exitosamente..");
          })
          .catch((error) => {
            alert(error);
          });
      },
      processDelete: function () {
        axios
          .delete(
            `https://mediclick-se.herokuapp.com/medico/${this.elementP.cedula}`,
            {
              headers: {},
            }
          )
          .then((result) => {
            alert(result.status + " Borrado exitosamente..");
          })
          .catch((error) => {
            alert(error);
          });
      },
    },
    created: function () {
      this.processData();
    },
  };
  </script>
  <style>

    a:hover {
      color: #1eb4ff !important;
      text-decoration: none;
    }
    
    </style>