import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBQQRRWpNDCHnPf8gbE_r-xYI1PvCDWCVo",
    authDomain: "mymoney-cc59b.firebaseapp.com",
    projectId: "mymoney-cc59b",
    storageBucket: "mymoney-cc59b.appspot.com",
    messagingSenderId: "14762772498",
    appId: "1:14762772498:web:f76cb8ae43e08718f9f0cb"
};

//init firebase
firebase.initializeApp(firebaseConfig)


//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }