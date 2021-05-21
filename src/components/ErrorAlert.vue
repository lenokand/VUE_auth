<template>
    <div class="mt-3 alert alert-danger alert-dismissible"
    v-if="isError">
        {{message}}
        <button class="btn-close" @click="$emit('hide')"></button>
    </div>
</template>

<script>
    export default {
        name: "ErrorAlert",
        props:{
            message: String,
            isError: Boolean
        },
        data(){
            return{
                showAlert: true

            }
        }

    }
</script>

<style scoped>

</style>