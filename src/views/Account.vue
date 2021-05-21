<template>
  <div  class="p-4 bg-light rounded shadow col-12 col-sm-5 col-lg-4">
    <div>
      <h3 class="fw-bolder text-black-50 mb-3">Welcome, Username </h3>

      <div class="input-group mb-3">
      <span class="input-group-text">
      <i class="bi bi-envelope-open-fill"></i>
      </span>
        <input type="email" class="form-control" placeholder="Email" readonly value="usermail@domain.com">
      </div>

      <hr>
      <button class="btn btn-secondary fw-bolder mt-1 d-block w-100 py-2 ">
        <i class="bi bi-box-arrow-left me-1">
        </i>
Logout
      </button>

    </div>
  </div>
</template>

<script>
export default {
  name: "Account"
}
</script>

<style scoped lang="scss">

</style>

