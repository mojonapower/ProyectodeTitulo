import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDUmVzKZl4Zk3_dVEE82OZnuPPe532jy7k",
    authDomain: "vecinalnorte-46f81.firebaseapp.com",
    projectId: "vecinalnorte-46f81",
    storageBucket: "vecinalnorte-46f81.appspot.com",
    messagingSenderId: "411089402642",
    appId: "1:411089402642:web:0cd63d16ee076ee58311cb"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };
