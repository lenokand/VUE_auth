<template>
  <div class="p-4 bg-light rounded shadow col-12 col-sm-5 col-lg-4">
    <div>
      <h3 class="fw-bolder text-black-50 mb-3">Reset password</h3>

      <div class="input-group mb-3">
      <span class="input-group-text">
      <i class="bi bi-envelope-open-fill"></i>
      </span>
        <input type="email" class="form-control" placeholder="Email" v-model="email">
      </div>

      <hr>
      <button class="btn btn-danger fw-bolder mt-1 d-block w-100 py-2 ">
        <i class="bi bi-arrow-clockwise me-1">
        </i>
        Reset
      </button>
      <transition name="custom-transition"
                  enter-active-class="animate__animated animate__fadeInLeft"
                  leave-active-class="animate__animated animate__fadeOutRight"
      >
        <ErrorAlert :message="msgError" :isError="isError"
                    @hide="hideError"/>
      </transition>
    </div>
  </div>
</template>
<script>
  import ErrorAlert from "../components/ErrorAlert";

  export default {
    name: "ResetPassword",
    components: {ErrorAlert},
    data(){
      return {

        email: '',

        isError: false,
        msgError: 'Erorrrrr'
      }
    },
    methods:{
      hideError(){
        this.isError = false
      }
    }
  }
</script>
<style lang="scss">

</style>

