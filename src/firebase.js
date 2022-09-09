import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBNZJnBGgINYdkHnpNdDISzMpmZtrjwlTw",
    authDomain: "linkedin-backend-c08f2.firebaseapp.com",
    projectId: "linkedin-backend-c08f2",
    storageBucket: "linkedin-backend-c08f2.appspot.com",
    messagingSenderId: "1076768777357",
    appId: "1:1076768777357:web:94c50d64ea48d8c101aec4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };