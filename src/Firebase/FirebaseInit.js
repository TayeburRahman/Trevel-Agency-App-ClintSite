import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfic";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuthentication;
