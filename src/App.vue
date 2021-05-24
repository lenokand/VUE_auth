<template>
  <div class="min-vh-100 bg-primary p-1 p-lg-3 p-sm-2 d-flex flex-column" >
    <navigation/>

<!--    <h1 class="fw-bolder text-primary">-->
<!--      <i class="bi bi-alarm-fill"></i>-->
<!--      Hello-->
<!--    </h1>-->
    <div class=" flex-grow-1 d-flex align-items-center justify-content-center
" >
  <transition name="custom-transition"
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutRight"
      >
        <router-view class="view" />
  </transition>

    </div>

  </div>

</template>
<script>
  import Navigation from './components/Navigation'

  export default {
    components:{Navigation}
  }
</script>

<style lang="scss">

</style>


