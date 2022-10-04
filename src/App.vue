<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark nav ">
      <div class="container-fluid  ">
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
          <a class="navbar-brand  text-white" href="#">MediClick</a>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a v-if="is_auth" class="nav-link  text-white" v-on:click="loadHome" aria-current="page">Inicio</a>
            </li>
            <li class="nav-item">
              <a v-if="is_auth" class="nav-link  text-white" v-on:click="loadAccount"> Cuenta</a>
            </li>
            <li class="nav-item dropdown">
              <a v-if="is_auth" class="nav-link dropdown-toggle  text-white" role="button" data-bs-toggle="dropdown"
                aria-expanded="false" v-on:click="">Gestiones</a>
              <ul class="dropdown-menu">
                <li><a v-if="is_auth" v-on:click="loadcrudPaciente" class="dropdown-item ">Paciente</a></li>
                <li><a class="dropdown-item">Familiar</a></li>
                <li class="nav-item">
                  <a v-if="is_auth" class="nav-link  text-black" v-on:click="loadMedico"> Medico</a>
                </li>
                <li class="nav-item">
                  <a v-if="is_auth" class="nav-link  text-black" v-on:click="loadEnfermero"> Enfermero</a>
                </li>
                <li><a class="dropdown-item">Historia Clinica</a></li>
                <li><a class="dropdown-item">Diagnostico</a></li>
                <li><a class="dropdown-item">Signos Vitales</a></li>
              </ul>

            </li>
            <li class="nav-item">
              <a v-if="is_auth" class="nav-link  text-white" v-on:click="logOut"> Cerrar Sesión </a>
            </li>
            <li class="nav-item">
              <a v-if="!is_auth" class="nav-link  text-white" v-on:click="loadLogIn"> Login</a>
            </li>

            <li class="nav-item">
              <a v-if="!is_auth" class="nav-link  text-white" v-on:click="loadSignUp">Register</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </section>
  <section>



  </section>
  <div class="main-component">
    <router-view v-on:completedLogIn="completedLogIn" v-on:completedSignUp="completedSignUp" v-on:logOut="logOut">
    </router-view>
  </div>

</template>
<script>
export default
  {
    name: 'App'
    ,
    data: function () {
      return {
        is_auth: false
      }
    },
    components: {
    },
    methods: {
      verifyAuth: function () {
        this.is_auth = localStorage.getItem("isAuth") || false;
        if (this.is_auth == false)
          this.$router.push({ name: "Login" })
        else
          this.$router.push({ name: "home" });
      },
      logOut: function () {
        localStorage.clear();
        alert("Sesión Cerrada");
        this.verifyAuth();
      },
      loadcrudPaciente:function(){
        this.$router.push({name:"crudPaciente"})
      },
      loadAccount: function () {
        this.$router.push({ name: "account" });
      },
      loadHome: function () {
        this.$router.push({ name: "home" });
      },
      loadLogIn: function () {
        this.$router.push({ name: "Login" })
      },
      loadSignUp: function () {
        this.$router.push({ name: "register" })
      },
      loadMedico: function () {
        this.$router.push({ name: "medico" })
      },
      loadEnfermero: function () {
        this.$router.push({ name: "enfermero" })
      },
      completedLogIn: function (data) {
        localStorage.setItem("isAuth", true);
        localStorage.setItem("username", data.username);
        localStorage.setItem("token_access", data.token_access);
        localStorage.setItem("token_refresh", data.token_refresh);
        alert("Autenticación Exitosa");
        this.verifyAuth();
      },
      completedSignUp: function (data) {
        alert("Registro Exitoso");
        this.completedLogIn(data);
      }
    },
    created
      : function () {
        this.verifyAuth()
      }
  }
</script>
<style>

a:hover {
  color: #1eb4ff !important;
  text-decoration: none;
}

</style>