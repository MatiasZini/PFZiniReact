import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAsU2yv2qRehrSJh5_UpjX3zudf37Vw5BE",
  authDomain: "proyecto-final-675da.firebaseapp.com",
  projectId: "proyecto-final-675da",
  storageBucket: "proyecto-final-675da.appspot.com",
  messagingSenderId: "808072105808",
  appId: "1:808072105808:web:2607b4600c0a811b196655"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);