import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'tiktok-clone-6c1d3.firebaseapp.com',
  databaseURL: 'https://tiktok-clone-6c1d3.firebaseio.com',
  projectId: 'tiktok-clone-6c1d3',
  storageBucket: 'tiktok-clone-6c1d3.appspot.com',
  messagingSenderId: '74731553965',
  appId: '1:74731553965:web:87081fcf45b4d8653fb224',
  measurementId: 'G-PH2BN77XL1',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
