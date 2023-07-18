import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC5YnMN3ax2CLfhYZbHcYd4md8SDFn5uug",
  authDomain: "dogstoremila.firebaseapp.com",
  projectId: "dogstoremila",
  storageBucket: "dogstoremila.appspot.com",
  messagingSenderId: "254189137474",
  appId: "1:254189137474:web:a34d2b3e680fbaffd207db"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)