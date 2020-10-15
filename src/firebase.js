import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDGJkfmpE4rbYJEl1TO8YVkR1yokbFRZw",
  authDomain: "nwitter-5ea06.firebaseapp.com",
  databaseURL: "https://nwitter-5ea06.firebaseio.com",
  projectId: "nwitter-5ea06",
  storageBucket: "nwitter-5ea06.appspot.com",
  messagingSenderId: "957484472007",
  appId: "1:957484472007:web:4c46325a477735411a10e2",
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
