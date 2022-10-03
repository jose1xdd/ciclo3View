<template>
    <div class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">

                            <div class="mb-md-5 mt-md-4 pb-5">

                                <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
                                <p class="text-white-50 mb-5">Please enter your informacion!</p>

                                <div class="form-outline form-white mb-4">
                                    <input type="text" v-model="user.username" placeholder="Username" id="typeEmailX"
                                        class="form-control form-control-lg" />
                                    <label class="form-label" for="typeEmailX"></label>
                                </div>

                                <div class="form-outline form-white mb-4">
                                    <input type="password" v-model="user.password" placeholder="Password"
                                        id="typePasswordX" class="form-control form-control-lg" />
                                    <label class="form-label" for="typePasswordX"></label>
                                </div>

                                <div class="form-outline form-white mb-4">
                                    <input type="text" v-model="user.name" placeholder="Name"
                                        id="typePasswordX" class="form-control form-control-lg" />
                                    <label class="form-label" for="typePasswordX"></label>
                                </div>

                                <div class="form-outline form-white mb-4">
                                    <input type="text" v-model="user.email" placeholder="Email"
                                        id="typePasswordX" class="form-control form-control-lg" />
                                    <label class="form-label" for="typePasswordX"></label>
                                </div>

                                <button class="btn btn-outline-light btn-lg px-5" v-on:click="processSignUp" type="submit">Register</button>

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
    name: "register",
    data: function () {
        return {
            user: {
                username: "",
                password: "",
                name: "",
                email: "",
                account: {
                    lastChangeDate: (new Date()).toJSON().toString(),
                    isActive: true
                }
            }
        }
    },
    methods: {
        processSignUp: function () {
            axios.post(
                "https://mediclick-se.herokuapp.com/user/",
                this.user,
                { headers: {} }
            )
                .then((result) => {
                    let dataSignUp = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }
                    this.$emit('completedSignUp', dataSignUp)
                })
                .catch((error) => {
                    console.log(error)
                    alert("ERROR: Fallo en el registro.");
                });
        }
    }
}
</script>
<style>

</style>