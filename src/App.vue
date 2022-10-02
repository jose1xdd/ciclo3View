<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">MediClick</a>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li class="nav-item me-4">
              <button v-if="is_auth" class="btn btn btn-outline-info"> Inicio </button>
            </li>
            <li class="nav-item me-4">
              <button v-if="is_auth" class="btn btn btn-outline-info"> Cuenta </button>
            </li>
            <li class="nav-item me-4">
              <button v-if="is_auth" class="btn btn btn-outline-info"> Cerrar Sesión </button>
            </li>
            <li class="nav-item me-4">
              <button v-if="!is_auth" v-on:click="loadLogIn" class="btn btn btn-outline-info"
                type="submit">Login</button>
            </li>
            <li class="nav-item me-4">
              <button v-if="!is_auth" v-on:click="loadSignUp" class="btn btn btn-outline-info">Register</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="main-component">
      <router-view v-on:completedLogIn="completedLogIn" v-on:completedSignUp="completedSignUp">
      </router-view>
    </div>
  </section>
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
        if (this.is_auth == false)
          this.$router.push({ name: "Login" })
      },
      loadLogIn: function () {
        this.$router.push({ name: "Login" })
      },
      loadSignUp: function () {
        this.$router.push({ name: "register" })
      },
      completedLogIn: function (data) { },
      completedSignUp: function (data) { },
    },
    created
      : function () {
        this.verifyAuth()
      }
  }
</script>