// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    collection,
    addDoc,
    getDocs,
    getFirestore,
  } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB0V2XbLh9T_vAnkTC2-ejONxkIH--EhgQ",
  authDomain: "dreams-die-in-isolation.firebaseapp.com",
  projectId: "dreams-die-in-isolation",
  storageBucket: "dreams-die-in-isolation.appspot.com",
  messagingSenderId: "479363827251",
  appId: "1:479363827251:web:7e0e83c2c4ac1b12e5c546",
  measurementId: "G-RKFDQHQJDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);



const AddDreams = async (dream, obstacle, social, userid) => {
    try {
      const docRef = await addDoc(collection(db, "dreams"), {
        dream: dream,
        obstacles: obstacle,
        social: social,
        id: userid,
        
      });
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const GetDreams = async () => {
    const dreams = [];
    const querySnapshot = await getDocs(collection(db, "dreams"));
    querySnapshot.forEach((doc) => {
      dreams.push(doc.data());
    });
    return dreams;
  }

  export {AddDreams, GetDreams}

