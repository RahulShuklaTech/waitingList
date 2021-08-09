import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBenZi3IYVwmKJoxK4DKcq3QdK3K5E4qyc",

  authDomain: "waitingroom-ea0a2.firebaseapp.com",

  databaseURL: "https://waitingroom-ea0a2-default-rtdb.firebaseio.com",

  projectId: "waitingroom-ea0a2",

  storageBucket: "waitingroom-ea0a2.appspot.com",

  messagingSenderId: "247189448737",

  appId: "1:247189448737:web:eb0ad5343d5b131bef9b60"

  };


firebase.initializeApp(firebaseConfig);
export default firebase;