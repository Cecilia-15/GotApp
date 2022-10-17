// Import the functions you need from the SDKs you neemport { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore/lite";
// import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhistIwvjrBd2ewTBL4wNzNvUUav0MvKw",
  authDomain: "got-app-d2ca2.firebaseapp.com",
  projectId: "got-app-d2ca2",
  storageBucket: "got-app-d2ca2.appspot.com",
  messagingSenderId: "153590182916",
  appId: "1:153590182916:web:413fa48b557d8475177151",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
// export const FirebaseStorage = getStorage( FirebaseApp )

export const userExists = async (uid) => {
  try {
    const docRef = doc(FirebaseDB, "users", uid);
    const res = await getDoc(docRef);
    return res.exists();
  } catch {}
};

export const registerNewUser = async (user) => {
  try {
    const collectionRef = collection(FirebaseDB, "users");
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch {
    console.log("Error al crear coleccion de usuarios");
  }
};

export const useSetFavourite = async (uid, favourites) => {
  try {
    const collectionRef = collection(FirebaseDB, "users");
    const docRef = doc(collectionRef, uid);

    await updateDoc(
      docRef,
      {
        favourites: favourites,
      },
      { merge: true }
    );
  } catch (error) {
    console.log("Error al insertar favoritos", error);
  }
};

export const getFavourite = async (uid) => {
  try {
    const docRef = doc(FirebaseDB, "users", uid);

    const res = await getDoc(docRef);
    return res.data().favourites || [];
  } catch (error) {
    console.log("Error al obtener favoritos", error);
  }
};
