// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUgk9DdloZEnm-3Ynuu2Bbv2wdxi6Mswc",
  authDomain: "meet-your-trainer.firebaseapp.com",
  projectId: "meet-your-trainer",
  storageBucket: "meet-your-trainer.appspot.com",
  messagingSenderId: "290861703738",
  appId: "1:290861703738:web:a30b90f4085941d6308b03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app