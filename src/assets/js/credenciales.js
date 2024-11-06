import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJFmpf_Pph5FXUpBPQs2c_PARqYQZQNSk",
  authDomain: "rendicion-79e5b.firebaseapp.com",
  projectId: "rendicion-79e5b",
  storageBucket: "rendicion-79e5b.firebasestorage.app",
  messagingSenderId: "14764309350",
  appId: "1:14764309350:web:f346f1f8a288823c5ee6a7",
};

// Initialize Firebase
const authFire = initializeApp(firebaseConfig);
export default authFire;
