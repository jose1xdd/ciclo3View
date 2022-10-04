<template>
    <div class="container text-center text-white">
        <h1 class="mb-5">Gestion de Paciente</h1>
    </div>
    <div class="container d-flex d-flex justify-content-around">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
                <div class="card-body p-5 text-center">

                    <div class="mb-md-5 mt-md-4 pb-5">

                        <h2 class="fw-bold mb-2">Registrar</h2>
                        <p class="text-white-50 mb-5">registra un paciente</p>

                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="pacienteC.cedula" placeholder="Cedula"
                                class="form-control form-control-lg" />

                        </div>
                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="pacienteC.nombre" placeholder="Nombre"
                                class="form-control form-control-lg" />
                        </div>

                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="pacienteC.apellido" placeholder="Apellido"
                                class="form-control form-control-lg" />

                        </div>
                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="pacienteC.direccion" placeholder="Direccion"
                                class="form-control form-control-lg" />

                        </div>
                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="pacienteC.telefono" placeholder="Telefono"
                                class="form-control form-control-lg" />

                        </div>
                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="pacienteC.ciudad" placeholder="Ciudad"
                                class="form-control form-control-lg" />

                        </div>
                        <div class="form-outline form-white mb-4">
                            <input type="text" v-model="pacienteC.fecha" placeholder="YYYY-MM-DD"
                                class="form-control form-control-lg" />
                        </div>
                    </div>
                    <button class="btn btn-outline-light btn-lg px-5" v-on:click="processCreate"
                        type="submit">Register</button>
                    <div>
                    </div>

                </div>
            </div>
        </div>
        <div class="container">
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">cedula</th>
                        <th scope="col">nombre</th>
                        <th scope="col">apellido</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="paciente in pacientes" :key="paciente.cedula">
                        <td>{{ paciente.cedula }}</td>
                        <td>{{ paciente.nombre }}</td>
                        <td>{{ paciente.apellido }}</td>
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

                        <h2 class="fw-bold mb-2">Consultar Paciente</h2>
                        <p class="text-white-50 mb-5">consulta un paciente</p>
                        <input type="text" v-model="onlyPaciente.cedula" placeholder="Cedula"
                            class="form-control form-control-lg" />
                    </div>
                    <button class="btn btn-outline-light btn-lg px-5" v-on:click="processGetProduct"
                        type="submit">Consultar</button>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-8 col-lg-6 col-xl-5 mx-4">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
                <div class="container text-center mt-4">
                    <h2>Paciente</h2>
                </div>
                <div class="card-body p-5">
                    <h3>cedula: <span class="out">{{onlyPaciente.cedula}}</span></h3>
                    <h3>nombre: <span class="out">{{onlyPaciente.nombre}}</span></h3>
                    <h3>apellido: <span class="out">{{onlyPaciente.apellido}}</span></h3>
                    <h3>direccion: <span class="out">{{onlyPaciente.direccion}}</span></h3>
                    <h3>telefono: <span class="out">{{onlyPaciente.telefono}}</span></h3>
                    <h3>ciudad: <span class="out">{{onlyPaciente.ciudad}}</span></h3>
                    <h3>fecha: <span class="out">{{onlyPaciente.fecha}}</span></h3>
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
                            type="submit">Consultar</button>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>
<script>

import axios from 'axios';
export default {
    name: "crudPaciente",
    data: function () {
        return {
            pacientes: [],
            pacienteC: {
                cedula: "",
                nombre: "",
                apellido: "",
                direccion: "",
                telefono: "",
                ciudad: "",
                fecha: "",
            },
            onlyPaciente: {
                nombre: "",
                apellido: "",
                direccion: "",
                telefono: "",
                ciudad: "",
                fecha: "",
            }
        }
    },
    methods: {
        processData: function () {
            axios.get("https://mediclick-se.herokuapp.com/paciente/", {
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
            axios.post("https://mediclick-se.herokuapp.com/paciente/",
                this.pacienteC,
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
            axios.get(`https://mediclick-se.herokuapp.com/paciente/${this.onlyPaciente.cedula}/`,
                this.onlyPaciente,
                {
                    headers: {},
                }
            )
                .then((result) => {
                    this.onlyPaciente.nombre = result.data.nombre;
                    this.onlyPaciente.apellido = result.data.apellido;
                    this.onlyPaciente.direccion = result.data.direccion;
                    this.onlyPaciente.telefono = result.data.telefono;
                    this.onlyPaciente.ciudad = result.data.ciudad;
                    this.onlyPaciente.fecha = result.data.fecha;
                })
                .catch((error) => {
                    alert(error);
                });
        },

        processDelete: function () {
            alert(this.pacienteC.cedula)
            axios.delete(
                `http://127.0.0.1:8000/paciente/${this.pacienteC.cedula}`,
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