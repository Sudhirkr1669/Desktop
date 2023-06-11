
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBc6bMwKbgLq2PGDmBt4djoNCdjkJvTiJ0",
  authDomain: "du-insight.firebaseapp.com",
  projectId: "du-insight",
  storageBucket: "du-insight.appspot.com",
  messagingSenderId: "512077629264",
  appId: "1:512077629264:web:7f43eb93b39f970d32ce55"
};

export const app = initializeApp(firebaseConfig);