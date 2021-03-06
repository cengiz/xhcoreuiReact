import * as firebase from 'firebase';
import firestore from 'firebase/firestore'


//const settings = {timestampsInSnapshots: true};

const config = {
    //apiKey: "AIzaSyD2U-4w-FU7U1Jh8ZQkid-LUn4PWmiASKM",
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "minienvanter.firebaseapp.com",
    databaseURL: "https://minienvanter.firebaseio.com",
    projectId: "minienvanter",
    storageBucket: "minienvanter.appspot.com",
    messagingSenderId: "147745854938",
    appId: "1:147745854938:web:7cd95dbb6e0545d4a51ce3"
};
console.log("GELDİİİİ");
console.log("API", process.env.REACT_APP_API_KEY)

//console.log("APİ : " + process.env.API_KEY);
//console.log("APİ : " + `${process.env.API_KEY}`);

firebase.initializeApp(config);

firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

//export default firebase;
/*
module.exports = {
    firebase,
    provider,
    auth
  }
*/
  export default { firebase, provider, auth };

export const fire = firebase
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const messaging = firebase.messaging();
export const db = firebase.firestore();