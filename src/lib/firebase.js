import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBlZn0rJR1NX-APNqX3pKBe-gNh0u-vLLw',
  authDomain: 'movies-b9144.firebaseapp.com',
  projectId: 'movies-b9144',
  storageBucket: 'movies-b9144.appspot.com',
  messagingSenderId: '914696866689',
  appId: '1:914696866689:web:0710cca3389a2b9be93680',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
