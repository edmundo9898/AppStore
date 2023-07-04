// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYO1qam5X7VK3ufVbwx5ai5Mg4TPW-QE8",
  authDomain: "appstore-9f15a.firebaseapp.com",
  projectId: "appstore-9f15a",
  storageBucket: "appstore-9f15a.appspot.com",
  messagingSenderId: "925085352695",
  appId: "1:925085352695:web:bc9b05bec41ef7537389f2",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
