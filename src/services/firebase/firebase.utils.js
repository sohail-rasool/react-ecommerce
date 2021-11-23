import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBgVsEZvqcopub451r2uJEkAQzlJFmWmCU',
  authDomain: 'online-store-18f89.firebaseapp.com',
  projectId: 'online-store-18f89',
  storageBucket: 'online-store-18f89.appspot.com',
  messagingSenderId: '1036131954798',
  appId: '1:1036131954798:web:c40bbd9fe7c22da57e767f',
  measurementId: 'G-Q38NZFF9KL',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider).catch((error) => {
    console.log(error.message);
  });
};

export default firebase;
