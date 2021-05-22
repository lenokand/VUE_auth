<template>
    <div class="p-4 bg-light rounded shadow col-12 col-sm-5 col-lg-4">
        <div>
            <h3 class="fw-bolder text-black-50 mb-3" v-if="user">Welcome,
                {{user ? user.displayName : 'Guest'}} </h3>

            <div class="input-group mb-3">
      <span class="input-group-text">
      <i class="bi bi-envelope-open-fill"></i>
      </span>
                <input type="email" class="form-control" placeholder="Email" readonly
                        :value="user.email" v-if="user">
            </div>

            <hr>
            <button class="btn btn-secondary fw-bolder mt-1 d-block w-100 py-2 ">
                <i class="bi bi-box-arrow-left me-1" @click="logOut">
                </i>
                Logout
            </button>

        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "Account",
        data() {
            return {
                user: null
            }
        },
        created() {
            firebase
                .auth()
                .onAuthStateChanged((user) => {
                    if (user) {
                        this.user = user

                    } else {
                        this.user = null
                        this.$router.push('/login')
                    }
                })
        },
        methods: {
            logOut() {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        firebase
                            .auth()
                            .onAuthStateChanged(() => {
                                this.$router.push('/login')
                            })

                    })
            }
        }
    }

</script>

<style scoped lang="scss">

</style>

