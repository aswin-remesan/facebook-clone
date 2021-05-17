import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAe1mKE7belUm8a2vfFbxV-x23W9dQbino",
    authDomain: "facebook-clone-4ff63.firebaseapp.com",
    projectId: "facebook-clone-4ff63",
    storageBucket: "facebook-clone-4ff63.appspot.com",
    messagingSenderId: "590141469506",
    appId: "1:590141469506:web:5f40f2a4642d573774cedb"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export { db, storage }