import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseconfig";

const intializeFirebase = () => {
  initializeApp(firebaseConfig);
};
export default intializeFirebase;
