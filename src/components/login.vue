<template>
        <div class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white" style="border-radius: 1rem;">
                            <div class="card-body p-5 text-center">

                                <div class="mb-md-5 mt-md-4 pb-5">

                                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p class="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div class="form-outline form-white mb-4">
                                        <input type="email" v-model="user.username" placeholder="Username"
                                            id="typeEmailX" class="form-control form-control-lg" />
                                        <label class="form-label" for="typeEmailX">Email</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" v-model="user.password" placeholder="Password"
                                            id="typePasswordX" class="form-control form-control-lg" />
                                        <label class="form-label" for="typePasswordX">Password</label>
                                    </div>


                                    <button class="btn btn-outline-light btn-lg px-5" v-on:click="processLogInUser" type="submit">Login</button>

                                </div>

                                <div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "login",
    data: function () {
        return {
            user: {
                username: "",
                password: "",
            }
        }
    },
    methods: {
        processLogInUser: function () {
            axios.post(
                "https://mediclick-se.herokuapp.com/login/",
                this.user,
                { headers: {} }
            )
                .then((result) => {
                    let dataLogIn = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }
                    this.$emit('completedLogIn', dataLogIn)
                })
                .catch((error) => {

                    if (error.response.status == "401")
                        alert("ERROR 401: Credenciales Incorrectas.");

                });
        }
    }
}
</script>