<template>
    <div class="container text-center text-white">
        <h1 class="mb-5">Signos Vitales</h1>
    </div>
    <div class="container d-flex d-flex justify-content-around">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
                <div class="card-body p-5 text-center">

                    <div class="mb-md-5 mt-md-4 pb-5">

                        <h2 class="fw-bold mb-2">Registrar Signos Vitales</h2>
                        <p class="text-white-50 mb-5">Datos Signos Vitales</p>

                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="signosV.fecha" placeholder="YYYY-MM-DD"
                                class="form-control form-control-lg" />

                        </div>
                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="signosV.oximetria" placeholder="Oximetria"
                                class="form-control form-control-lg" />
                        </div>

                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="signosV.respiratoria" placeholder="Frecuencia Respiratoria"
                                class="form-control form-control-lg" />

                        </div>
                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="signosV.cardiaca" placeholder="Frecuencia Cardiaca"
                                class="form-control form-control-lg" />

                        </div>
                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="signosV.temperatura" placeholder="Temperatura"
                                class="form-control form-control-lg" />

                        </div>
                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="signosV.presion" placeholder="Presión Arterial"
                                class="form-control form-control-lg" />

                        </div>
                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="signosV.glicemia" placeholder="Glicemia"
                                class="form-control form-control-lg" />
                        </div>
                    </div>
                    <button class="btn btn-outline-light btn-lg px-5" v-on:click="processCreate"
                        type="submit">Registrar</button>
                    <div>
                    </div>

                </div>
            </div>
        </div>
        <div class="container">
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Oximetria</th>
                        <th scope="col">Frecuencia Respiratoria</th>
                        <th scope="col">Frecuencia Cardiaca</th>
                        <th scope="col">Temperatura</th>
                        <th scope="col">Presión Arterial</th>
                        <th scope="col">Glicemia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="signosV in signos_vitales" :key="signosV.id">
                        <td>{{ signosV.oximetria }}</td>
                        <td>{{ signosV.respiratoria }}</td>
                        <td>{{ signosV.cardiaca }}</td>
                        <td>{{ signosV.temperatura }}</td>
                        <td>{{ signosV.arterial }}</td>
                        <td>{{ signosV.glicemia }}</td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-light btn-lg px-5" v-on:click="processData" type="submit">refresh</button>

        </div>

    </div>
    <div class="container mt-5 mb-5 d-flex align-items-center">

        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
                <div class="card-body p-5 text-center">

                    <div class="mb-md-5 mt-md-4 pb-5">

                        <h2 class="fw-bold mb-2">Consultar Signos Vitales</h2>
                        <p class="text-white-50 mb-5">Consutlar Signos Vitales de un Paciente</p>
                        <input type="text" v-model="onlyPaciente.id" placeholder="ID Paciente"
                            class="form-control form-control-lg" />
                    </div>
                    <button class="btn btn-outline-light btn-lg px-5" v-on:click="processGetProduct"
                        type="submit">Consultar</button>
                </div>
            </div>
        </div>

        <div class="col">
          <h2>Actualizar</h2>
          <form v-on:submit.prevent="processUpgrade">
            <input type="text" v-model="onlyPaciente.id" placeholder="ID Paciente"
                            class="form-control form-control-lg" />
            <br>
            <div class="form-outline form-white mb-4">
                            <input type="text" v-model="signosV.oximetria" placeholder="Oximetria"
                                class="form-control form-control-lg" />
                        </div>

                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="signosV.respiratoria" placeholder="Frecuencia Respiratoria"
                                class="form-control form-control-lg" />

                        </div>
                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="signosV.cardiaca" placeholder="Frecuencia Cardiaca"
                                class="form-control form-control-lg" />

                        </div>
                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="signosV.temperatura" placeholder="Temperatura"
                                class="form-control form-control-lg" />

                        </div>
                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="signosV.presion" placeholder="Presión Arterial"
                                class="form-control form-control-lg" />

                        </div>
                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="signosV.glicemia" placeholder="Glicemia"
                                class="form-control form-control-lg" />
                        </div>

            <button type="submit" class="btn btn-primary">Modificar</button>
          </form>
        </div>


        <div class="col-12 col-md-8 col-lg-6 col-xl-5 mx-4">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
                <div class="container text-center mt-4">
                    <h2>Signos Vitales</h2>
                </div>
                <div class="card-body p-5">
                    <h3>Fecha de la Toma: <span class="out">{{onlySignosV.fecha}}</span></h3>
                    <h3>Oximetria: <span class="out">{{onlySignosV.oximetria}}</span></h3>
                    <h3>Frecuencia Respiratoria: <span class="out">{{onlySignosV.respiratoria}}</span></h3>
                    <h3>Frecuencia Cardiaca: <span class="out">{{onlySignosV.cardiaca}}</span></h3>
                    <h3>Temperatura: <span class="out">{{onlySignosV.temperatura}}</span></h3>
                    <h3>Presión Arterial: <span class="out">{{onlySignosV.arterial}}</span></h3>
                    <h3>Glicemia: <span class="out">{{onlySignosV.glicemia}}</span></h3>
                </div>
            </div>

        </div>
    </div>
    <div class="container">

        <div class="container mt-5 mb-5 d-flex align-items-center">

            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white" style="border-radius: 1rem;">
                    <div class="card-body p-5 text-center">

                        <div class="mb-md-5 mt-md-4 pb-5">

                            <h2 class="fw-bold mb-2">Borrar Paciente</h2>
                            <p class="text-white-50 mb-5">borra un paciente</p>
                            <input type="text" v-model="pacienteC.cedula" placeholder="Cedula"
                                class="form-control form-control-lg" />
                        </div>
                        <button class="btn btn-outline-light btn-lg px-5" v-on:click="processDelete"
                            type="submit">Eliminar</button>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>
<script>

import axios from 'axios';
export default {
    name: "signos_vitales",
    data: function () {
        return {
            signosV: [],
            signosV: {
                id: "",
                fecha: "",
                oximetria: "",
                respiratoria: "",
                cardiaca: "",
                temperatura: "",
                arterial: "",
                glicemia: "",
            },
            onlySignosV: {
                id: "",
                fecha: "",
                oximetria: "",
                respiratoria: "",
                cardiaca: "",
                temperatura: "",
                arterial: "",
                glicemia: "",
            }
        }
    },
    methods: {
        processData: function () {
            axios.get("https://mediclick-se.herokuapp.com/signos_vitales/", {
                headers: {},
            })
                .then((result) => {
                    console.log(result.data);
                    this.pacientes = result.data;
                })
                .catch((error) => {
                    alert(error);
                });
        },
        processCreate: function () {
            axios.post("https://mediclick-se.herokuapp.com/signos_vitales/",
                this.signosV,
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
        processGetProduct: function () {
            axios.get(`https://mediclick-se.herokuapp.com/signos_vitales/${this.onlySignosV.id}/`,
                this.onlySignosV,
                {
                    headers: {},
                }
            )
                .then((result) => {
                    this.onlySignosV.fecha = result.data.fecha;
                    this.onlySignosV.oximetria = result.data.oximetria;
                    this.onlySignosV.respiratoria = result.data.respiratoria;
                    this.onlySignosV.cardiaca = result.data.cardiaca;
                    this.onlySignosV.temperatura = result.data.temperatura;
                    this.onlySignosV.arterial = result.data.arterial;
                    this.onlySignosV.glicemia = result.data.glicemia;
                })
                .catch((error) => {
                    alert(error);
                });
        },

        processUpgrade: function () {
        axios
          .put(
            `https://mediclick-se.herokuapp.com/signos_vitales/${this.signosV.id}`,
            this.signosV,
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
            alert(this.signosV.id)
            axios.delete(
                `https://mediclick-se.herokuapp.com/signos_vitales/${this.signosV.id}`,
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


        }

    },
    created: function () {
        this.processData();
    }
}

</script>
<style>
span {
    color: aqua !important;
}
</style>