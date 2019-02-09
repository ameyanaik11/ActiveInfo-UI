import { getFirebaseApiKey } from "./storeSecret";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: getFirebaseApiKey(),
  databaseURL: "https://ameya-naik-com.firebaseio.com"
};
firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();
export const activeInfoRef = databaseRef.child("public/activeInfo");
export const homepageStatsRef = databaseRef.child("public/homepageStats");
export const projectsRef = databaseRef.child("public/projects");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
