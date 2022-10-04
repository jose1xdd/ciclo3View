<template>
    <div v-if="loaded" class="container mt-5">

        <div class="row d-flex justify-content-center">
            <div class="col-6 bg-white rounded">
                <div class="container d-flex justify-content-center">
                    <img src="../../img/png-clipart-user-login-mobile-phones-password-user-miscellaneous-blue.png"
                        alt="" class="img-fluid">
                </div>
                <div class="container d-flex flex-column">
                    <h3 class="cuenta">Información de su cuenta</h3>
                    <h3>Nombre: <span class="out">{{name}}</span></h3>
                    <h3>User: <span class="out">{{username}}</span></h3>
                    <h3>Correo electrónico: <span class="out">{{email}}</span></h3>
                </div>
            </div>

        </div>
    </div>


</template>
<script>
import jwt_decode from "jwt-decode";
import axios from 'axios';
export default {
    name: "account",
    data: function () {
        return {
            username: localStorage.getItem('username') || "none",
            name: "",
            email: "",
            loaded: false,
        }
    },
    methods: {
        getData: async function () {
            if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
                this.$emit('logOut');
                return;
            }
            await this.verifyToken();
            let token = localStorage.getItem("token_access");
            let userId = jwt_decode(token).user_id.toString();

            axios.get(`https://mediclick-se.herokuapp.com/user/${userId}/`, { headers: { 'Authorization': `Bearer ${token}` } })
                .then((result) => {
                    console.log(result.data.name);
                    this.name = result.data.name;
                    this.email = result.data.email;
                    this.loaded = true;
                })
                .catch(() => {
                    this.$emit('logOut');
                });
        },
        verifyToken: function () {
            return axios.post("https://mediclick-se.herokuapp.com/refresh/", { refresh: localStorage.getItem("token_refresh") }, { headers: {} }
            )
                .then((result) => {
                    localStorage.setItem("token_access", result.data.access);
                })
                .catch(() => {
                    this.$emit('logOut');
                });
        }
    },
    created: async function () {
        this.getData();
    },
}

</script>
<style>
    .cuenta{
        color: darkmagenta;
    }
</style>