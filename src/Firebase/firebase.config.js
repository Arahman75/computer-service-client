// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Firebase Authentication name is genius-car-doctor/ firebase project name is genius-car-doctor

// firebase project name genius car doctor

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.CT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};
// const firebaseConfig = {
//     apiKey: "AIzaSyBZat2MJoHeQ4Op_UECJaWbrqMDboDxqDE",
//     authDomain: "genius-car-doctor-b3eb8.firebaseapp.com",
//     projectId: "genius-car-doctor-b3eb8",
//     storageBucket: "genius-car-doctor-b3eb8.appspot.com",
//     messagingSenderId: "671920696156",
//     appId: "1:671920696156:web:7f8f407e99c35f5e88ef99"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;