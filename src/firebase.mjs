import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZvDh1RozFRMRjcUDNTE1kfi-419FLfBk",
  authDomain: "todolist-6ca3c.firebaseapp.com",
  projectId: "todolist-6ca3c",
  storageBucket: "todolist-6ca3c.appspot.com",
  messagingSenderId: "625225975965",
  appId: "1:625225975965:web:7be0c92db791c01b7a6c74",
  measurementId: "G-X7DPY9C27Y"
};

  firebase.initializeApp(firebaseConfig);
  export const db= firebase.firestore();
  console.log(db);