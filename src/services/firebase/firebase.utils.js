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

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider).catch((error) => {
    console.log(error.message);
  });
};

// storing data in data base
export const createUserProfileDocument = async (
  userAuth,
  addtionalInformation
) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalInformation,
      });
    } catch (error) {
      console.log('Error in creating User', error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const trasformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return trasformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
