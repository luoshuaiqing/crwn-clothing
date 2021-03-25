import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9Cbn4GMq4spHCvIyR-ivdHc-7zKpxOLI",
    authDomain: "crwn-db-931ce.firebaseapp.com",
    projectId: "crwn-db-931ce",
    storageBucket: "crwn-db-931ce.appspot.com",
    messagingSenderId: "288060412136",
    appId: "1:288060412136:web:aa63545accf734f27b795d",
    measurementId: "G-50S2WFZSF5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;