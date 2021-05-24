<template>
    <div class="p-4 bg-light rounded shadow col-12 col-sm-8 col-md-5 col-lg-3 chat d-flex flex-column mt-3">

        <h5 class="fw-bolder text-black-50 mb-3" v-if="user">
            {{user ? user.displayName : 'Guest'}} </h5>

            <div class="massages border rounded p-3 d-flex flex-column overflow-auto flex-grow-1">
            <div v-for="message in messages" :key="message.id" class="d-flex flex-column w-100">

                <div class="massage rounded text-white p-3 shadow-sm position-relative mb-2"
                :class="{'bg-primary align-self-end': message.uid == user.uid,
                'bg-secondary': message.uid != user.uid  }"
                >
                    <h6 class="fw-bold fst-italic"> {{message.username}}</h6>

                    <p class="mb-1 mt-2">
                        {{message.text}}
                    </p>
                    <i class="small text-white-50 position-absolute  massage-time">
                        {{new Date(message.timestamp).toLocaleTimeString('ru-RU') }}

<!--                        .{{new Date().getMonth(message.timestamp)}}-->
<!--                        .{{new Date().getDate(message.timestamp)}}-->
<!--                        {{new Date().getHours(message.timestamp) }}:{{new Date().getMinutes(message.timestamp) }}-->

                        </i>
                </div>


            </div>


<!--            <div class="massage bg-primary rounded align-self-end text-white p-3 shadow-sm position-relative my-2">-->
<!--                <h6 class="fw-bold fst-italic"> Username</h6>-->

<!--                <p class="mb-1 mt-2">-->
<!--                    454 mgggg assages border rounded p-3 d-flex flex-column overflow-auto flex-grow-1-->

<!--                </p>-->
<!--                <i class="small text-white-50 position-absolute  massage-time">time</i>-->
<!--            </div>-->


            <div>


            </div>


        </div>


        <div class=" border-top mt-3">
            <div class="input-group my-3">


                <input type="text" class="form-control"
                       v-model="newMessage"
                >
                <button type="submit" class="btn btn-outline-secondary"
                        @click="sendMessage">
                    <i class="bi bi-cursor-fill"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from "firebase";



    export default {
        name: "Chat",
        data() {
            return {
                user: null,
                newMessage: '',
                messages: []
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
        mounted() {
            const messagesRef = firebase.database().ref('messages')
            messagesRef.on('value', snapshot => {
                let data = snapshot.val()
                let messagesTMP = []
                //возвращает массив ключей объектов
                Object.keys(data).forEach((key => {
                    messagesTMP.push({
                        id: key,
                        // ...data[key]
                        username: data[key].username,
                        email: data[key].email,
                        uid: data[key].uid,
                        text: data[key].text,
                        timestamp: data[key].timestamp
                    })
                }))
                this.messages = messagesTMP
            })
        },
        methods: {
            sendMessage() {
                const messageObj = {
                    username: this.user.displayName,
                    email: this.user.email,
                    uid: this.user.uid,
                    text: this.newMessage,
                    timestamp: Date.now()
                }
                firebase
                    .database()
                    .ref('messages')
                    .push(messageObj)

                this.newMessage = ''
            }
        }
    }
</script>

<style scoped lang="scss">
    .chat {
        height: calc(100vh - 96px);

    }

    .massages {
        background-color: #ddd;
        /*height: calc(100vh - 164px);*/

    }

    .massage {
        width: 90%;

        &-time {
            bottom: .3rem;
            right: .8rem;
            display: block;
        }
    }
</style>