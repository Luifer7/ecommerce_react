

// Inicaliza la appd e firebase
import { initializeApp } from "firebase/app";

//es el metodo ara autenticacion
import { getAuth } from "firebase/auth";

//es el metodo para la base de datos
import { getFirestore } from "firebase/firestore";

//credencias
const firebaseConfig = {
  apiKey: "AIzaSyCojlVaW4jV0vCrxD-xOhkMZYkg8Wq96oo",
  authDomain: "ecommercereact-ccb1d.firebaseapp.com",
  projectId: "ecommercereact-ccb1d",
  storageBucket: "ecommercereact-ccb1d.appspot.com",
  messagingSenderId: "296787939250",
  appId: "1:296787939250:web:44cc8af9291692dd379eab"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)


export {auth, db}