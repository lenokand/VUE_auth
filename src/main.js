import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css/animate.min.css'
import './scss/main.scss'
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAvFI15dg8MmhmifqCIxwUwIC27U4mU2PY",
    authDomain: "appvue-55329.firebaseapp.com",
    projectId: "appvue-55329",
    storageBucket: "appvue-55329.appspot.com",
    messagingSenderId: "732472955850",
    appId: "1:732472955850:web:0ea36247ac80449abaf533",
    measurementId: "G-03BQ29GCB3"
};

firebase.initializeApp(firebaseConfig)



createApp(App).use(router).mount('#app')
