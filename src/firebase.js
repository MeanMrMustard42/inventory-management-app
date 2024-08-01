import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC0HKOxUkqBqiEIb-mDhQGSkOZOGO269PE",
    authDomain: "inventory-management-app-f51d6.firebaseapp.com",
    projectId: "inventory-management-app-f51d6",
    storageBucket: "inventory-management-app-f51d6.appspot.com",
    messagingSenderId: "299307627169",
    appId: "1:299307627169:web:65af83b065459b1b24f6e0",
    measurementId: "G-W5R09NMBCV"
  };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
