<template>
    <div class="container d-flex justify-content-center">
        <h1>¡Bienvenido <span> {{name}} </span>!</h1>
    </div>
</template>
<script>
import jwt_decode from "jwt-decode";
import axios from 'axios';
export default {
    name: "home",
    data: function () {
        return {
            name: "",
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
