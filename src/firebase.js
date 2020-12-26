import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyALVGsbPM1SGDK-SJ4pdSV_OVgpj5GDW4g",
    authDomain: "discord-clone-9e559.firebaseapp.com",
    projectId: "discord-clone-9e559",
    storageBucket: "discord-clone-9e559.appspot.com",
    messagingSenderId: "923672146261",
    appId: "1:923672146261:web:b093c510e46a7c832bbfdc"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db