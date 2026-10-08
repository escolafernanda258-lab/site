const firebaseConfig = {
  apiKey: "AIzaSyA2kpdjCB1vnAc0JGiYZ0mHcSZ0a8pGL0A",
  authDomain: "clostlowyse.firebaseapp.com",
  projectId: "clostlowyse",
  storageBucket: "clostlowyse.firebasestorage.app",
  messagingSenderId: "176975435165",
  appId: "1:176975435165:web:efa1b00111bd1942f94b74"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Serviços usados pelo admin.js
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();