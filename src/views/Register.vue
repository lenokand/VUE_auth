<template>
  <div class="p-4 bg-light rounded shadow col-12 col-sm-5 col-lg-4">
    <h3 class="fw-bolder text-black-50 mb-3">Register</h3>

    <div class="input-group mb-3">
      <span class="input-group-text">
       <i class="bi bi-person-fill"></i>
      </span>
      <input type="text" class="form-control" placeholder="Username" v-model="username">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text">
      <i class="bi bi-envelope-open-fill"></i>
      </span>
      <input type="email" class="form-control" placeholder="Email" v-model="email">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text">
      <i class="bi bi-lock "></i>
      </span>
      <input type="password" class="form-control" placeholder="Password" v-model="password">
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text">
      <i class="bi bi-lock-fill"></i>
      </span>
      <input type="password" class="form-control" placeholder="Confirm" v-model="confirm">
    </div>



<hr>
  <button class="btn btn-success fw-bolder mt-1 d-block w-100 py-2 "
                              @click="registerUser"
                              :disabled="password != confirm || password <= 6"
  >
    <i class="bi bi-person-plus-fill me-1">
    </i>
  Sign Up
  </button>
    <transition name="custom-transition"
                enter-active-class="animate__animated animate__fadeInLeft"
                leave-active-class="animate__animated animate__fadeOutRight"
    >
  <ErrorAlert :message="msgError" :isError="isError"
                    @hide="hideError"/>
    </transition>
  </div>

</template>


<script>
import ErrorAlert from "../components/ErrorAlert";
import firebase from "firebase"
export default {
  name: "Register",
  components: {ErrorAlert},
  data(){
    return {
      username: '',
      email: '',
      password: '',
      confirm:'',
      isError: false,
      msgError: 'Erorrrrr'
    }
  },
  methods:{
    hideError(){
      this.isError = false
    },
    registerUser(){
    firebase.auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(res=>{
        this.isError = false
        this.msgError=''

        res.user.updateProfile({
          displayName:this.username
        })
        .then(() => {
          this.$router.push('/account')
                }

        )

      })
      .catch(err => {
        this.isError = true
        this.msgError = err.message
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
