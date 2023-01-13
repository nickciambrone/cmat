// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, getDocs, setDoc, query } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgp9JopT3tkZYEhfOKm6Qe0UAlNklLAWU",
  authDomain: "cmat-92a35.firebaseapp.com",
  projectId: "cmat-92a35",
  storageBucket: "cmat-92a35.appspot.com",
  messagingSenderId: "162737908190",
  appId: "1:162737908190:web:d4c1456953e9a69a3b554f",
  measurementId: "G-T4TE3QRNCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth()

export const signInAuthUserEmailPassword = async (email, password) => {
   if (!email || !password) return;
   return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)


export const getUsersClientCollecion =  async (email) => {
  const clientsInUserRef = collection(db, `Users/${email}/Clients`);
  const q = query(clientsInUserRef);
  const ClientsInUserSnapshot = await getDocs(q);
  const arr = [];
  ClientsInUserSnapshot.docs.map((d) => {
    arr.push(d.data());
  });

  return arr;

}